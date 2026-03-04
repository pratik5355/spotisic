import { Home, Search, Library, PlusSquare, Heart } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="w-64 bg-spotisic-base h-full flex flex-col pt-6 pb-2 px-2 text-sm">
            <div className="px-5 mb-8 text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                {/* Simple inline SVG for logo */}
                <div className="w-8 h-8 bg-spotisic-accent rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-black rounded-full"></div>
                </div>
                Spotisic
            </div>

            <div className="space-y-4 px-3 mb-8">
                <NavLink to="/" className={({ isActive }) => `flex items-center gap-4 font-semibold hover:text-white transition ${isActive ? 'text-white' : 'text-spotisic-textMuted'}`}>
                    <Home size={24} className={({ isActive }) => isActive ? "fill-white" : ""} />
                    Home
                </NavLink>
                <NavLink to="/search" className={({ isActive }) => `flex items-center gap-4 font-semibold hover:text-white transition ${isActive ? 'text-white' : 'text-spotisic-textMuted'}`}>
                    <Search size={24} />
                    Search
                </NavLink>
                <NavLink to="/library" className={({ isActive }) => `flex items-center gap-4 font-semibold hover:text-white transition ${isActive ? 'text-white' : 'text-spotisic-textMuted'}`}>
                    <Library size={24} className={({ isActive }) => isActive ? "fill-white" : ""} />
                    Your Library
                </NavLink>
            </div>

            <div className="space-y-4 px-3 mb-6">
                <button className="flex items-center gap-4 font-semibold text-spotisic-textMuted hover:text-white transition w-full">
                    <div className="w-6 h-6 bg-spotisic-textMuted flex items-center justify-center rounded-sm hover:bg-white text-black transition">
                        <PlusSquare size={20} className="text-black" />
                    </div>
                    Create Playlist
                </button>
                <button className="flex items-center gap-4 font-semibold text-spotisic-textMuted hover:text-white transition w-full">
                    <div className="w-6 h-6 bg-gradient-to-br from-[#450af5] to-[#c4efd9] flex items-center justify-center rounded-sm">
                        <Heart size={14} className="fill-white" />
                    </div>
                    Liked Songs
                </button>
            </div>

            <hr className="border-spotisic-divider mx-5 border-t-[0.1px] opacity-20 mb-4" />

            {/* Playlist List (Mock for now) */}
            <div className="px-5 flex-1 overflow-y-auto space-y-3 text-spotisic-textMuted">
                <p className="hover:text-white cursor-pointer truncate">Maha Shivratri Mix</p>
                <p className="hover:text-white cursor-pointer truncate">Arijit Singh Top 50</p>
                <p className="hover:text-white cursor-pointer truncate">Bollywood Hits 2024</p>
                <p className="hover:text-white cursor-pointer truncate">90s Romance</p>
                <p className="hover:text-white cursor-pointer truncate">Punjabi Party</p>
            </div>
        </div>
    );
};

export default Sidebar;
