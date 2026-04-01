import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-6">

        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Contact Me
        </h1>

        <p className="text-center text-gray-600 mb-12">
          Feel free to reach out for collaborations or just a friendly hello 👋
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl shadow-md flex flex-col gap-6"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="6"
              required
              className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="submit"
              className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition"
            >
              Send Message
            </button>
          </form>

          {/* Social Links / Info */}
          <div className="flex flex-col justify-center items-center bg-white p-8 rounded-xl shadow-md text-center">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Connect with me
            </h2>

            <div className="flex gap-6 text-3xl mb-6">
              <a
                href="https://github.com/mistiadhikari"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-600 transition"
              >
                <FaGithub />
              </a>
              <a
                href="hhttps://linkedin.com/misti-adhikari-08am24"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/mistiiiiiii__/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition"
              >
                <FaInstagram />
              </a>
            </div>

            <p className="text-gray-600 mb-2">Email: mistichettri815@gmail.com</p>
            <p className="text-gray-600">Phone: +977-9821594700</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;