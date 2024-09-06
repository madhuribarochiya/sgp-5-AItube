// import React from 'react';
// import { Link } from 'react-router-dom'; // Import the Link component from react-router-dom
// import { FcGoogle } from 'react-icons/fc'; // Google icon

// const Signup = () => {
//   // Dummy function for Google sign-up
//   const handleGoogleSignUp = () => {
//     // Add your Google sign-up logic here
//     console.log('Sign up with Google');
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-lg">
//         <h2 className="text-2xl font-bold text-center">Sign Up for AITUBE</h2>

//         {/* Google Sign-Up Button */}
//         <button
//           onClick={handleGoogleSignUp}
//           className="w-full flex items-center justify-center py-2 border border-gray-300 rounded hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500"
//         >
//           <FcGoogle className="text-2xl mr-2" /> {/* Google icon */}
//           Sign up with Google
//         </button>

//         {/* Form Fields */}
//         <form className="space-y-4">
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
//             <input
//               type="text"
//               id="name"
//               className="w-full p-2 border border-gray-300 rounded mt-1"
//               placeholder="Enter your name"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               id="email"
//               className="w-full p-2 border border-gray-300 rounded mt-1"
//               placeholder="Enter your email"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
//             <input
//               type="text"
//               id="username"
//               className="w-full p-2 border border-gray-300 rounded mt-1"
//               placeholder="Choose a username"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//             <input
//               type="password"
//               id="password"
//               className="w-full p-2 border border-gray-300 rounded mt-1"
//               placeholder="Create a password"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
//             <input
//               type="date"
//               id="dob"
//               className="w-full p-2 border border-gray-300 rounded mt-1"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
//             <select
//               id="gender"
//               className="w-full p-2 border border-gray-300 rounded mt-1"
//               required
//             >
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//             </select>
//           </div>
//           <div>
//             <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
//             <textarea
//               id="description"
//               className="w-full p-2 border border-gray-300 rounded mt-1"
//               placeholder="Tell us about yourself"
//             />
//           </div>
//           <div>
//             <label htmlFor="about" className="block text-sm font-medium text-gray-700">About</label>
//             <input
//               type="text"
//               id="about"
//               className="w-full p-2 border border-gray-300 rounded mt-1"
//               placeholder="LinkedIn ID, etc."
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full py-2 mt-4 bg-blue-600 text-white rounded hover:bg-blue-700"
//           >
//             Sign Up
//           </button>
//         </form>

//         {/* Already have an account? Sign in Text with Hyperlink */}
//         <p className="text-sm text-center text-gray-600">
//           Already have an account?{' '}
//           <Link to="/login" className="text-blue-600 hover:underline">
//             Sign in
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;
import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { MdOutlineCancel } from 'react-icons/md';
import avatar from '../data/avatar.jpg'; // Example avatar image

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    dob: '',
    gender: '',
    description: '',
    about: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGoogleSuccess = (response) => {
    console.log('Google login successful:', response);
    navigate('/'); // Redirect to home or desired route
  };

  const handleGoogleError = (error) => {
    console.log('Google login error:', error);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Sign Up</h2>
          <button onClick={() => navigate('/')} className="text-gray-500 dark:text-gray-300">
            <MdOutlineCancel size={24} />
          </button>
        </div>

        {/* Google Sign-Up Button */}
        <div className="mb-6">
          <GoogleLogin
            clientId="YOUR_GOOGLE_CLIENT_ID"
            buttonText="Sign Up with Google"
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleError}
            className="w-full"
          />
        </div>

        {/* Form */}
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded-md w-full"
              placeholder="John Doe"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded-md w-full"
              placeholder="example@example.com"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded-md w-full"
              placeholder="johndoe"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded-md w-full"
              placeholder="••••••••"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="dob" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Date of Birth</label>
            <input
              id="dob"
              name="dob"
              type="date"
              value={formData.dob}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Gender</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded-md w-full"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows="3"
              className="mt-1 p-2 border rounded-md w-full"
              placeholder="Tell us about yourself"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="about" className="block text-sm font-medium text-gray-700 dark:text-gray-300">About</label>
            <input
              id="about"
              name="about"
              type="text"
              value={formData.about}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded-md w-full"
              placeholder="LinkedIn ID, etc."
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Sign Up
          </button>
        </form>

        {/* Link to Login */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Already have an account? <a href="/login" className="text-blue-600 hover:underline">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
