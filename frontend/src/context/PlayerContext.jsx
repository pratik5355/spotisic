import React, { createContext, useState, useRef, useEffect } from 'react';

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
    const [currentSong, setCurrentSong] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [queue, setQueue] = useState([]);
    const [volume, setVolume] = useState(1);

    const audioRef = useRef(new Audio());

    useEffect(() => {
        const audio = audioRef.current;

        if (currentSong) {
            audio.src = currentSong.audioUrl;
            audio.volume = volume;
            if (isPlaying) {
                audio.play().catch(e => console.error("Playback error:", e));
            }
        }

        const setAudioData = () => setDuration(audio.duration);
        const setAudioTime = () => setProgress(audio.currentTime);
        const onEnded = () => playNext();

        audio.addEventListener('loadeddata', setAudioData);
        audio.addEventListener('timeupdate', setAudioTime);
        audio.addEventListener('ended', onEnded);

        return () => {
            audio.removeEventListener('loadeddata', setAudioData);
            audio.removeEventListener('timeupdate', setAudioTime);
            audio.removeEventListener('ended', onEnded);
        };
    }, [currentSong]);

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play().catch(e => console.error(e));
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]);

    useEffect(() => {
        audioRef.current.volume = volume;
    }, [volume]);

    const playSong = (song, playQueue = []) => {
        setCurrentSong(song);
        setIsPlaying(true);
        if (playQueue.length > 0) {
            setQueue(playQueue);
        }
    };

    const togglePlay = () => {
        if (currentSong) {
            setIsPlaying(!isPlaying);
        }
    };

    const playNext = () => {
        if (queue.length === 0 || !currentSong) return;
        const currentIndex = queue.findIndex(s => s._id === currentSong._id || s.id === currentSong.id);
        if (currentIndex !== -1 && currentIndex < queue.length - 1) {
            playSong(queue[currentIndex + 1]);
        }
    };

    const playPrevious = () => {
        if (queue.length === 0 || !currentSong) return;
        const currentIndex = queue.findIndex(s => s._id === currentSong._id || s.id === currentSong.id);
        if (currentIndex > 0) {
            playSong(queue[currentIndex - 1]);
        }
    };

    const seek = (time) => {
        audioRef.current.currentTime = time;
        setProgress(time);
    };

    const handleVolume = (level) => {
        setVolume(level);
    }

    return (
        <PlayerContext.Provider value={{
            currentSong,
            isPlaying,
            progress,
            duration,
            volume,
            playSong,
            togglePlay,
            playNext,
            playPrevious,
            seek,
            handleVolume,
            setQueue,
            queue
        }}>
            {children}
        </PlayerContext.Provider>
    );
};
