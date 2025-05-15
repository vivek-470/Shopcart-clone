import React from "react";
import { useForm } from "react-hook-form";

function Contactus() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    const formData = {
      access_key: "c1d7a506-24d8-4ae7-ba16-315620fe0962",
      name: data.name,
      email: data.email,
      message: data.message,
    };

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (result.success) {
      alert("Form submitted  successfully!");

      reset();
    } else {
      console.error("Form submission error:", result);
    }
  }

  return (
    <section  id="contact">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="md:py-[120px] py-[100px] h-full flex md:gap-18 gap-5 justify-center md:items-start flex-col md:flex-row items-center"
      >
        {/* Left */}
        <div className="md:w-[400px] md:text-xl flex flex-col gap-4 px-3">
          <h1>Contact Us We’re here to help! If you have any questions, feedback, or
          need support, feel free to reach out to us.</h1>
          <h1 className="font-bold"> 📧 Email:Vk9704599@.com 📞 </h1>
          <span className="font-bold"></span>
         <h1> Available: Monday to Saturday, 9 AM – 7 PM 📍 Head Office Address:
          Shopcart 123, Main Street, City, State -132001 Code India</h1>
        </div>

        {/* Right */}
        <div className="w-[350px] md:w-[400px] flex flex-col gap-2">
          <h1 className="text-xl font-bold">Let's connect!</h1>

          <input
            {...register("name", {
              required: "Name is required",
              minLength: { value: 3, message: "Min 3 characters" },
            })}
            className={`border-2 w-full rounded-[15px] h-[40px] p-2 focus:outline-none focus:border-purple-500 ${
              errors.name ? "border-red-600" : ""
            }`}
            placeholder="Your Name..."
          />
          {errors.name && <p className="text-red-600">{errors.name.message}</p>}

          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Invalid email address",
              },
            })}
            className={`border-2 rounded-[15px] h-[40px] p-2 focus:outline-none focus:border-purple-500 ${
              errors.email ? "border-red-600" : ""
            }`}
            placeholder="Your Email..."
          />
          {errors.email && (
            <p className="text-red-600">{errors.email.message}</p>
          )}

          <textarea
            {...register("message", {
              required: "Message is required",
              minLength: { value: 10, message: "Min 10 characters" },
            })}
            className={`border-2 rounded-[15px] h-[130px] p-2 focus:outline-none focus:border-purple-500 ${
              errors.message ? "border-red-600" : ""
            }`}
            placeholder="Your Message..."
          />
          {errors.message && (
            <p className="text-red-600">{errors.message.message}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting || isSubmitSuccessful}
            className="border-2 bg-purple-500 text-white h-[60px] font-bold text-xl rounded-[8px] cursor-pointer"
          >
            {isSubmitting
              ? "Sending..."
              : isSubmitSuccessful
              ? "Sent!"
              : "Send Message"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default Contactus;
