import { type Video } from '../types/video';
import { type SortOption } from '../components/SortControls';

export function sortVideos(videos: Video[], sortBy: SortOption): Video[] {
  if (!Array.isArray(videos)) {
    console.error('sortVideos received invalid videos array');
    return [];
  }

  return [...videos].sort((a, b) => {
    try {
      if (sortBy === 'views') {
        return b.views - a.views;
      }
      
      if (sortBy === 'age') {
        const now = new Date();
        const ageA = Math.floor((now.getTime() - a.timestamp.getTime()) / (1000 * 60 * 60 * 24));
        const ageB = Math.floor((now.getTime() - b.timestamp.getTime()) / (1000 * 60 * 60 * 24));
        return ageA - ageB;
      }
      
      return 0;
    } catch (error) {
      console.error('Error sorting videos:', error);
      return 0;
    }
  });
}