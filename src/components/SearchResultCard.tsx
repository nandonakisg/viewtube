import { type Video } from '../types/video';
import VideoStats from './VideoStats';
import VideoMenu from './VideoMenu';

interface SearchResultCardProps {
  video: Video;
}

export default function SearchResultCard({ video }: SearchResultCardProps) {
  return (
    <div className="flex gap-4 cursor-pointer hover:bg-gray-100 p-3 rounded-xl max-w-[1096px] mx-auto">
      <div className="relative flex-shrink-0 group">
        <div className="w-64 aspect-video rounded-xl overflow-hidden">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="object-cover w-full h-full"
          />
          <VideoMenu videoId={video.id} />
        </div>
        <div className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1 rounded">
          {video.duration}
        </div>
      </div>
      
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-lg line-clamp-2">
          {video.title}
        </h3>
        <div className="mt-1">
          <VideoStats
            video={video}
          />
        </div>
        <div className="flex items-center gap-2 mt-2">
          <img
            src={video.channel.avatar}
            alt={video.channel.name}
            className="w-6 h-6 rounded-full"
          />
          <span className="text-sm text-gray-600">
            {video.channel.name}
          </span>
        </div>
        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
          {video.description}
        </p>
      </div>
    </div>
  );
}