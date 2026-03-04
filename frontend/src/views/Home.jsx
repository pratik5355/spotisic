import React, { useState, useEffect } from 'react';
import Card from '../components/ui/Card';
import './Home.css';
// import axios from 'axios';

const Home = () => {
    const [greeting, setGreeting] = useState('Good afternoon');

    // Hardcoded mock data to show the UI
    const recentAlbums = [
        { id: 1, title: 'Rockstar', artist: 'A.R. Rahman', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f0/Rockstar_2011_Teaser_Poster.jpg/220px-Rockstar_2011_Teaser_Poster.jpg' },
        { id: 2, title: 'Aashiqui 2', artist: 'Mithoon, Ankit Tiwari', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Aashiqui_2_Poster.jpg/220px-Aashiqui_2_Poster.jpg' },
        { id: 3, title: 'G.O.A.T', artist: 'Diljit Dosanjh', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/22/Diljit_Dosanjh_-_G.O.A.T..png/220px-Diljit_Dosanjh_-_G.O.A.T..png' },
        { id: 4, title: 'Kabir Singh', artist: 'Various Artists', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Kabir_Singh_poster.jpg/220px-Kabir_Singh_poster.jpg' },
    ];

    const suggestedArtists = [
        { id: 1, title: 'Arijit Singh', artist: 'Artist', rounded: true, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Arijit_Singh_in_2019.jpg/800px-Arijit_Singh_in_2019.jpg' },
        { id: 2, title: 'Shreya Ghoshal', artist: 'Artist', rounded: true, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Shreya_Ghoshal_at_the_launch_of_her_album_Humnasheen.jpg/800px-Shreya_Ghoshal_at_the_launch_of_her_album_Humnasheen.jpg' },
        { id: 3, title: 'A.R. Rahman', artist: 'Artist', rounded: true, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/A._R._Rahman%2C_2021.jpg/800px-A._R._Rahman%2C_2021.jpg' },
        { id: 4, title: 'Diljit Dosanjh', artist: 'Artist', rounded: true, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Diljit_Dosanjh_at_the_Trailer_launch_of_film_Soorma.jpg/800px-Diljit_Dosanjh_at_the_Trailer_launch_of_film_Soorma.jpg' },
        { id: 5, title: 'Pritam', artist: 'Artist', rounded: true, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Pritam_Chakraborty.jpg/800px-Pritam_Chakraborty.jpg' },
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
