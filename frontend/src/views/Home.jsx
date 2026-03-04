import React, { useState, useEffect, useContext } from 'react';
import Card from '../components/ui/Card';
import { PlayerContext } from '../context/PlayerContext';
import axios from 'axios';
import './Home.css';

const Home = () => {
    const [greeting, setGreeting] = useState('Good afternoon');
    const [albums, setAlbums] = useState([]);
    const [songs, setSongs] = useState([]);
    const { playSong } = useContext(PlayerContext);

    const API_URL = 'http://localhost:5000/api';

    useEffect(() => {
        const hour = new Date().getHours();
        if (hour < 12) setGreeting('Good morning');
        else if (hour < 18) setGreeting('Good afternoon');
        else setGreeting('Good evening');

        // Fetch data from backend
        const fetchData = async () => {
            try {
                const [albumRes, songRes] = await Promise.all([
                    axios.get(`${API_URL}/albums`),
                    axios.get(`${API_URL}/songs`)
                ]);
                setAlbums(albumRes.data);
                setSongs(songRes.data);
            } catch (err) {
                console.error("Error fetching data", err);
            }
        };

        fetchData();
    }, []);

    const suggestedArtists = [
        { id: 1, title: 'Arijit Singh', artist: 'Artist', rounded: true, imageUrl: 'https://ui-avatars.com/api/?name=Arijit+Singh&background=1ed760&color=000&size=300' },
        { id: 2, title: 'Shreya Ghoshal', artist: 'Artist', rounded: true, imageUrl: 'https://ui-avatars.com/api/?name=Shreya+Ghoshal&background=282828&color=fff&size=300' },
        { id: 3, title: 'A.R. Rahman', artist: 'Artist', rounded: true, imageUrl: 'https://ui-avatars.com/api/?name=AR+Rahman&background=181818&color=fff&size=300' },
        { id: 4, title: 'Diljit Dosanjh', artist: 'Artist', rounded: true, imageUrl: 'https://ui-avatars.com/api/?name=Diljit+Dosanjh&background=121212&color=fff&size=300' },
        { id: 5, title: 'Pritam', artist: 'Artist', rounded: true, imageUrl: 'https://ui-avatars.com/api/?name=Pritam&background=000000&color=fff&size=300' },
    ];

    return (
        <div className="home-container">
            <h1 className="home-greeting">{greeting}</h1>

            <section className="home-section">
                <h2 className="section-title">Popular Albums</h2>
                <div className="cards-grid">
                    {albums.length > 0 ? albums.map(album => (
                        <Card key={album._id} title={album.title} artist={album.artist} imageUrl={album.imageUrl} />
                    )) : <p>Loading albums...</p>}
                </div>
            </section>

            <section className="home-section">
                <h2 className="section-title">Recently Played Songs</h2>
                <div className="cards-grid">
                    {songs.length > 0 ? songs.map((song, i) => (
                        <div key={song._id} onClick={() => playSong(song, songs)} >
                            <Card title={song.title} artist={song.artist} imageUrl={song.imageUrl} />
                        </div>
                    )) : <p>Loading songs...</p>}
                </div>
            </section>

            <section className="home-section">
                <div className="section-header">
                    <h2 className="section-title">Suggested Artists</h2>
                    <span className="section-show-all">Show all</span>
                </div>
                <div className="cards-grid">
                    {suggestedArtists.map(artist => (
                        <Card key={artist.id} {...artist} />
                    ))}
                </div>
            </section>

        </div>
    );
};

export default Home;
