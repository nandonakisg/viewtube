import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Compass, Clock, ThumbsUp, PlaySquare, History, Search, ListVideo } from 'lucide-react';

const menuItems = [
  { icon: Home, label: 'Home' },
  { icon: Search, label: 'Search Results', searchQuery: 'React' },
  { icon: ThumbsUp, label: 'Liked videos', path: '/liked' },
  { icon: ListVideo, label: 'Playlists', path: '/playlists' },
  { icon: Compass, label: 'Explore' },
  { icon: Clock, label: 'Watch later' },
  { icon: History, label: 'History' },
  { icon: PlaySquare, label: 'Your videos' },
];

export default function Sidebar() {
  const navigate = useNavigate();

  const handleClick = (item: typeof menuItems[0]) => {
    if ('searchQuery' in item) {
      navigate(`/search?q=${encodeURIComponent(item.searchQuery)}`);
    } else if ('path' in item && item.path) {
      navigate(item.path);
    } else if (item.label === 'Home') {
      navigate('/');
    }
  };

  return (
    <aside className="fixed left-0 top-14 h-[calc(100vh-3.5rem)] w-64 bg-white overflow-y-auto py-4 px-2">
      {menuItems.map((item) => {
        const Icon = item.icon
        return (
        <button
          key={item.label}
          onClick={() => handleClick(item)}
          className="w-full flex items-center gap-6 px-3 py-2 hover:bg-gray-100 rounded-lg"
        >
          <Icon className="w-6 h-6" />
          <span className="text-sm">{item.label}</span>
        </button>
        )
      })}
    </aside>
  );
}