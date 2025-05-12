import React from 'react'
import { Link } from 'react-router-dom'
const Signup = () => {
  return (
    <div className="min-h-screen bg-pink-100 flex items-center justify-center w-full max-w-[1530px] py-[100px]">
    <div className="bg-white p-8 rounded-2xl shadow-lg w-[350px] md:w-[450px]">
      <h2 className="text-2xl font-bold mb-6 text-pink-600 text-center">
        Sign Up
      </h2>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter full name"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email or Phone
          </label>
          <input
            type="text"
            placeholder="Enter email or phone"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="Create password"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Confirm password"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-pink-500 text-white py-2 rounded-xl hover:bg-pink-600 transition-colors duration-300"
        >
          Sign Up
        </button>
      </form>

      {/* Login link */}
      <p className="mt-6 text-center text-sm text-gray-600">
        Already have an account?
        <Link
          to="/login"
          className="text-pink-600 font-semibold hover:underline"
        >
          Log in
        </Link>
      </p>
    </div>
  </div>
  )
}

export default Signup
