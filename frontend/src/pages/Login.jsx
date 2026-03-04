import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            navigate('/');
        } catch (error) {
            alert('Login failed. Ensure backend is running.');
        }
    }

    return (
        <div className="h-full w-full flex items-center justify-center bg-gradient-to-b from-[#2a2a2a] to-black relative -mt-16">
            <div className="bg-black py-16 px-24 rounded-lg w-[734px] max-w-[95%] shadow-2xl border border-[#282828] text-center">
                <h1 className="text-4xl font-bold text-white tracking-tighter mb-10">Log in to Spotisic</h1>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-[324px] mx-auto text-left">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-white">Email address or username</label>
                        <input
                            type="email"
                            className="bg-[#121212] border border-[#727272] hover:border-white focus:border-white rounded text-white p-3 font-medium focus:outline-none transition-colors"
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-white">Password</label>
                        <input
                            type="password"
                            className="bg-[#121212] border border-[#727272] hover:border-white focus:border-white rounded text-white p-3 font-medium focus:outline-none transition-colors"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="bg-spotisic-accent text-black font-bold p-3 rounded-full mt-6 hover:scale-105 transition-transform w-[90%] mx-auto block">
                        Log In
                    </button>

                    <p className="text-center text-sm text-spotisic-textMuted mt-6 font-medium">
                        Don't have an account? <span className="text-white hover:text-spotisic-accent underline cursor-pointer">Sign up for free</span>.
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login;
