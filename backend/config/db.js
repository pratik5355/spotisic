const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const seedData = require('./seeder');

const connectDB = async () => {
    try {
        let uri = process.env.MONGO_URI;
        let memoryServer;

        if (!uri || uri.includes('localhost') || uri.includes('127.0.0.1')) {
            console.log('Starting In-Memory MongoDB Server for 0-setup Demo...');
            memoryServer = await MongoMemoryServer.create();
            uri = memoryServer.getUri();
        }

        const conn = await mongoose.connect(uri);
        console.log(`MongoDB Connected: ${conn.connection.host}`);

        // Seed mock data
        await seedData();
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
