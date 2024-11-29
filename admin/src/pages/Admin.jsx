import React from 'react'
import Sidebar from '../components/Sidebar'
import { Routes, Route } from "react-router-dom"
import AddProduct from '../components/AddProduct'
import ListProduct from '../components/ListProduct'
import Expert from '../components/Expert'
import Weather from '../components/Weather';
import { useEffect } from 'react'

const Admin = () => {

  useEffect(() => {
    const token = localStorage.getItem('auth-token');
    if (!token) {
      window.location.replace('/login');
    }
  }, []);

  return (
    <div className='lg:flex'>
        <Sidebar />
        <Routes>
            <Route path='/addproduct' element={<AddProduct />}/>
            <Route path='/listproduct' element={<ListProduct />}/>
            <Route path='/expert' element={<Expert />}/>
            <Route path='/weather' element={<Weather />}/>

        </Routes>
    </div>
  )
}

export default Admin