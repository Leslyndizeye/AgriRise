import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Offer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (1 second)
      once: true, // Animation occurs only once
      offset: 200, // Animation starts when 200px away from the viewport
    });
  }, []);

  return (
    <section className="bg-banneroffer bg-cover bg-center w-full px-4 py-24 mt-16">
      <div className="max_padd_container text-center">
        {/* Title with Scroll Animation */}
        <h2 
          data-aos="fade-down" 
          className="h2 text-white">
          Empower Your Harvest
        </h2>

        {/* Subheading with Scroll Animation */}
        <h3 
          data-aos="fade-up" 
          className="h3 capitalize text-white mt-4">
          Premium Tools & Resources for Smarter Farming
        </h3>

        {/* Button with Zoom-in Animation */}
        <button 
          data-aos="zoom-in" 
          className="btn_dark_rounded mt-6">
          Explore Now
        </button>
      </div>
    </section>
  );
};

export default Offer;
