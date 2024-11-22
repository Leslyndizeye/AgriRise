import React, { useEffect, useState } from 'react';
import { TbTrash } from "react-icons/tb";
import Loader from './Loader'; // Import Loader

const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(false); // Loader state

  const fetchInfo = async () => {
    await fetch('http://localhost:4000/allproducts')
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const removeProduct = async (id) => {
    setLoading(true); // Show loader
    await fetch('http://localhost:4000/removeproduct', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: id }),
    });
    await fetchInfo();
    setTimeout(() => setLoading(false), 2000); // Hide loader after 2 seconds
  };

  return (
    <div className='p-2 box-border bg-white mb-0 rounded-sm w-full sm:p-4 sm:m-7'>
      {loading && <Loader />} {/* Render loader */}
      <h4 className='bold-22 p-5 uppercase'>Product List</h4>
      <div className='max-h-[77vh] overflow-auto px-4 text-center'>
        <table className='w-full mx-auto'>
          <thead>
            <tr className='bg-primary bold-14 sm:regular-22 text-start py-12'>
              <th className='p-2'>Products</th>
              <th className='p-2'>Title</th>
              <th className='p-2'>Old Price</th>
              <th className='p-2'>New Price</th>
              <th className='p-2'>Category</th>
              <th className='p-2'>Remove</th>
            </tr>
          </thead>
          <tbody>
            {allProducts.map((product, i) => (
              <tr key={i} className='border-b border-slate-900/20 text-gray-20 p-6 medium-14'>
                <td className='flexStart sm:flex-center'>
                  <img
                    src={product.image}
                    alt=""
                    height={43}
                    width={43}
                    className='rounded-lg ring- ring-slate-900/5 my-1'
                  />
                </td>
                <td><div className='line-clamp-3'>{product.name}</div></td>
                <td>${product.old_price}</td>
                <td>{product.new_price}</td>
                <td>{product.category}</td>
                <td>
                  <div
                    style={{ color: "red", cursor: "pointer" }}
                    className='bold-22 pl-6 sm:pl-14'
                  >
                    <TbTrash onClick={() => removeProduct(product.id)} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListProduct;
