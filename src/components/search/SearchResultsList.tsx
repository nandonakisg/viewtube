import { type Video } from '../../types/video';
import SearchResultCard from '../SearchResultCard';
import { sortVideos } from '../../utils/sortVideos';
import { type SortOption } from '../SortControls';

interface SearchResultsListProps {
  videos: Video[];
  sortBy?: SortOption;
}

export default function SearchResultsList({ videos, sortBy = 'original' }: SearchResultsListProps) {
  return (
    <div className="max-w-[1096px] space-y-4">
      {sortVideos(videos, sortBy).map(video => (
        <SearchResultCard
          key={video.id}
          video={video}
        />
      ))}
    </div>
  );
}