import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component from react-router-dom
import { FcGoogle } from 'react-icons/fc'; // Google icon

const Login = () => {
  // Dummy function for Google sign-in
  const handleGoogleSignIn = () => {
    // Add your Google sign-in logic here
    console.log('Sign in with Google');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-lg">
        <h2 className="text-2xl font-bold text-center">Login to AITUBE</h2>
        
        {/* Google Sign-In Button */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center py-2 border border-gray-300 rounded hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          <FcGoogle className="text-2xl mr-2" /> {/* Google icon */}
          Sign in with Google
        </button>

        {/* Form Fields */}
        <form className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter your username"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        {/* New to AITUBE? Sign up Text with Hyperlink */}
        <p className="text-sm text-center text-gray-600">
          New to AITUBE?{' '}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
