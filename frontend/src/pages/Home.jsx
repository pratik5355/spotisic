import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { PlayerContext } from '../context/PlayerContext';

// Simple reusable card component embedded here for speed
const Card = ({ title, subtitle, imageUrl, rounded, onClick }) => (
    <div onClick={onClick} className="bg-[#181818] hover:bg-[#282828] p-4 rounded-md transition duration-300 group cursor-pointer flex flex-col items-center sm:items-start text-center sm:text-left gap-3">
        <div className="relative w-full aspect-square mb-2">
            <img src={imageUrl} alt={title} className={`object-cover w-full h-full shadow-lg ${rounded ? 'rounded-full' : 'rounded-md'}`} />

            {/* Play button overlay that appears on hover */}
            <div className={`absolute bottom-2 right-2 w-12 h-12 bg-spotisic-accent rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 shadow-xl ${rounded ? 'hidden' : 'flex'}`}>
                <svg role="img" height="24" width="24" viewBox="0 0 24 24" className="fill-black ml-1"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
            </div>
        </div>
        <div className="w-full">
            <h3 className="text-white font-bold truncate mb-1">{title}</h3>
            <p className="text-spotisic-textMuted text-sm font-semibold truncate">{subtitle}</p>
        </div>
    </div>
);

const Home = () => {
    const [greeting, setGreeting] = useState('');
    const [songs, setSongs] = useState([]);
    const [artists, setArtists] = useState([]);
    const { playSong } = useContext(PlayerContext);

    useEffect(() => {
        const hour = new Date().getHours();
        if (hour < 12) setGreeting('Good morning');
        else if (hour < 18) setGreeting('Good afternoon');
        else setGreeting('Good evening');

        // Fetch initial data
        const fetchHomeData = async () => {
            try {
                const [songsRes, artistsRes] = await Promise.all([
                    axios.get('http://localhost:5000/api/songs'),
                    axios.get('http://localhost:5000/api/artists')
                ]);
                setSongs(songsRes.data);
                setArtists(artistsRes.data);
            } catch (error) {
                console.error("Error fetching homepage APIs", error);
            }
        };

        // In dev, populate mock fallback if API fails
        setSongs([
            { _id: '1', title: 'Kesariya', artist: { name: 'Arijit Singh' }, coverImageUrl: 'https://placehold.co/300x300/181818/FFF?text=Kesariya', audioUrl: '' },
            { _id: '2', title: 'Chaleya', artist: { name: 'Anirudh' }, coverImageUrl: 'https://placehold.co/300x300/181818/FFF?text=Chaleya', audioUrl: '' },
            { _id: '3', title: 'Lover', artist: { name: 'Diljit Dosanjh' }, coverImageUrl: 'https://placehold.co/300x300/181818/FFF?text=Lover', audioUrl: '' }
        ]);

        setArtists([
            { _id: '1', name: 'A.R. Rahman', avatarUrl: 'https://ui-avatars.com/api/?name=AR+Rahman&background=1ed760&color=000&size=300' },
            { _id: '2', name: 'Shreya Ghoshal', avatarUrl: 'https://ui-avatars.com/api/?name=Shreya+Ghoshal&background=282828&color=fff&size=300' },
            { _id: '3', name: 'Pritam', avatarUrl: 'https://ui-avatars.com/api/?name=Pritam&background=181818&color=fff&size=300' }
        ]);

        fetchHomeData();
    }, []);

    return (
        <div className="p-6 pb-24">
            <h1 className="text-3xl font-bold text-white mb-6 tracking-tight">{greeting}</h1>

            {/* Top 6 grid popular items */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
                {songs.slice(0, 6).map((song) => (
                    <div key={song._id} onClick={() => playSong(song, songs)} className="h-16 bg-white/10 hover:bg-white/20 transition-colors rounded overflow-hidden flex items-center group cursor-pointer shadow">
                        <img src={song.coverImageUrl} className="h-16 w-16 shadow-[2px_0_10px_rgba(0,0,0,0.3)]" alt={song.title} />
                        <p className="flex-1 font-bold text-white px-4 truncate">{song.title}</p>
                        <div className="mr-4 w-10 h-10 bg-spotisic-accent rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 shadow-xl transition-all">
                            <svg role="img" height="20" width="20" viewBox="0 0 24 24" className="fill-black ml-1"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
                        </div>
                    </div>
                ))}
            </div>

            <section className="mb-10">
                <div className="flex items-end justify-between mb-4">
                    <h2 className="text-2xl font-bold text-white hover:underline cursor-pointer tracking-tight">Made for you</h2>
                    <span className="text-sm font-bold text-spotisic-textMuted hover:underline cursor-pointer">Show all</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                    {songs.map((song) => (
                        <Card
                            key={song._id}
                            title={song.title}
                            subtitle={song.artist?.name || 'Unknown Artist'}
                            imageUrl={song.coverImageUrl}
                            onClick={() => playSong(song, songs)}
                        />
                    ))}
                </div>
            </section>

            <section className="mb-10">
                <div className="flex items-end justify-between mb-4">
                    <h2 className="text-2xl font-bold text-white hover:underline cursor-pointer tracking-tight">Suggested Artists</h2>
                    <span className="text-sm font-bold text-spotisic-textMuted hover:underline cursor-pointer">Show all</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                    {artists.map((artist) => (
                        <Card
                            key={artist._id}
                            title={artist.name}
                            subtitle="Artist"
                            imageUrl={artist.avatarUrl}
                            rounded={true}
                        />
                    ))}
                </div>
            </section>

        </div>
    );
};

export default Home;
