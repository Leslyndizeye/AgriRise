import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import UsersDashboard from "./UsersDashboard";

const AdminDashboard = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageVisible, setMessageVisible] = useState(false);
  const navigate = useNavigate();

  const isAuthenticated = localStorage.getItem("authenticated");

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  const fetchInfo = async () => {
    await fetch("http://localhost:4000/allproducts")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  };

  const fetchUsers = async () => {
    await fetch("http://localhost:4000/allusers")
      .then((res) => res.json())
      .then((data) => {
        setAllUsers(data.users);
      });
  };

  useEffect(() => {
    fetchInfo();
    fetchUsers();
  }, []);

  const removeProduct = async (id) => {
    setLoading(true);
    await fetch("http://localhost:4000/removeproduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    await fetchInfo();
    setLoading(false);

    setMessage("Product removed successfully!");
    setMessageVisible(true);

    setTimeout(() => {
      setMessageVisible(false);
    }, 2000);
  };

  const handleLogout = () => {
    localStorage.removeItem("authenticated");
    navigate("/logins");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="min-h-screen bg-gray-100 flex">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 text-white h-screen">
          <div className="py-4 px-6 md:text-2xl font-bold text-center">
            AgriRise Admin
          </div>
          <nav className="mt-10">
            <Link
              to="/admin"
              className="block py-2.5 px-4 text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Admin
            </Link>
            <Link
              to="/users"
              className="block py-2.5 px-4 text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Users Dashboard
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <header className="flex justify-between items-center bg-white shadow-sm p-4 rounded-lg">
            <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
            <button
              onClick={handleLogout}
              className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
            >
              Logout
            </button>
          </header>

          {/* Overview Section */}
          <section className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-gray-800">Total Products</h2>
              <p className="mt-2 text-3xl font-bold text-green-500">
                {allProducts.length}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-gray-800">Total Orders</h2>
              <p className="mt-2 text-3xl font-bold text-blue-500">2</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-gray-800">Active Users</h2>
              <Link to="/users" className="mt-2 text-3xl font-bold text-yellow-500">
                {allUsers.length}
              </Link>
            </div>
          </section>

          {/* Manage Products Section */}
          <section className="mt-8 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Manage Products
            </h2>
            <div className="overflow-x-auto">
              <table className="table-auto w-full border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-200 px-4 py-2">Product</th>
                    <th className="border border-gray-200 px-4 py-2">Category</th>
                    <th className="border border-gray-200 px-4 py-2">Price</th>
                    <th className="border border-gray-200 px-4 py-2">Stock</th>
                    <th className="border border-gray-200 px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {allProducts.length > 0 ? (
                    allProducts.map((product) => (
                      <tr key={product.id}>
                        <td className="border border-gray-200 px-4 py-2">{product.name}</td>
                        <td className="border border-gray-200 px-4 py-2">{product.category}</td>
                        <td className="border border-gray-200 px-4 py-2">{`${product.price}/kg`}</td>
                        <td className="border border-gray-200 px-4 py-2">{product.stock}</td>
                        <td className="border border-gray-200 px-4 py-2">
                          <button className="text-blue-500 hover:underline mr-2">Edit</button>
                          <button
                            className="text-red-500 hover:underline"
                            onClick={() => removeProduct(product.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="text-center py-4">
                        No products available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>

          {/* Display Message */}
          {messageVisible && (
            <div className="mt-4 text-red-500 text-lg font-bold">{message}</div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
