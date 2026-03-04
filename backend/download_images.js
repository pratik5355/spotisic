const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
    { name: 'rockstar.jpg', url: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f0/Rockstar_2011_Teaser_Poster.jpg/220px-Rockstar_2011_Teaser_Poster.jpg' },
    { name: 'aashiqui2.jpg', url: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Aashiqui_2_Poster.jpg/220px-Aashiqui_2_Poster.jpg' },
    { name: 'goat.png', url: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/22/Diljit_Dosanjh_-_G.O.A.T..png/220px-Diljit_Dosanjh_-_G.O.A.T..png' },
    { name: 'kabirsingh.jpg', url: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Kabir_Singh_poster.jpg/220px-Kabir_Singh_poster.jpg' },
    { name: 'arijit.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Arijit_Singh_in_2019.jpg/800px-Arijit_Singh_in_2019.jpg' },
    { name: 'shreya.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Shreya_Ghoshal_at_the_launch_of_her_album_Humnasheen.jpg/800px-Shreya_Ghoshal_at_the_launch_of_her_album_Humnasheen.jpg' },
    { name: 'arrahman.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/A._R._Rahman%2C_2021.jpg/800px-A._R._Rahman%2C_2021.jpg' },
    { name: 'diljit.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Diljit_Dosanjh_at_the_Trailer_launch_of_film_Soorma.jpg/800px-Diljit_Dosanjh_at_the_Trailer_launch_of_film_Soorma.jpg' },
    { name: 'pritam.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Pritam_Chakraborty.jpg/800px-Pritam_Chakraborty.jpg' }
];

const download = (url, dest) => {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        const options = {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        };
        https.get(url, options, (response) => {
            // Follow redirects
            if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
                https.get(response.headers.location, options, (res2) => {
                    res2.pipe(file);
                    file.on('finish', () => { file.close(); resolve(); });
                });
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => { });
            reject(err);
        });
    });
};

(async () => {
    for (const img of images) {
        console.log(`Downloading ${img.name}...`);
        try {
            await download(img.url, path.join(__dirname, '../frontend/public/images', img.name));
        } catch (e) {
            console.error('Failed to download', img.name, e.message);
        }
    }
    console.log('Download complete!');
})();
