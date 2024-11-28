import React from "react";

const AboutUs = () => {
  return (
    <div>
      {/* Hero Section with Dark Overlay */}
      <section className="relative bg-cover bg-center text-white h-screen flex flex-col justify-center items-center" style={{ backgroundImage: "url('https://assets.weforum.org/article/image/GA8VNP2I6YbZ_S-WqfOegwL4LJvhQ3CakkfJBOJOEJY.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About AgriRise</h1>
          <p className="text-lg md:text-2xl font-light text-white">
            Empowering farmers by connecting them to markets and transforming agricultural products into sustainable businesses.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            At AgriRise, we aim to empower farmers by helping them connect with larger markets to sell their agricultural products.
            We provide a platform where farmers can showcase their produce, allowing them to reach more customers and maximize their sales potential.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-gray-100 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Vision</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We envision a world where smallholder farmers have access to global markets, enabling them to achieve sustainable livelihoods and contribute to food security worldwide.
            By bridging the gap between local agriculture and market demand, AgriRise strives to uplift farming communities and transform the agricultural supply chain.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="value-item bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-[green]">Sustainability</h3>
              <p className="text-gray-500">We are committed to promoting environmentally friendly and sustainable farming practices to protect the land for future generations.</p>
            </div>
            <div className="value-item bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold  mb-2 text-[green]">Community Empowerment</h3>
              <p className="text-gray-500">By connecting farmers to wider markets, we empower them to grow their businesses and improve their livelihoods, contributing to stronger communities.</p>
            </div>
            <div className="value-item bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-[green] ">Innovation</h3>
              <p className="text-gray-500">We believe in leveraging technology and innovative solutions to improve the agricultural value chain and ensure better outcomes for farmers and consumers alike.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
