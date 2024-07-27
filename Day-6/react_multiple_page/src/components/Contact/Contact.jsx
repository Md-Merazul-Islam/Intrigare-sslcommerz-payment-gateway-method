import React from 'react'

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-200">
      <div className="max-w-screen-md text-center p-4">
        <h1 className="text-4xl font-bold mb-8 text-blue-600">Contact Us</h1>
        
        <p className="text-lg text-gray-700 mb-8">
          We’d love to hear from you! If you have any questions, suggestions, or just want to say hello, feel free to reach out to us using the form below.
        </p>
        
        <form className="bg-white p-6 rounded-lg shadow-lg w-full">
          <div className="mb-4">
            <label htmlFor="name" className="block text-left text-gray-700 mb-2">Name</label>
            <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded-lg bg-white" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-left text-gray-700 mb-2">Email</label>
            <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded-lg bg-white" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-left text-gray-700 mb-2">Message</label>
            <textarea id="message" className="w-full p-2 border border-gray-300 rounded-lg bg-white" rows="4"></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg">Send Message</button>
        </form>
        
        <div className="mt-8 text-lg text-gray-700">
          Or reach us at: <br />
          <a href="mailto:info@yourwebsite.com" className="text-blue-600">info@yourwebsite.com</a><br />
          <a href="tel:+1234567890" className="text-blue-600">+1 234 567 890</a>
        </div>
      </div>
    </div>
  )
}

export default Contact