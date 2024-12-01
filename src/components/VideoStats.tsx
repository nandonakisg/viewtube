import { type Video } from '../types/video';
import { formatRelativeTime } from '../utils/dateUtils';

interface VideoStatsProps {
  video: Video;
}

export default function VideoStats({ video }: VideoStatsProps) {
  return (
    <p className="text-[#606060] text-[12px] leading-[18px]">
      {video.views.toLocaleString()} views • {formatRelativeTime(video.timestamp)}
    </p>
  );
}