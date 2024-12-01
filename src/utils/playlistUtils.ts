import { type Video } from '../types/video';

export function getMostRecentVideo(videos: Video[]): Video | null {
  if (!videos.length) return null;
  
  return videos.reduce((mostRecent, current) => {
    return current.timestamp > mostRecent.timestamp ? current : mostRecent;
  }, videos[0]);
}