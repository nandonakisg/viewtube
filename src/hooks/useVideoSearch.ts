import { useMemo } from 'react';
import { type Video } from '../types/video';
import { sortVideos } from '../utils/sortVideos';
import { type SortOption } from '../components/SortControls';

export function useVideoSearch(videos: Video[], query: string, sortBy: SortOption) {
  if (!Array.isArray(videos)) {
    console.error('useVideoSearch received invalid videos array');
    return [];
  }

  return useMemo(() => {
    try {
      const searchTerm = query.toLowerCase().trim();
      const filtered = videos.filter(video =>
        video.title.toLowerCase().includes(searchTerm) ||
        video.description.toLowerCase().includes(searchTerm)
      );
    
      return sortVideos(filtered, sortBy);
    } catch (error) {
      console.error('Error in useVideoSearch:', error);
      return [];
    }
  }, [videos, query, sortBy]);
}