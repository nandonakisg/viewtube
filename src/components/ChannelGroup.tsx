import { type Video } from '../types/video';
import SearchResultCard from './SearchResultCard';
import SearchResultGrid from './SearchResultGrid';

interface ChannelGroupProps {
  channel: Video['channel'];
  videos: Video[];
  isGridView: boolean;
}

export default function ChannelGroup({ channel, videos, isGridView }: ChannelGroupProps) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center gap-3">
          <img
            src={channel.avatar}
            alt={channel.name}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h2 className="text-lg font-semibold">
              {channel.name}
            </h2>
            <p className="text-sm text-gray-500">
              {videos.length} video{videos.length !== 1 ? 's' : ''} • {videos.reduce((sum, video) => sum + video.views, 0).toLocaleString()} total views
            </p>
          </div>
        </div>
      </div>

      {isGridView ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-7 4xl:grid-cols-8 gap-x-4 gap-y-8">
          {videos.map(video => (
            <SearchResultGrid key={video.id} video={video} />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {videos.map(video => (
            <SearchResultCard key={video.id} video={video} />
          ))}
        </div>
      )}
    </div>
  );
}