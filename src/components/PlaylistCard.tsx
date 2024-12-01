import { type Playlist } from '../types/playlist';
import { getMostRecentVideo } from '../utils/playlistUtils';

interface PlaylistCardProps {
  playlist: Playlist;
  onClick: () => void;
  isSelected?: boolean;
}

export default function PlaylistCard({ playlist, onClick, isSelected }: PlaylistCardProps) {
  return (
    <div 
      onClick={onClick}
      className={`cursor-pointer rounded-xl overflow-hidden transition-all ${
        isSelected ? 'ring-2 ring-blue-500' : 'hover:bg-gray-50'
      }`}
    >
      <div className="relative aspect-video">
        <img
          src={playlist.videos[0]?.thumbnail}
          alt={playlist.title}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-white text-center">
            <p className="font-medium text-lg">{playlist.videos.length}</p>
            <p className="text-sm">videos</p>
          </div>
        </div>
      </div>
      <div className="p-3">
        <h3 className="font-medium text-[14px] leading-[20px] line-clamp-2 mb-1">
          {playlist.title}
        </h3>
        <p className="text-[12px] leading-[18px] text-[#606060]">
          Last updated {getMostRecentVideo(playlist.videos)?.timestamp ? 
            new Date(getMostRecentVideo(playlist.videos)!.timestamp).toLocaleDateString() : 
            'No videos'
          }
        </p>
      </div>
    </div>
  );
}