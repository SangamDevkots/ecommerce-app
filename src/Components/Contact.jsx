import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white mx-auto py-20">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Our Information</h2>
            <p className="text-gray-400 mb-2">123 Main Street</p>
            <p className="text-gray-400 mb-2">Cityville, Country</p>
            <p className="text-gray-400 mb-2">Email: info@example.com</p>
            <p className="text-gray-400 mb-2">Phone: +1 (123) 456-7890</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-400 mb-2">Your Name</label>
                <input type="text" id="name" name="name" className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-400 mb-2">Your Email</label>
                <input type="email" id="email" name="email" className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-400 mb-2">Your Message</label>
                <textarea id="message" name="message" rows="4" className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white"></textarea>
              </div>
              <button type="submit" className="bg-violet-600 text-white rounded-md px-4 py-2 transition duration-300 hover:bg-violet-700 focus:outline-none focus:shadow-outline-violet">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
