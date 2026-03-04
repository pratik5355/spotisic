import { ChevronLeft, ChevronRight, User } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Topbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { user, logout } = useContext(AuthContext);

    const isHome = location.pathname === '/';

    return (
        <header className={`h-16 flex items-center justify-between px-6 sticky top-0 z-10 ${!isHome ? 'bg-spotisic-elevated/90 backdrop-blur-md border-b-[0.5px] border-spotisic-divider/30' : 'bg-transparent'}`}>

            {/* Navigation Arrows */}
            <div className="flex gap-2">
                <button onClick={() => navigate(-1)} className="bg-black/60 rounded-full w-8 h-8 flex items-center justify-center text-white/70 hover:text-white hover:bg-black transition-colors" title="Go back">
                    <ChevronLeft size={22} className="mr-0.5" />
                </button>
                <button onClick={() => navigate(1)} className="bg-black/60 rounded-full w-8 h-8 flex items-center justify-center text-white/70 hover:text-white hover:bg-black transition-colors" title="Go forward">
                    <ChevronRight size={22} className="ml-0.5" />
                </button>
            </div>

            {/* Auth & Actions */}
            <div className="flex items-center gap-4">
                {!user ? (
                    <>
                        <button
                            onClick={() => navigate('/login')}
                            className="text-white hover:scale-105 font-bold text-sm tracking-wide bg-transparent transition-transform"
                        >
                            Sign up
                        </button>
                        <button
                            onClick={() => navigate('/login')}
                            className="bg-white text-black font-bold text-sm px-8 py-3 rounded-full hover:scale-105 transition-transform"
                        >
                            Log in
                        </button>
                    </>
                ) : (
                    <>
                        <button className="hidden md:block bg-white text-black font-bold text-sm px-4 py-1.5 rounded-full hover:scale-105 transition-transform">
                            Explore Premium
                        </button>
                        <button className="hidden md:flex items-center gap-1.5 bg-black/60 text-white font-bold text-sm px-4 py-1.5 rounded-full hover:scale-105 transition-transform">
                            <span className="truncate max-w-[100px]">{user.name}</span>
                        </button>
                        <div className="w-8 h-8 bg-black/80 rounded-full flex items-center justify-center cursor-pointer hover:bg-black hover:scale-105 transition-transform group relative">
                            <User size={18} className="text-white/80 group-hover:text-white" />
                            <div className="absolute top-10 right-0 bg-spotisic-elevated border border-spotisic-divider rounded shadow-xl py-1 hidden group-hover:block w-32 border-[#282828] z-50">
                                <button onClick={logout} className="w-full text-left px-4 py-2 text-sm hover:bg-white/10 text-white/80 hover:text-white text-start">Log out</button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </header>
    );
};

export default Topbar;
