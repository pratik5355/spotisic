const mongoose = require('mongoose');
const Artist = require('../models/Artist');
const Song = require('../models/Song');
const Album = require('../models/Album');

const seedData = async () => {
    try {
        const count = await Artist.countDocuments();
        if (count > 0) return; // Already seeded

        console.log('Seeding initial mock data into MongoDB Memory Server...');

        const artists = await Artist.insertMany([
            { name: 'A.R. Rahman', avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/AR_Rahman_At_The_%E2%80%98Marvel_Anthem%E2%80%99_Launch_%283x4_cropped%29.jpg', language: 'Tamil', monthlyListeners: 35000000 },
            { name: 'Shreya Ghoshal', avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Shreya_Ghoshal_Behindwoods_Gold_Icons_Awards_2023_%28cropped%29.jpg', language: 'Hindi', monthlyListeners: 28000000 },
            { name: 'Pritam', avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Pritam_Live_%28cropped%29.jpg/960px-Pritam_Live_%28cropped%29.jpg', language: 'Hindi', monthlyListeners: 40000000 },
            { name: 'Arijit Singh', avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Arijit_Singh_performance_at_Chandigarh_2025.jpg', language: 'Hindi', monthlyListeners: 42000000 },
            { name: 'Diljit Dosanjh', avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Diljit_Dosanjh.jpg', language: 'Punjabi', monthlyListeners: 20000000 },
            { name: 'Anirudh', avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Anirudh_Ravichander_at_Audi_Ritz_Style_Awards_2017_%28cropped%29.jpg/1280px-Anirudh_Ravichander_at_Audi_Ritz_Style_Awards_2017_%28cropped%29.jpg', language: 'Tamil', monthlyListeners: 25000000 }
        ]);

        const albums = await Album.insertMany([
            { title: 'Brahmastra', artist: artists[2]._id, coverImageUrl: 'https://placehold.co/300x300/181818/FFF?text=Brahmastra', releaseDate: new Date('2022-09-09') },
            { title: 'Jawan', artist: artists[5]._id, coverImageUrl: 'https://placehold.co/300x300/181818/FFF?text=Jawan', releaseDate: new Date('2023-09-07') }
        ]);

        await Song.insertMany([
            { title: 'Kesariya', artist: artists[3]._id, album: albums[0]._id, coverImageUrl: 'https://placehold.co/300x300/181818/FFF?text=Kesariya', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', duration: 250, language: 'Hindi', genre: 'Bollywood', plays: 150000000 },
            { title: 'Chaleya', artist: artists[3]._id, album: albums[1]._id, coverImageUrl: 'https://placehold.co/300x300/181818/FFF?text=Chaleya', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3', duration: 180, language: 'Hindi', genre: 'Bollywood', plays: 120000000 },
            { title: 'Tum Kya Mile', artist: artists[1]._id, coverImageUrl: 'https://placehold.co/300x300/181818/FFF?text=Tum+Kya+Mile', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3', duration: 210, language: 'Hindi', genre: 'Romance', plays: 90000000 },
            { title: 'Lover', artist: artists[4]._id, coverImageUrl: 'https://placehold.co/300x300/181818/FFF?text=Lover', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3', duration: 195, language: 'Punjabi', genre: 'Pop', plays: 50000000 },
            { title: 'Kun Faya Kun', artist: artists[0]._id, coverImageUrl: 'https://placehold.co/300x300/181818/FFF?text=Kun+Faya+Kun', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3', duration: 420, language: 'Hindi', genre: 'Devotional', plays: 200000000 }
        ]);

        console.log('Database seeded successfully with Spotisic V2 Mock Data!');
    } catch (error) {
        console.error('Error seeding data:', error);
    }
};

module.exports = seedData;
