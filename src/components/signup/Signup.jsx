import React, { useState } from 'react';
import jobData from '../../assets/JobData.json';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = { email, password };

    // Simulate saving to a JSON file
    try {
      const response = await fetch('/../../assets/Users.json');
      const users = await response.json();

      // Check if user already exists
      const userExists = users.find(user => user.email === email);
      if (userExists) {
        setMessage('User already exists.');
        return;
      }

      // Simulate saving the new user to the JSON file
      // In a real application, you would send this to your backend
      users.push(newUser);
      console.log('User registered:', users); // Log the new user data to the console
      setMessage('User registered successfully! You can log in now.');
    } catch (error) {
      console.error('Error fetching users:', error);
      setMessage('Error signing up. Please try again later.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-yellow-600 mb-6">Sign Up</h2>

        {message && <p className="text-center text-gray-600 mb-4">{message}</p>}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="flex items-center justify-between mb-4">
            <button
              type="submit"
              className="bg-yellow-600 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              Sign Up
            </button>
          </div>

          <p className="text-center text-gray-600 text-sm">
            Already have an account? <a href="/loginpage" className="text-yellow-600 hover:text-yellow-500">Log In</a>
          </p>
        </form>
      </div>
    </div>
  );
}
