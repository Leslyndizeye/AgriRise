import { useContext } from "react";
import product_rt_1 from "../assets/product_rt_1.png";
import product_rt_2 from "../assets/product_rt_2.png";
import product_rt_3 from "../assets/product_rt_3.png";
import product_rt_4 from "../assets/product_rt_4.png";
import { MdStar } from "react-icons/md";
import { ShopContext } from "../pages/Context/ShopContext";

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);

    return (
        <section>
            <div className="flex flex-col gap-14 xl:flex-row">
                {/* Left side: Product Images */}
                <div className="flex gap-x-2 xl:flex-1">
                    <div className="flex flex-col gap-[7px] flex-wrap">
                        <img src={product_rt_1} alt="product image" className="max-h-[99px]" />
                        <img src={product_rt_2} alt="product image" className="max-h-[99px]" />
                        <img src={product_rt_3} alt="product image" className="max-h-[99px]" />
                        <img src={product_rt_4} alt="product image" className="max-h-[99px]" />
                    </div>
                    <div>
                        <img src={product.image} alt="" />
                    </div>
                </div>
                {/* Right side: Product Details */}
                <div className="flex-col flex xl:flex-[1.7]">
                    <h3 className="h3">{product.name}</h3>
                    <div className="flex gap-x-2 text-secondary medium-22">
                        <MdStar />
                        <MdStar />
                        <MdStar />
                        <MdStar />
                        <p>(1 review)</p>
                    </div>
                    <div className="flex gap-x-6 medium-20 my-4">
                        <div className="font-semibold text-[grey]"> AVAILABLE QUANTITY: {product.old_price} kg |</div>
                        <div className="text-secondary">{product.new_price} RWF</div>
                    </div>
                    <div className="mb-4">
                        <h4 className="bold-16">Choose Quantity</h4>
                        <div className="flex gap-3 my-3">
                            <div className="ring-2 cursor-pointer hover:ring-4 ring-slate-900 h-10 w-10 flexCenter">1kg</div>
                            <div className="ring-2 ring-slate-900/10 h-10 w-10 flexCenter cursor-pointer">10kg</div>
                            <div className="ring-2 ring-slate-900/10 h-10 w-10 flexCenter cursor-pointer">20kg</div>
                            <div className="ring-2 ring-slate-900/10 h-10 w-10 flexCenter cursor-pointer">50kg</div>
                        </div>
                        <div className="flex flex-col gap-y-3 mb-4 max-w-[555px]">
                            <button onClick={() => { addToCart(product.id) }} className="btn_dark_outline !rounded-none uppercase regular-14 tracking-widest">Add to Cart</button>
                            <button className="btn_dark_rounded !rounded-none uppercase regular-14 tracking-widest">Order Now</button>
                        </div>
                        <p><span className="medium-16 text-tertiary">Category :</span> Fertilizers | Seeds | Tools</p>
                        <p><span className="medium-16 text-tertiary">Tags:</span> Organic | Eco-friendly | High Yield</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDisplay;
