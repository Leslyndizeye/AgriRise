import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Footer from "./components/Footer";

function AppContent() {
  const location = useLocation(); // Get the current route

  const isLoginRoute = location.pathname === "/login"; // Check if we are on the /login route

  return (
    <main className="bg-primary text-tertiary">
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* Add more routes as needed */}
      </Routes>

      {!isLoginRoute && <Navbar />} {/* Render Navbar if not on /login */}
      {!isLoginRoute && <Admin />} {/* Render Navbar if not on /login */}
      {!isLoginRoute && <Footer />} {/* Render Footer if not on /login */}
    </main>
  );
}

export default function App() {
  return (
      <AppContent />
  );
}
