import { type Playlist } from '../types/playlist';
import { getMostRecentVideo } from '../utils/playlistUtils';
import { formatRelativeTime } from '../utils/dateUtils';

interface PlaylistCardProps {
  playlist: Playlist;
  onClick: () => void;
  isSelected?: boolean;
}

export default function PlaylistCard({ playlist, onClick, isSelected }: PlaylistCardProps) {
  return (
    <div 
      onClick={onClick}
      className="cursor-pointer group w-full"
    >
      <div className={`relative w-full aspect-video rounded-lg overflow-hidden ${
        isSelected ? 'ring-2 ring-blue-500' : ''
      }`}>
        <img
          src={playlist.videos[0]?.thumbnail}
          alt={playlist.title}
          className="object-cover w-full h-full hover:scale-105 transition-transform duration-200"
        />
        <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-2 py-0.5 rounded font-medium">
          {playlist.videos.length} videos
        </div>
      </div>
      <div className="flex gap-2 mt-2 group-hover:bg-gray-50 rounded-lg p-2 -mx-2">
        <img
          src={playlist.videos[0]?.channel.avatar}
          alt={playlist.videos[0]?.channel.name}
          className="w-8 h-8 rounded-full flex-shrink-0"
        />
        <div className="flex flex-col min-h-[4rem]">
          <h3 className="font-medium line-clamp-2 text-[14px] leading-[20px] min-h-[40px] text-[#0f0f0f]">
            {playlist.title}
          </h3>
          <p className="text-[#606060] text-[12px] leading-[18px] mt-auto">
            Updated {getMostRecentVideo(playlist.videos)?.timestamp ?
              formatRelativeTime(getMostRecentVideo(playlist.videos)!.timestamp) :
              'No videos'}
          </p>
        </div>
      </div>
    </div>
  );
}