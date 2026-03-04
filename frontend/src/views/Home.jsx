import React, { useState, useEffect } from 'react';
import Card from '../components/ui/Card';
import './Home.css';
// import axios from 'axios';

const Home = () => {
    const [greeting, setGreeting] = useState('Good afternoon');

    // Hardcoded mock data to show the UI
    const recentAlbums = [
        { id: 1, title: 'Rockstar', artist: 'A.R. Rahman', imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=300&auto=format&fit=crop' },
        { id: 2, title: 'Aashiqui 2', artist: 'Mithoon, Ankit Tiwari', imageUrl: 'https://images.unsplash.com/photo-1493225457124-a1a2a5f5eff2?q=80&w=300&auto=format&fit=crop' },
        { id: 3, title: 'G.O.A.T', artist: 'Diljit Dosanjh', imageUrl: 'https://images.unsplash.com/photo-1583089892943-e02e52f17d01?q=80&w=300&auto=format&fit=crop' },
        { id: 4, title: 'Kabir Singh', artist: 'Various Artists', imageUrl: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=300&auto=format&fit=crop' },
    ];

    const suggestedArtists = [
        { id: 1, title: 'Arijit Singh', artist: 'Artist', rounded: true, imageUrl: 'https://images.unsplash.com/photo-1502814041762-074fccecc6ab?q=80&w=300&auto=format&fit=crop' },
        { id: 2, title: 'Shreya Ghoshal', artist: 'Artist', rounded: true, imageUrl: 'https://images.unsplash.com/photo-1510915361894-faa8b2d4bd28?q=80&w=300&auto=format&fit=crop' },
        { id: 3, title: 'A.R. Rahman', artist: 'Artist', rounded: true, imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=300&auto=format&fit=crop' },
        { id: 4, title: 'Diljit Dosanjh', artist: 'Artist', rounded: true, imageUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=300&auto=format&fit=crop' },
        { id: 5, title: 'Pritam', artist: 'Artist', rounded: true, imageUrl: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=300&auto=format&fit=crop' },
    ];

    useEffect(() => {
        const hour = new Date().getHours();
        if (hour < 12) setGreeting('Good morning');
        else if (hour < 18) setGreeting('Good afternoon');
        else setGreeting('Good evening');
    }, []);

    return (
        <div className="home-container">
            <h1 className="home-greeting">{greeting}</h1>

            <section className="home-section">
                <h2 className="section-title">Recently Played</h2>
                <div className="cards-grid">
                    {recentAlbums.map(album => (
                        <Card key={album.id} {...album} />
                    ))}
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

            <section className="home-section">
                <h2 className="section-title">Made For You</h2>
                <div className="cards-grid">
                    {recentAlbums.slice().reverse().map((album, i) => (
                        <Card key={`mix-${i}`} {...album} title={`Daily Mix ${i + 1}`} artist="Made for user" />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
