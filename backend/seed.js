const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const Song = require('./models/Song');
const Album = require('./models/Album');

dotenv.config();
connectDB();

const seedData = async () => {
    try {
        await Song.deleteMany();
        await Album.deleteMany();

        const albums = await Album.insertMany([
            {
                title: "Midnight Drives",
                artist: "The Synthwave",
                imageUrl: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=300&auto=format&fit=crop",
                year: 2023
            },
            {
                title: "Acoustic Mornings",
                artist: "Sarah Folk",
                imageUrl: "https://images.unsplash.com/photo-1593697821252-0c9137d9fc45?q=80&w=300&auto=format&fit=crop",
                year: 2021
            }
        ]);

        const songs = await Song.insertMany([
            {
                title: "Neon City",
                artist: "The Synthwave",
                album: albums[0].title,
                audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                imageUrl: albums[0].imageUrl,
                duration: "5:21"
            },
            {
                title: "Cyber Sunset",
                artist: "The Synthwave",
                album: albums[0].title,
                audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
                imageUrl: albums[0].imageUrl,
                duration: "7:05"
            },
            {
                title: "Coffee in the Rain",
                artist: "Sarah Folk",
                album: albums[1].title,
                audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
                imageUrl: albums[1].imageUrl,
                duration: "6:12"
            }
        ]);

        console.log('Data Imported!');
        process.exit();
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

seedData();
