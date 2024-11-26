import { Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect } from "react"; // Import useState and useEffect for managing loader state
import Navbar from "./components/Navbar";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Loader from "./components/Loader"; // Import the loader component

function AppContent() {
  const location = useLocation(); // Get the current route
  const [loading, setLoading] = useState(true); // State to manage loading

  const isLoginRoute = location.pathname === "/login"; // Check if we are on the /login route

  // Simulate page loading or data fetching
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after a delay
    }, 4000); // Show loader for 4 seconds
    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, [location]);

  return (
    <main className="bg-primary text-tertiary">
      {loading ? (
        <Loader /> // Show loader while loading
      ) : (
        <>
          <Routes>
            <Route path="/login" element={<Login />} />
            {/* Add more routes as needed */}
          </Routes>

          {!isLoginRoute && <Navbar />} {/* Render Navbar if not on /login */}
          {!isLoginRoute && <Admin />} {/* Render Admin if not on /login */}
          {!isLoginRoute && <Footer />} {/* Render Footer if not on /login */}
        </>
      )}
    </main>
  );
}

export default function App() {
  return (
    <AppContent />
  );
}
