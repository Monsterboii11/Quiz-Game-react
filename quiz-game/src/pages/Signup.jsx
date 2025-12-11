import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'

const Signup = () => {

    const {signup} = useAuth();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        signup(username, password);

        navigate('/login')
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <form onSubmit={handleSubmit}>
                <div className="w-full max-w-sm bg-white shadow-md rounded-lg p-6">

                <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>

                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Enter your username"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-4">
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => setPassword(e.target.value)}
                        required
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
            </form>
        </div>
    )
}

export default Signup
