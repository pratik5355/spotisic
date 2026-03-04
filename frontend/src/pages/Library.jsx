import { LibraryBig, Search } from 'lucide-react';

const Library = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full text-center px-6">
            <LibraryBig size={64} className="text-spotisic-textMuted mb-6" />
            <h1 className="text-3xl font-bold text-white mb-4">Your Library awaits</h1>
            <p className="text-spotisic-textMuted max-w-sm mb-8">
                Log in to save your favorite songs, create custom playlists, and discover new devotional tracks tailored just for you.
            </p>
            <button className="bg-white text-black font-bold px-8 py-3 rounded-full hover:scale-105 transition-transform shadow-lg">
                Log in
            </button>
        </div>
    )
}

export default Library;
