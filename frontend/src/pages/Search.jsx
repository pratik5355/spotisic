import { Search as SearchIcon } from 'lucide-react';

const BrowseCard = ({ title, color }) => (
    <div
        className="relative overflow-hidden rounded-lg aspect-square p-4 cursor-pointer hover:scale-[1.02] transition-transform duration-300"
        style={{ backgroundColor: color }}
    >
        <h3 className="text-white font-bold text-xl md:text-2xl">{title}</h3>
        <div className="absolute w-28 h-28 bg-black/20 rounded-md -bottom-4 -right-4 rotate-[25deg] shadow-2xl backdrop-blur-sm border border-white/10" />
    </div>
);

const Search = () => {
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

    return (
        <div className="p-6 pb-24 h-full">
            <div className="sticky top-0 z-10 -mx-6 px-6 pb-6 pt-2 bg-spotisic-elevated/95 backdrop-blur-md">
                <div className="max-w-md relative">
                    <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-black" size={20} />
                    <input
                        type="text"
                        placeholder="What do you want to play?"
                        className="w-full bg-white text-black pl-10 pr-4 py-3 rounded-full font-semibold focus:outline-none focus:ring-2 focus:ring-white/50 transition-all placeholder-gray-600"
                    />
                </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6 mt-4 tracking-tight">Browse all</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {categories.map((cat) => (
                    <BrowseCard key={cat.id} title={cat.title} color={cat.color} />
                ))}
            </div>
        </div>
    );
};

export default Search;
