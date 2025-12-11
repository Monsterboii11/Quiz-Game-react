import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-sm bg-white shadow-md rounded-lg p-6">

                <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>

                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Enter your username"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                    Create Account
                </button>

                <p className="text-center text-sm mt-4">
                    Already have an account?{" "}
                    <Link to='/login' 
                    className="text-blue-600 hover:underline"
                    >Log in</Link>
                </p>

            </div>
        </div>
    )
}

export default Signup
