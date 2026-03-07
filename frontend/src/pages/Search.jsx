import { useState, useEffect } from 'react';
import axios from 'axios';
import { Search as SearchIcon, Play, Music, User, Disc } from 'lucide-react';
import { usePlayer } from '../context/PlayerContext';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const BrowseCard = ({ title, color }) => (
    <div
        className="relative overflow-hidden rounded-lg aspect-square p-4 cursor-pointer hover:scale-[1.02] transition-transform duration-300"
        style={{ backgroundColor: color }}
    >
        <h3 className="text-white font-bold text-xl md:text-2xl">{title}</h3>
        <div className="absolute w-28 h-28 bg-black/20 rounded-md -bottom-4 -right-4 rotate-[25deg] shadow-2xl backdrop-blur-sm border border-white/10" />
    </div>
);

const SearchResultItem = ({ item, type, onPlayClick }) => {
    const isSong = type === 'song';
    const title = item.title || item.name;
    const subtitle = isSong ? item.artist?.name : (type === 'album' ? item.artist?.name : 'Artist');
    const imageUrl = item.coverImageUrl || item.avatarUrl;

    return (
        <div className="flex items-center justify-between p-3 rounded-md hover:bg-white/10 group transition-colors">
            <div className="flex items-center gap-4">
                <div className={`relative w-12 h-12 flex-shrink-0 overflow-hidden ${type === 'artist' ? 'rounded-full' : 'rounded-md'}`}>
                    {imageUrl ? (
                        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
                    ) : (
                        <div className="w-full h-full bg-spotisic-elevated flex items-center justify-center">
                            {type === 'artist' ? <User size={20} className="text-gray-400" /> : <Disc size={20} className="text-gray-400" />}
                        </div>
                    )}
                </div>
                <div>
                    <h4 className={`text-white font-medium truncate max-w-[150px] sm:max-w-xs ${isSong ? 'text-base' : 'text-sm'}`}>{title}</h4>
                    <p className="text-sm text-gray-400 truncate max-w-[150px] sm:max-w-xs">{subtitle}</p>
                </div>
            </div>
            {isSong && (
                <button
                    onClick={() => onPlayClick(item)}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-spotisic-green text-black opacity-0 group-hover:opacity-100 transition-opacity hover:scale-105"
                >
                    <Play fill="black" size={20} className="ml-1" />
                </button>
            )}
        </div>
    );
};

const Search = () => {
    const { playSong } = usePlayer();
    const [query, setQuery] = useState('');
    const [results, setResults] = useState({ songs: [], artists: [], albums: [] });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const categories = [
        { id: 1, title: 'Music', color: '#dc148c' },
        { id: 2, title: 'Devotional', color: '#006450' },
        { id: 3, title: 'Bollywood', color: '#8400e7' },
        { id: 4, title: 'Punjabi', color: '#e13300' },
        { id: 5, title: 'Tamil', color: '#1e3264' },
        { id: 6, title: 'Live Events', color: '#8c1932' },
        { id: 7, title: 'Pop', color: '#148a08' },
        { id: 8, title: 'Made For You', color: '#1e3264' },
    ];

    useEffect(() => {
        const fetchResults = async () => {
            if (!query.trim()) {
                setResults({ songs: [], artists: [], albums: [] });
                return;
            }

            setIsLoading(true);
            setError(null);
            try {
                const response = await axios.get(`${API_URL}/search?q=${encodeURIComponent(query)}`);
                setResults(response.data);
            } catch (err) {
                console.error('Search error:', err);
                setError('Failed to fetch search results.');
            } finally {
                setIsLoading(false);
            }
        };

        const debounceTimer = setTimeout(fetchResults, 500);
        return () => clearTimeout(debounceTimer);
    }, [query]);

    const hasResults = results.songs.length > 0 || results.artists.length > 0 || results.albums.length > 0;

    return (
        <div className="p-6 pb-24 h-full overflow-y-auto">
            <div className="sticky top-0 z-10 -mx-6 px-6 pb-6 pt-2 bg-spotisic-base/95 backdrop-blur-md">
                <div className="max-w-md relative">
                    <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-black" size={20} />
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="What do you want to play?"
                        className="w-full bg-white text-black pl-10 pr-4 py-3 rounded-full font-semibold focus:outline-none focus:ring-2 focus:ring-white/50 transition-all placeholder-gray-600 shadow-lg"
                    />
                </div>
            </div>

            {query.trim() === '' ? (
                <>
                    <h2 className="text-2xl font-bold text-white mb-6 mt-4 tracking-tight">Browse all</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {categories.map((cat) => (
                            <BrowseCard key={cat.id} title={cat.title} color={cat.color} />
                        ))}
                    </div>
                </>
            ) : (
                <div className="mt-4">
                    {isLoading ? (
                        <div className="flex justify-center py-12">
                            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-spotisic-green"></div>
                        </div>
                    ) : error ? (
                        <div className="text-red-500 text-center py-8">{error}</div>
                    ) : hasResults ? (
                        <div className="space-y-8">
                            {results.songs.length > 0 && (
                                <div>
                                    <h2 className="text-2xl font-bold text-white mb-4">Songs</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                                        {results.songs.map((song) => (
                                            <SearchResultItem key={song._id} item={song} type="song" onPlayClick={playSong} />
                                        ))}
                                    </div>
                                </div>
                            )}

                            {results.artists.length > 0 && (
                                <div>
                                    <h2 className="text-2xl font-bold text-white mb-4">Artists</h2>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                        {results.artists.map((artist) => (
                                            <div key={artist._id} className="bg-spotisic-elevated p-4 rounded-lg hover:bg-spotisic-highlight transition flex flex-col items-center cursor-pointer group">
                                                <img
                                                    src={artist.avatarUrl || 'https://via.placeholder.com/150'}
                                                    alt={artist.name}
                                                    className="w-32 h-32 rounded-full object-cover mb-4 shadow-lg group-hover:shadow-xl transition-shadow"
                                                />
                                                <h3 className="text-white font-semibold text-center truncate w-full">{artist.name}</h3>
                                                <p className="text-gray-400 text-sm">Artist</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {results.albums.length > 0 && (
                                <div>
                                    <h2 className="text-2xl font-bold text-white mb-4">Albums</h2>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                        {results.albums.map((album) => (
                                            <div key={album._id} className="bg-spotisic-elevated p-4 rounded-lg hover:bg-spotisic-highlight transition flex flex-col cursor-pointer">
                                                <img
                                                    src={album.coverImageUrl || 'https://via.placeholder.com/150'}
                                                    alt={album.title}
                                                    className="w-full aspect-square object-cover rounded-md mb-4 shadow-lg"
                                                />
                                                <h3 className="text-white font-semibold truncate w-full">{album.title}</h3>
                                                <p className="text-gray-400 text-sm truncate w-full">{album.artist?.name}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <h3 className="text-white text-xl font-bold mb-2">No results found for "{query}"</h3>
                            <p className="text-gray-400">Please make sure your words are spelled correctly or use less or different keywords.</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Search;
