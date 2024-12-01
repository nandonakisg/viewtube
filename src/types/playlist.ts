import { type Video } from './video';

export interface Playlist {
  id: string;
  title: string;
  description: string;
  videos: Video[];
  createdAt: Date;
  updatedAt: Date;
}