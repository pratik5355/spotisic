import React from 'react';
import { ChevronLeft, ChevronRight, User } from 'lucide-react';
import './Topbar.css';

const Topbar = () => {
    return (
        <div className="topbar-container glass">
            <div className="topbar-nav">
                <button className="nav-btn" disabled>
                    <ChevronLeft size={24} />
                </button>
                <button className="nav-btn" disabled>
                    <ChevronRight size={24} />
                </button>
            </div>

            <div className="topbar-actions">
                <button className="upgrade-btn">Explore Premium</button>
                <button className="install-btn">Install App</button>
                <div className="user-profile">
                    <User size={18} />
                </div>
            </div>
        </div>
    );
};

export default Topbar;
