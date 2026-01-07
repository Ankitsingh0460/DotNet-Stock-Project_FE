import React from "react";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <>
      <div class="min-h-screen bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 flex items-center justify-center">
        <div class="w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
          <div class="relative hidden md:flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-10">
            <div class="absolute inset-0 bg-white/10 backdrop-blur-xl"></div>

            <div class="relative z-10 text-white text-center">
              <h1 class="text-3xl font-bold mb-2">Welcome Page</h1>
              <p class="text-sm opacity-90">Sign in to your account</p>
            </div>

            <div class="absolute bottom-0 left-0 w-full h-24 bg-white rounded-t-full"></div>
          </div>

          <div class="p-8 md:p-12">
            <h2 class="text-gray-700 text-sm">Hello!</h2>
            <h1 class="text-2xl font-bold text-purple-600 mb-6">
              Good Morning
            </h1>

            <p class="text-sm text-gray-500 mb-6">Login Your Account</p>

            <form class="space-y-5">
              <div>
                <label class="text-xs text-gray-500">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter email"
                  class="w-full border-b-2 border-purple-400 focus:outline-none focus:border-purple-600 py-2"
                />
              </div>

              <div>
                <label class="text-xs text-gray-500">Password</label>
                <input
                  type="password"
                  placeholder="Enter password"
                  class="w-full border-b-2 border-purple-400 focus:outline-none focus:border-purple-600 py-2"
                />
              </div>

              <div class="flex items-center justify-between text-sm text-gray-500">
                <label class="flex items-center gap-2">
                  <input type="checkbox" class="accent-purple-500"></input>
                  Remember
                </label>
                <a href="#" class="hover:text-purple-600">
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                class="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-md font-semibold hover:opacity-90 transition"
              >
                SUBMIT
              </button>
              <Link to="/signup">
                <p class="text-center text-purple-600 font-semibold">
                  Create Account
                </p>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
