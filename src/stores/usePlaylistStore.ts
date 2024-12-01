import { create } from 'zustand';
import { PLAYLISTS } from '../data/playlists';
import { SEARCH_RESULTS } from '../data/sampleVideos';
import { type Playlist } from '../types/playlist';
import { persist } from 'zustand/middleware';

interface PlaylistStore {
  playlists: Playlist[];
  videoPlaylists: Record<string, Set<string>> | null;
  addToPlaylist: (playlistId: string, videoId: string) => void;
  removeFromPlaylist: (playlistId: string, videoId: string) => void;
  isInPlaylist: (playlistId: string, videoId: string) => boolean;
  createPlaylist: (title: string) => void;
  getPlaylistVideos: (playlistId: string) => Playlist['videos'];
}

// Initialize videoPlaylists from sample data
const initialVideoPlaylists: Record<string, Set<string>> = {};
PLAYLISTS.forEach(playlist => {
  playlist.videos.forEach(video => {
    if (!initialVideoPlaylists[video.id]) {
      initialVideoPlaylists[video.id] = new Set();
    }
    initialVideoPlaylists[video.id].add(playlist.id);
  });
});

export const usePlaylistStore = create<PlaylistStore>()(
  persist(
    (set, get) => ({
  playlists: PLAYLISTS,
  videoPlaylists: initialVideoPlaylists,
  
  addToPlaylist: (playlistId, videoId) => set(state => {
    const newVideoPlaylists = { ...(state.videoPlaylists || {}) };
    if (!newVideoPlaylists[videoId]) {
      newVideoPlaylists[videoId] = new Set();
    }
    newVideoPlaylists[videoId].add(playlistId);
    
    // Update the playlist's videos array
    const newPlaylists = state.playlists.map(playlist => {
      if (playlist.id === playlistId) {
        const video = SEARCH_RESULTS.find(v => v.id === videoId);
        if (video && !playlist.videos.some(v => v.id === videoId)) {
          return {
            ...playlist,
            videos: [...playlist.videos, video],
            updatedAt: new Date()
          };
        }
      }
      return playlist;
    });

    return { 
      videoPlaylists: newVideoPlaylists,
      playlists: newPlaylists
    };
  }),
  
  removeFromPlaylist: (playlistId, videoId) => set(state => {
    const newVideoPlaylists = { ...(state.videoPlaylists || {}) };
    newVideoPlaylists[videoId]?.delete(playlistId);
    
    // Update the playlist's videos array
    const newPlaylists = state.playlists.map(playlist => {
      if (playlist.id === playlistId) {
        return {
          ...playlist,
          videos: playlist.videos.filter(v => v.id !== videoId),
          updatedAt: new Date()
        };
      }
      return playlist;
    });

    return { 
      videoPlaylists: newVideoPlaylists,
      playlists: newPlaylists
    };
  }),
  
  isInPlaylist: (playlistId, videoId) => {
    const store = get();
    return store.videoPlaylists?.[videoId]?.has(playlistId) ?? false;
  },
  
  getPlaylistVideos: (playlistId) => {
    const playlist = get().playlists.find(p => p.id === playlistId);
    return playlist?.videos || [];
  },
  
  createPlaylist: (title) => set(state => ({
    playlists: [
      ...state.playlists,
      {
        id: `playlist-${Date.now()}`,
        title,
        description: '',
        videos: [],
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
  }))
}), {
  name: 'playlist-storage',
  // Custom serialization to handle Set objects
  serialize: (state) => JSON.stringify({
    playlists: state.playlists,
    videoPlaylists: state.videoPlaylists ? Object.fromEntries(
      Object.entries(state.videoPlaylists).map(([k, v]) => [k, Array.from(v)])
    )
    : {}
  }),
  // Custom deserialization to restore Set objects
  deserialize: (str) => {
    const parsed = JSON.parse(str);
    return {
      playlists: parsed.playlists,
      videoPlaylists: Object.fromEntries(
        Object.entries(parsed.videoPlaylists).map(([k, v]) => [k, new Set(v as string[])])
      )
    };
  }
})
);