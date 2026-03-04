import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Player from './Player';
import Home from '../../views/Home';
import './Layout.css';

const AppLayout = () => {
    return (
        <div className="app-container">
            <Sidebar />
            <div className="main-view-container">
                <Topbar />
                <div className="content-scrollable">
                    <Home />
                </div>
            </div>
            <Player />
        </div>
    );
};

export default AppLayout;
