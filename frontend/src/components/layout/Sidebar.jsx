import React from 'react';
import { Home, Search, Library, PlusSquare, Heart } from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <div className="sidebar-logo">
                <h2>Spotisic</h2>
            </div>

            <div className="sidebar-nav">
                <a href="#" className="nav-item active">
                    <Home size={24} />
                    <span>Home</span>
                </a>
                <a href="#" className="nav-item">
                    <Search size={24} />
                    <span>Search</span>
                </a>
                <a href="#" className="nav-item">
                    <Library size={24} />
                    <span>Your Library</span>
                </a>
            </div>

            <div className="sidebar-nav actions">
                <a href="#" className="nav-item">
                    <PlusSquare size={24} />
                    <span>Create Playlist</span>
                </a>
                <a href="#" className="nav-item">
                    <Heart size={24} />
                    <span>Liked Songs</span>
                </a>
            </div>

            <div className="divider" />

            <div className="sidebar-playlists">
                <p>Chill Vibes</p>
                <p>Coding Focus</p>
                <p>Synthwave 2024</p>
                <p>Midnight Mix</p>
            </div>
        </div>
    );
};

export default Sidebar;
