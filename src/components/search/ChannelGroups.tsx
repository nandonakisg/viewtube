import { type Video } from '../../types/video';
import ChannelGroup from '../ChannelGroup';

interface ChannelGroupsProps {
  channelGroups: Record<string, {
    channel: Video['channel'];
    videos: Video[];
  }>;
  isGridView: boolean;
}

export default function ChannelGroups({ channelGroups, isGridView }: ChannelGroupsProps) {
  return (
    <div className="space-y-12">
      {Object.entries(channelGroups).map(([channelName, { channel, videos }]) => (
        <ChannelGroup
          key={channelName}
          channel={channel}
          videos={videos}
          isGridView={isGridView}
        />
      ))}
    </div>
  );
}