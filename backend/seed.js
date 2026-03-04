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
                title: "Aashiqui 2",
                artist: "Arijit Singh",
                imageUrl: "/images/aashiqui2.jpg",
                year: 2013
            },
            {
                title: "Rockstar",
                artist: "A.R. Rahman",
                imageUrl: "/images/rockstar.jpg",
                year: 2011
            }
        ]);

        const songs = await Song.insertMany([
            {
                title: "Tum Hi Ho",
                artist: "Arijit Singh",
                album: albums[0].title,
                audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                imageUrl: albums[0].imageUrl,
                duration: "4:22"
            },
            {
                title: "Sunn Raha Hai",
                artist: "Ankit Tiwari",
                album: albums[0].title,
                audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
                imageUrl: albums[0].imageUrl,
                duration: "6:30"
            },
            {
                title: "Kun Faya Kun",
                artist: "A.R. Rahman",
                album: albums[1].title,
                audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
                imageUrl: albums[1].imageUrl,
                duration: "7:53"
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
