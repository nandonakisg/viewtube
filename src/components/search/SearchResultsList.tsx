import { type Video } from '../../types/video';
import SearchResultCard from '../SearchResultCard';

interface SearchResultsListProps {
  videos: Video[];
}

export default function SearchResultsList({ videos }: SearchResultsListProps) {
  return (
    <div className="max-w-[1096px] mx-auto space-y-4">
      {videos.map(video => (
        <SearchResultCard
          key={video.id}
          video={video}
        />
      ))}
    </div>
  );
}