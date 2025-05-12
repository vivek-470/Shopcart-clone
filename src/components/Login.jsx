import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className="min-h-screen bg-pink-100 flex items-center w-full max-w-[1530px] justify-center">
    <div className="bg-white p-8 rounded-2xl shadow-lg w-[350px] md:w-[400px] ">
      <h2 className="text-2xl font-bold mb-6 text-pink-600 text-center">
        Login
      </h2>
      <form>
        <div className="mb-4">
          <label className=" text-sm font-medium text-gray-700 mb-1">
            Email or Phone
          </label>
          <input
            type="text"
            placeholder="Enter email or phone"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>
        <div className="mb-6">
          <label className=" text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-pink-500 text-white py-2 rounded-xl hover:bg-pink-600 transition-colors duration-300"
        >
          Login
        </button>
      </form>
      {/* signup form */}
      <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-pink-600 font-semibold hover:underline"
          >
            Sign up
          </Link>
        </p>
    </div>
  </div>
  )
}

export default Login
