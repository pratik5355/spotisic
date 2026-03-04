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
            { name: 'A.R. Rahman', avatarUrl: 'https://ui-avatars.com/api/?name=A+R+Rahman&background=1ed760&color=000&size=300', language: 'Tamil', monthlyListeners: 35000000 },
            { name: 'Shreya Ghoshal', avatarUrl: 'https://ui-avatars.com/api/?name=Shreya+Ghoshal&background=282828&color=fff&size=300', language: 'Hindi', monthlyListeners: 28000000 },
            { name: 'Pritam', avatarUrl: 'https://ui-avatars.com/api/?name=Pritam&background=181818&color=fff&size=300', language: 'Hindi', monthlyListeners: 40000000 },
            { name: 'Arijit Singh', avatarUrl: 'https://ui-avatars.com/api/?name=Arijit+Singh&background=dc148c&color=fff&size=300', language: 'Hindi', monthlyListeners: 42000000 },
            { name: 'Diljit Dosanjh', avatarUrl: 'https://ui-avatars.com/api/?name=Diljit+Dosanjh&background=e13300&color=fff&size=300', language: 'Punjabi', monthlyListeners: 20000000 },
            { name: 'Anirudh', avatarUrl: 'https://ui-avatars.com/api/?name=Anirudh&background=006450&color=fff&size=300', language: 'Tamil', monthlyListeners: 25000000 }
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
