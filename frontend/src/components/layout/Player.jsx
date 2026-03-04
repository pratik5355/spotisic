import { useContext } from 'react';
import { Play, Pause, SkipBack, SkipForward, Repeat, Shuffle, Volume2, Mic2, MonitorSpeaker } from 'lucide-react';
import { PlayerContext } from '../../context/PlayerContext';

const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

const Player = () => {
    const { currentSong, isPlaying, progress, duration, volume, togglePlay, playNext, playPrevious, seek, handleVolume } = useContext(PlayerContext);

    const handleProgressClick = (e) => {
        const bounds = e.currentTarget.getBoundingClientRect();
        const percent = (e.clientX - bounds.left) / bounds.width;
        seek(percent * duration);
    };

    const handleVolumeClick = (e) => {
        const bounds = e.currentTarget.getBoundingClientRect();
        const percent = (e.clientX - bounds.left) / bounds.width;
        handleVolume(Math.max(0, Math.min(1, percent)));
    };

    if (!currentSong) {
        return (
            <div className="w-full h-full flex items-center justify-center text-xs text-spotisic-textMuted select-none">
                Sign in to play your favorite tracks.
            </div>
        )
    }

    const progressPercentage = duration > 0 ? (progress / duration) * 100 : 0;
    const volumePercentage = volume * 100;

    return (
        <div className="w-full h-full flex items-center justify-between text-spotisic-textMuted select-none">

            {/* LEFT: Track Info */}
            <div className="w-[30%] min-w-[180px] flex items-center gap-4">
                <img src={currentSong?.coverImageUrl || 'https://placehold.co/56x56/181818/FFF?text=Music'} alt="Album Art" className="w-14 h-14 rounded shadow-lg object-cover" />
                <div className="flex flex-col truncate">
                    <span className="text-white text-sm hover:underline cursor-pointer truncate">{currentSong?.title}</span>
                    <span className="text-xs hover:underline cursor-pointer truncate">{currentSong?.artist?.name || 'Unknown Artist'}</span>
                </div>
            </div>

            {/* CENTER: Controls & Scrubber */}
            <div className="flex-1 max-w-[722px] flex flex-col items-center justify-center gap-1">
                <div className="flex items-center gap-6">
                    <button className="hidden sm:block hover:text-white transition group"><Shuffle size={16} /></button>
                    <button onClick={playPrevious} className="hover:text-white transition"><SkipBack size={20} className="fill-current" /></button>

                    <button onClick={togglePlay} className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform hover:bg-[#f0f0f0]">
                        {isPlaying ? <Pause size={18} className="fill-black" /> : <Play size={18} className="fill-black ml-1" />}
                    </button>

                    <button onClick={playNext} className="hover:text-white transition"><SkipForward size={20} className="fill-current" /></button>
                    <button className="hidden sm:block hover:text-white transition"><Repeat size={16} /></button>
                </div>

                <div className="w-full flex items-center gap-2 text-xs text-spotisic-textMuted">
                    <span className="w-10 text-right">{formatTime(progress)}</span>
                    <div className="h-1 flex-1 bg-[#4d4d4d] rounded-full group cursor-pointer flex items-center" onMouseDown={handleProgressClick}>
                        <div className="h-1 bg-white rounded-full group-hover:bg-spotisic-accent transition-colors relative" style={{ width: `${progressPercentage}%` }}>
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 shadow transition-opacity"></div>
                        </div>
                    </div>
                    <span className="w-10">{formatTime(duration)}</span>
                </div>
            </div>

            {/* RIGHT: Volume & Extras */}
            <div className="w-[30%] min-w-[180px] hidden md:flex items-center justify-end gap-3 text-spotisic-textMuted mt-1">
                <button className="hover:text-white transition"><Mic2 size={16} /></button>
                <button className="hover:text-white transition"><MonitorSpeaker size={16} /></button>
                <button className="hover:text-white transition"><Volume2 size={20} /></button>
                <div className="w-[90px] h-1 bg-[#4d4d4d] rounded-full group cursor-pointer flex items-center" onMouseDown={handleVolumeClick}>
                    <div className="h-1 bg-white rounded-full group-hover:bg-spotisic-accent transition-colors relative" style={{ width: `${volumePercentage}%` }}>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 shadow"></div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Player;
