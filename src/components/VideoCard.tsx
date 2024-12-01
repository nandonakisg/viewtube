import { type Video } from '../types/video';
import VideoStats from './VideoStats';

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative w-full aspect-video rounded-lg overflow-hidden">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="object-cover w-full h-full hover:scale-105 transition-transform duration-200"
        />
        <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-2 py-0.5 rounded font-medium">
          {video.duration}
        </div>
      </div>
      
      <div className="flex gap-2 mt-2">
        <img
          src={video.channel.avatar}
          alt={video.channel.name}
          className="w-8 h-8 rounded-full flex-shrink-0"
        />
        <div className="flex flex-col min-h-[5.5rem]">
          <h3 className="font-medium line-clamp-2 text-[14px] leading-[20px] min-h-[40px] text-[#0f0f0f]">
            {video.title}
          </h3>
          <p className="text-[#606060] text-[12px] leading-[18px] mt-auto">
            {video.channel.name}
          </p>
          <div>
            <VideoStats
              video={video}
            />
          </div>
        </div>
      </div>
    </div>
  );
}