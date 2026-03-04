import React, { useContext } from 'react';
import { Play, Pause, SkipBack, SkipForward, Repeat, Shuffle, Volume2, Mic2, MonitorSpeaker } from 'lucide-react';
import { PlayerContext } from '../../context/PlayerContext';
import './Player.css';

const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

const Player = () => {
    const {
        currentSong,
        isPlaying,
        progress,
        duration,
        togglePlay,
        playNext,
        playPrevious,
        seek
    } = useContext(PlayerContext);

    const handleProgressClick = (e) => {
        const bounds = e.currentTarget.getBoundingClientRect();
        const percent = (e.clientX - bounds.left) / bounds.width;
        seek(percent * duration);
    };

    if (!currentSong) {
        return (
            <div className="player-container">
                <div className="player-placeholder">
                    <p>Select a song to start listening</p>
                </div>
            </div>
        )
    }

    const progressPercentage = duration > 0 ? (progress / duration) * 100 : 0;

    return (
        <div className="player-container">
            <div className="player-left">
                <img
                    src={currentSong.imageUrl}
                    alt="album art"
                    className="album-art"
                />
                <div className="track-info">
                    <h4>{currentSong.title}</h4>
                    <p>{currentSong.artist}</p>
                </div>
            </div>

            <div className="player-center">
                <div className="player-controls">
                    <button className="control-btn hide-mobile"><Shuffle size={20} /></button>
                    <button className="control-btn" onClick={playPrevious}><SkipBack size={20} /></button>
                    <button className="control-btn play-btn" onClick={togglePlay}>
                        {isPlaying ? <Pause size={20} className="play-icon" fill="black" /> : <Play size={20} className="play-icon" fill="black" />}
                    </button>
                    <button className="control-btn" onClick={playNext}><SkipForward size={20} /></button>
                    <button className="control-btn hide-mobile"><Repeat size={20} /></button>
                </div>
                <div className="progress-container">
                    <span className="time">{formatTime(progress)}</span>
                    <div className="progress-bar" onClick={handleProgressClick}>
                        <div className="progress-fill" style={{ width: `${progressPercentage}%` }}></div>
                    </div>
                    <span className="time">{formatTime(duration)}</span>
                </div>
            </div>

            <div className="player-right hide-mobile">
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
