const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://AgriRise:l2wDepUwTUXBmizU@cluster0-shard-00-00.viifw.mongodb.net:27017,cluster0-shard-00-01.viifw.mongodb.net:27017,cluster0-shard-00-02.viifw.mongodb.net:27017/AgriRise?ssl=true&replicaSet=atlas-14ddpe-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0")

// Api Creation

app.get("/", (req, res) => {
    res.send("Express App is running");
})

const storage = multer.diskStorage({
    destination:'./upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})
//creat upload endpoint for images

app.use('/images', express.static('upload/images'))
app.post("/upload", upload.single('product'), (req, res) => {
    console.log("File uploaded:", req.file); // Log file details
    if (!req.file) {
        return res.status(400).json({ success: 0, message: "No file uploaded" });
    }
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    })
})

const Product = mongoose.model("Product", {
    id:{
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
    },
    new_price: {
        type: Number,
        required: true,
    },
    old_price: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
    available: {
        type: Boolean,
        default: true
    }
})

app.post('/addproduct', async(req, res) => {
    let products = await Product.find({});
    let id;
    if(products.length > 0) {
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id + 1;

    } else {
        id = 1;
    }
    const product = new Product({
        id: id,
        name: req.body.name,
        image:req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
    });
    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
        sucess: true,
        name:req.body.name,
    })
})

// creating api for add products
app.post('/removeproduct', async(req, res) => {
    await Product.findOneAndDelete({id: req.body.id});
    console.log("Removed");
    res.json({
        success: true,
        name:req.body.name,
    })
})

// creating api for get all products
app.get('/allproducts', async (req, res) => {
    let products = await Product.find({});
        console.log("All products Fetched");
        res.send(products);
})

const User = mongoose.model('User', {
    name: {
        type: String,
    },
    email: {
        type: String,
        unique:true,
    },
    password: {
        type: String,
    },
    role: {
        type: String,
        default: "user",
    },

    cartData: {
        type:Object,
    },
    date: {
        type: Date,
        default: Date.now,
    }
})

app.post('/signup', async(req, res) => {
    let check = await User.findOne({email: req.body.email});
    if(check){
        return res.status(400).json({success: false, errors: "Existing user found with same email address"});
    }
    let cart = {};
    for (let i = 0; i < 300; i++){
        cart[i] = 0;
    }
    const user = new User({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password,
        cartData: cart,
    });
    await user.save();

    const data = {
        user: {
            id: user.id
        }
    }
    const token = jwt.sign(data, 'secret_ecom');
    res.json({sucess: true, token});
})

app.post('/login', async (req, res) => {
    let user = await User.findOne({email:req.body.email});   
    if(user) {
        const passMatch = req.body.password === user.password;
        if(passMatch){
            const data = {
                user: {
                    id: user.id
                }
            }
            const token = jwt.sign(data, 'secret_ecom');
            res.json({
                success: true,
                token,
                user: {
                    id: "user_id",
                    name: "User Name",
                    email: "user@example.com",
                    role: "user",
                    date: "2024-11-23T00:00:00.000Z"
                }
            });
        } else {
            res.json({success:false, errors:"Wrong Password"});
        }
    } else {
        res.json({success:false, errors:"Wrong Email address"});
    } 
})

app.get('/newcollections', async(req, res)=>{
    let products= await Product.find({});
    let newcollection = products.slice(1).slice(-8);
    console.log("Newcollection Fetched")
    res.send(newcollection);
})

app.get('/popularproducts', async (req, res) => {
    let products = await Product.find({ "category": "Vegetables"});
    let popularproducts = products.slice(0, 4); 
    console.log("Popular Products Fetched");
    res.send(popularproducts);
})

const fetchUser = async (req, res, next) => {
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({errors: "please authenticate using a valid login"});
    }
    else {
        try {
            const data = jwt.verify(token, 'secret_ecom');
            req.user = data.user;
            next();
        } catch (error) {
            res.status(401).send({errors: "Please authenticate using a valid login"});
        }
    }
    }
        app.post('/addtocart', fetchUser, async (req, res) => {
            console.log("Added", req.body.itemId)
            let userData = await User.findOne({_id: req.user.id});
            userData.cartData[req.body.itemId] += 1;
            await User.findOneAndUpdate({_id: req.user.id}, {cartData: userData.cartData}
            );
            res.send("Added");
        });

        app.post('/removefromcart', fetchUser, async (req, res) => {
            console.log("Removed", req.body.itemId)
            let userData = await User.findOne({_id: req.user.id})
            if (userData.cartData[req.body.itemId] > 0)
            userData.cartData[req.body.itemId] -= 1;
            await User.findOneAndUpdate({ _id: req.user.id },{ cartData: userData.cartData }
            );
            res.send("Removed");
        });

        app.post('/getcart', fetchUser, async (req, res) => {
            console.log('Get cart');
            try {
                let userData = await User.findOne({ _id: req.user.id });
                console.log('User Data:', userData); // Log the user data for debugging
                if (!userData) {
                    return res.status(404).json({ error: "User not found" });
                }
                res.json(userData.cartData);
            } catch (err) {
                console.error("Error in getcart:", err);
                res.status(500).json({ error: "Internal Server Error" });
            }
        });
        

app.listen(port, (error) => {
    if(!error) {
        console.log("Server is Successfully Running, and App is listening on port " + port);
    } else {
        console.log("Error occurred, server can't start" + error);
    }
})