import React from 'react';
import { Play, SkipBack, SkipForward, Repeat, Shuffle, Volume2, Mic2, MonitorSpeaker } from 'lucide-react';
import './Player.css';

const Player = () => {
    return (
        <div className="player-container">
            <div className="player-left">
                <img
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f0/Rockstar_2011_Teaser_Poster.jpg/220px-Rockstar_2011_Teaser_Poster.jpg"
                    alt="album art"
                    className="album-art"
                />
                <div className="track-info">
                    <h4>Kun Faya Kun</h4>
                    <p>A.R. Rahman</p>
                </div>
            </div>

            <div className="player-center">
                <div className="player-controls">
                    <button className="control-btn"><Shuffle size={20} /></button>
                    <button className="control-btn"><SkipBack size={20} /></button>
                    <button className="control-btn play-btn"><Play size={20} className="play-icon" /></button>
                    <button className="control-btn"><SkipForward size={20} /></button>
                    <button className="control-btn"><Repeat size={20} /></button>
                </div>
                <div className="progress-container">
                    <span className="time">1:12</span>
                    <div className="progress-bar">
                        <div className="progress-fill" style={{ width: '30%' }}></div>
                    </div>
                    <span className="time">5:21</span>
                </div>
            </div>

            <div className="player-right">
                <button className="control-btn"><Mic2 size={16} /></button>
                <button className="control-btn"><MonitorSpeaker size={16} /></button>
                <div className="volume-control">
                    <Volume2 size={20} />
                    <div className="progress-bar volume-bar">
                        <div className="progress-fill" style={{ width: '80%' }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;
