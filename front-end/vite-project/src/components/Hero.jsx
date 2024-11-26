import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { MdOutlineLocalOffer } from 'react-icons/md';
import { FaStar } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS when component mounts
  }, []);

  return (
    <section className="relative bg-hero bg-cover bg-center bg-no-repeat h-screen w-full pb-12">
      <div className='max_padd_container relative top-16 xs:top-36'>
        {/* Title with AOS animation */}
        <h1 
          data-aos="fade-down"
          className='h2 capitalize max-w-[37rem] text-white'>
          AgriRise: Empowering Farmers, Elevating Agriculture
        </h1>
        
        {/* Description with AOS animation */}
        <p 
          data-aos="fade-up"
          className="text-white opacity-50 regular-16 mt-6 max-w-[33rem]">
          Join AgriRise in revolutionizing agriculture.
        </p>

        {/* Star Ratings */}
        <div className="flexStart !items-center gap-x-4 my-10">
            <div className="!regular-24 flexCenter gap-x-3">
                <FaStar color="#F2C94C" />
                <FaStar color="#F2C94C" />
                <FaStar color="#F2C94C" />
                <FaStar color="#F2C94C" />
            </div>
            <div className="bold-16 sm:bold-20 text-white">
              176k <span className="text-white opacity-50 ml-2 regular-16 sm:regular-20">Excellent Reviews</span>
            </div>
        </div>

        {/* Buttons */}
        <div className="max-xs:flex-col flex gap-2">
          <NavLink 
            to={''}
            data-aos="zoom-in"
            className={"btn_dark_rounded flexCenter"}>
            Shop now
          </NavLink>
          
          <NavLink 
            to={''}
            data-aos="zoom-in"
            className={"btn_dark_rounded flexCenter gap-x-2"}>
            <MdOutlineLocalOffer className="text-2xl" /> Offers
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
