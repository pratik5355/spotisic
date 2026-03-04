import React, { useState, useEffect } from 'react';
import Card from '../components/ui/Card';
import './Home.css';
// import axios from 'axios';

const Home = () => {
    const [greeting, setGreeting] = useState('Good afternoon');

    // Hardcoded mock data to show the UI
    const recentAlbums = [
        { id: 1, title: 'Midnight Drives', artist: 'The Synthwave', imageUrl: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=300&auto=format&fit=crop' },
        { id: 2, title: 'Acoustic Mornings', artist: 'Sarah Folk', imageUrl: 'https://images.unsplash.com/photo-1593697821252-0c9137d9fc45?q=80&w=300&auto=format&fit=crop' },
        { id: 3, title: 'Lo-Fi Study', artist: 'Various Artists', imageUrl: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=300&auto=format&fit=crop' },
        { id: 4, title: 'Deep Focus', artist: 'Spotify', imageUrl: 'https://images.unsplash.com/photo-1493225457124-a1a2a5f5eff2?q=80&w=300&auto=format&fit=crop' },
    ];

    const suggestedArtists = [
        { id: 1, title: 'The Weeknd', artist: 'Artist', rounded: true, imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=300&auto=format&fit=crop' },
        { id: 2, title: 'Daft Punk', artist: 'Artist', rounded: true, imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=300&auto=format&fit=crop' },
        { id: 3, title: 'John Mayer', artist: 'Artist', rounded: true, imageUrl: 'https://images.unsplash.com/photo-1510915361894-faa8b2d4bd28?q=80&w=300&auto=format&fit=crop' },
        { id: 4, title: 'Dua Lipa', artist: 'Artist', rounded: true, imageUrl: 'https://images.unsplash.com/photo-1502814041762-074fccecc6ab?q=80&w=300&auto=format&fit=crop' },
        { id: 5, title: 'Coldplay', artist: 'Artist', rounded: true, imageUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=300&auto=format&fit=crop' },
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
