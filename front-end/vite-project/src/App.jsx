import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Headers";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import Product from "./components/Product";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import bannerVegetables from "./assets/bannerVegetables.png";
import bannerFruits from "./assets/bannerFruits.png";
import bannerGrains from "./assets/bannerGrains.png";
import ShopContextProvider from "./pages/Context/ShopContext.jsx";

export default function App() {
  return (
    <main className="bg-primary text-tertiary">
      <ShopContextProvider>
        <BrowserRouter>
          <div className="w-full">
            <Header /> {/* Ensures the Header occupies full width */}
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Vegetables" element={<Category category="Vegetables" banner={bannerVegetables}/>} />
            <Route path="/Fruits" element={<Category category="Fruits" banner={bannerFruits}/>} />
            <Route path="/Grains" element={<Category category="Grains" banner={bannerGrains}/>} />
            <Route path="/product" element={<Product />}>
              <Route path=":productId" element={<Product />}/>
            </Route>
            <Route path="/cart-page" element={<Cart />}/>
            <Route path="/login" element={<Login />}/>
          </Routes>
          <Footer />
        </BrowserRouter>
      </ShopContextProvider>  
    </main>
  );
}