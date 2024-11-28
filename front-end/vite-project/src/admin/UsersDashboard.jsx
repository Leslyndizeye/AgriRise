import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const UsersDashboard = () => {
  const [allUsers, setAllUsers] = useState([]); // State to hold users
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageVisible, setMessageVisible] = useState(false);

  // Fetch users
  const fetchUsers = async () => {
    await fetch("http://localhost:4000/allusers") // Assuming the endpoint to fetch all users is '/allusers'
      .then((res) => res.json())
      .then((data) => {
        setAllUsers(data.users); // Update state with fetched users
      });
  };

  // Call fetch function on component mount
  useEffect(() => {
    fetchUsers(); // Fetch users when the component mounts
    console.log(allUsers);
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 shadow-md">
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-200">AgriRise Admin</h3>
        </div>
        <nav className="mt-6">
          <ul>
            <li>
              <Link
                to="/admin"
                className="block px-6 py-3 text-white hover:bg-gray-700"
              >
                Admin
              </Link>
            </li>
            <li>
              <Link
                to="/users"
                className="block px-6 py-3 text-white hover:bg-gray-700"
              >
                Users Dashboard
              </Link>
            </li>
            {/* Add more links here */}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <header className="flex justify-between items-center bg-white shadow-sm p-4 rounded-lg">
          <h1 className="text-2xl font-bold text-gray-800">Users Dashboard</h1>
        </header>

        {/* Users Section */}
        <section className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-800">Total Users</h2>
            <p className="mt-2 text-3xl font-bold text-yellow-500">
              {allUsers.length}
            </p>
          </div>
        </section>

        {/* Users List Section */}
        <section className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Manage Users</h2>
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-200 px-4 py-2">Name</th>
                  <th className="border border-gray-200 px-4 py-2">Email</th>
                  <th className="border border-gray-200 px-4 py-2">Role</th>
                  <th className="border border-gray-200 px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {allUsers.length > 0 ? (
                  allUsers.map((user) => (
                    <tr key={user._id}>
                      <td className="border border-gray-200 px-4 py-2">
                        {user.name}
                      </td>
                      <td className="border border-gray-200 px-4 py-2">
                        {user.email}
                      </td>
                      <td className="border border-gray-200 px-4 py-2">
                        {user.role === "Admin" ? "Farmer" : user.role}
                      </td>
                      <td className="border border-gray-200 px-4 py-2">
                        <button className="text-blue-500 hover:underline mr-2">
                          Edit
                        </button>
                        <button className="text-red-500 hover:underline">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center py-4">
                      No users available
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
  );
};

export default UsersDashboard;
