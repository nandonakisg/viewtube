import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SearchResults from './components/search/SearchResults';
import Playlists from './components/Playlists';
import LikedVideos from './components/LikedVideos';
import { DebugPanel } from './components/DebugPanel';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex pt-14">
          <Sidebar />
          <main className="flex-1 ml-64">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<SearchResults />} />
              <Route path="/playlists" element={<Playlists />} />
              <Route path="/liked" element={<LikedVideos />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </div>
      <DebugPanel />
    </BrowserRouter>
  );
}

export default App;