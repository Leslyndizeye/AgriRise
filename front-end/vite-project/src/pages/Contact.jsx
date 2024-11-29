import React from "react";

const ContactUs = () => {
  return (
    <div>
      {/* Hero Section with Dark Overlay */}
      <section
        className="relative bg-cover bg-center text-white h-screen flex flex-col justify-center items-center"
        style={{ backgroundImage: "url('https://www.investin-rwanda.com/images/agriculture.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact AgriRise</h1>
          <p className="text-lg md:text-2xl font-light">
            Get in touch with us to learn more about how AgriRise can help you grow.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Contact Information</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Feel free to reach out to us anytime. We're here to help farmers succeed and transform agriculture together.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="contact-item bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-[green]">Email</h3>
              <p className="text-gray-500">contact@agririse.com</p>
            </div>
            <div className="contact-item bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-[green]">Phone</h3>
              <p className="text-gray-500">+250 788 123 456</p>
            </div>
            <div className="contact-item bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-[green]">Location</h3>
              <p className="text-gray-500">Kigali, Rwanda</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">Send Us a Message</h2>
          <form className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-green-300"
                placeholder="Your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-green-300"
                placeholder="Your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-green-300"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 focus:outline-none focus:ring"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
