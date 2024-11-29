import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
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
import About from "./pages/About";
import AdminDashboard from './admin/AdminDashboard';
import UsersDashboard from './admin/UsersDashboard';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './PrivateRoute'; // Import the PrivateRoute component
import Checkout from './components/Checkout';

function App() {
  return (
    <main className="bg-primary text-tertiary">
      <ShopContextProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ShopContextProvider>
    </main>
  );
}

function AppRoutes() {
  const location = useLocation();

  const isAdminPage = location.pathname === "/admin";
  const isUsersPage = location.pathname === "/users";
  const isLogin = location.pathname === "/login";
  const isLoginPage = location.pathname === "/logins";  
  return (
    <>
      <div className="w-full">
        {/* Conditionally render the Header only if not on the Admin page */}
        {!isAdminPage && !isUsersPage && !isLoginPage && !isLogin && <Header />}
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Vegetables" element={<Category category="Vegetables" banner={bannerVegetables} />} />
        <Route path="/Fruits" element={<Category category="Fruits" banner={bannerFruits} />} />
        <Route path="/Grains" element={<Category category="Grains" banner={bannerGrains} />} />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/logins" element={<LoginPage />} /> {/* Correct route for login */}
        <Route path="/cart-page" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about" element={<About />} />

        {/* Use PrivateRoute to protect admin and users pages */}
        <Route path="/admin" element={<PrivateRoute element={<AdminDashboard />} />} />
        <Route path="/users" element={<PrivateRoute element={<UsersDashboard />} />} />
      </Routes>
      {!isAdminPage && !isUsersPage && !isLoginPage && !isLogin && <Footer />}
    </>
  );
}


export default App;