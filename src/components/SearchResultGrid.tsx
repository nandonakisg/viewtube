import { type Video } from '../types/video';
import VideoCard from './VideoCard';

interface SearchResultGridProps {
  video: Video;
}

export default function SearchResultGrid({ video }: SearchResultGridProps) {
  return (
    <div className="w-full">
      <VideoCard
        video={video}
      />
    </div>
  );
}