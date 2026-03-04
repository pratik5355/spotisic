import React, { useState, useEffect } from 'react';
import Card from '../components/ui/Card';
import './Home.css';
// import axios from 'axios';

const Home = () => {
    const [greeting, setGreeting] = useState('Good afternoon');

    // Hardcoded mock data to show the UI
    const recentAlbums = [
        { id: 1, title: 'Rockstar', artist: 'A.R. Rahman', imageUrl: '/images/rockstar.jpg' },
        { id: 2, title: 'Aashiqui 2', artist: 'Mithoon, Ankit Tiwari', imageUrl: '/images/aashiqui2.jpg' },
        { id: 3, title: 'G.O.A.T', artist: 'Diljit Dosanjh', imageUrl: '/images/goat.png' },
        { id: 4, title: 'Kabir Singh', artist: 'Various Artists', imageUrl: '/images/kabirsingh.jpg' },
    ];

    const suggestedArtists = [
        { id: 1, title: 'Arijit Singh', artist: 'Artist', rounded: true, imageUrl: '/images/arijit.jpg' },
        { id: 2, title: 'Shreya Ghoshal', artist: 'Artist', rounded: true, imageUrl: '/images/shreya.jpg' },
        { id: 3, title: 'A.R. Rahman', artist: 'Artist', rounded: true, imageUrl: '/images/arrahman.jpg' },
        { id: 4, title: 'Diljit Dosanjh', artist: 'Artist', rounded: true, imageUrl: '/images/diljit.jpg' },
        { id: 5, title: 'Pritam', artist: 'Artist', rounded: true, imageUrl: '/images/pritam.jpg' },
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
