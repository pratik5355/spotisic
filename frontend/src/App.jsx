import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Topbar from './components/layout/Topbar';
import Player from './components/layout/Player';
import Home from './pages/Home';
import Search from './pages/Search';
import Library from './pages/Library';
import Login from './pages/Login';

function App() {
  return (
    <div className="h-screen w-screen bg-spotisic-base flex flex-col overflow-hidden">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar className="w-64 flex-shrink-0 hidden md:flex" />

        <div className="flex-1 flex flex-col bg-spotisic-elevated m-2 rounded-lg overflow-hidden">
          <Topbar />
          <main className="flex-1 overflow-y-auto w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/library" element={<Library />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>
        </div>
      </div>

      <div className="h-24 bg-black flex-shrink-0 z-50 px-4 flex items-center justify-center border-t border-spotisic-elevated">
        <Player />
      </div>
    </div>
  )
}

export default App;
