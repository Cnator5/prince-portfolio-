"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import emailjs from "@emailjs/browser";
import { FaPaperPlane, FaSpinner, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const notyf = new Notyf({
      position: { x: "right", y: "top" },
      duration: 4000,
      dismissible: true,
    });

    emailjs
      .sendForm("service_69up7qo", "template_cmn6k5d", form.current, {
        publicKey: "HyqfIAxGsF-YSCY6-",
      })
      .then(
        () => {
          notyf.success("Submitted successfully");
          console.log("SUCCESS!");
          setFormData({ name: '', email: '', message: '' }); // Clear form data
          setIsSubmitting(false);
        },
        (error) => {
          notyf.error("Failed sending");
          console.log("FAILED...", error.text);
          setIsSubmitting(false);
        }
      );
  };

  const openWhatsApp = () => {
    const phoneNumber = "+237651624573"; // Replace with your WhatsApp business number
    const message = encodeURIComponent("Hello, I have a question about your services.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 p-6 md:p-12">
      <div className="flex-1 flex flex-col md:flex-row gap-8 items-center justify-center">
        <div className="w-full md:w-1/2 max-w-lg">
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="bg-gray-800 p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
          >
            <h2 className="text-3xl font-semibold mb-6 text-white text-center">Get in Touch</h2>

            <div className="mb-6">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-gray-700 border border-gray-600 text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 transition-all duration-300 focus:shadow-lg"
                placeholder="John Doe"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-700 border border-gray-600 text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 transition-all duration-300 focus:shadow-lg"
                placeholder="name@domain.com"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">
                Your message
              </label>
              <textarea
                id="message"
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="bg-gray-700 border border-gray-600 text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 transition-all duration-300 focus:shadow-lg resize-none"
                placeholder="Write your message here..."
                required
              />
            </div>

            <div className="flex items-center mb-6">
              <input
                id="subscribe"
                type="checkbox"
                className="w-4 h-4 border border-gray-600 rounded bg-gray-700 focus:ring-3 focus:ring-blue-300"
              />
              <label htmlFor="subscribe" className="ml-2 text-sm font-medium text-gray-300">
                Subscribe to our newsletter
              </label>
            </div>

            <div className="mt-6 flex justify-between items-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all duration-300 transform hover:scale-105 flex items-center justify-center flex-1 mr-2"
              >
                {isSubmitting ? (
                  <FaSpinner className="animate-spin mr-2" />
                ) : (
                  <FaPaperPlane className="mr-2" />
                )}
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              <button
                type="button"
                onClick={openWhatsApp}
                className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <FaWhatsapp className="mr-2" />
                Chat on WhatsApp
              </button>
            </div>
          </form>
        </div>

        <div className="w-full md:w-1/2 max-w-lg mt-8 md:mt-0">
          <div className="relative h-64 md:h-[450px] rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105">
            <Image
              src="/images/WhatsApp Image 2024-09-22 at 18.48.47_89733636.jpg"
              alt="Antenna installation"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <h3 className="text-xl font-semibold mb-2">Expert Installation</h3>
              <p className="text-sm">Our team ensures top-quality antenna setups for optimal performance.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;