import VideoCard from './VideoCard';
import { type Video } from '../types/video';
import { sortVideos } from '../utils/sortVideos';
import { type SortOption } from './SortControls';

interface VideoGridProps {
  videos?: Video[];
  sortBy?: SortOption;
}

export default function VideoGrid({ videos = [], sortBy = 'original' }: VideoGridProps) {
  if (videos.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        <p className="text-lg">No videos available</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-7 4xl:grid-cols-8 gap-x-4 gap-y-8">
      {sortVideos(videos, sortBy).map(video => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}