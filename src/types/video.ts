export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  channel: {
    name: string;
    avatar: string;
  };
  views: number;
  timestamp: Date;
  duration: string;
}