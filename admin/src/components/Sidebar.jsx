import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineAppstore } from 'react-icons/ai';
import { GiFarmer } from 'react-icons/gi';
import { FiCloud } from 'react-icons/fi'; // Import weather icon

const Sidebar = () => {
  return (
    <div className="h-fixed w-[400px] bg-gray-800 text-white">
      <ul className="mt-4">
        <li className="p-3 hover:bg-gray-700">
          <Link to="/listproduct" className="flex items-center">
            <AiOutlineAppstore className="mr-3" /> Products
          </Link>
        </li>
        <li className="p-3 hover:bg-gray-700">
          <Link to="/addproduct" className="flex items-center">
            <AiOutlineHome className="mr-3" /> Add Product
          </Link>
        </li>
        <li className="p-3 hover:bg-gray-700">
          <Link to="/expert" className="flex items-center">
            <GiFarmer className="mr-3" /> Expert Tips
          </Link>
        </li>
        <li className="p-3 hover:bg-gray-700">
          <Link to="/weather" className="flex items-center">
            <FiCloud className="mr-3" /> Weather
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
