import { type Video } from '../../types/video';
import ChannelGroup from '../ChannelGroup';

import { type SortOption } from '../SortControls';

interface ChannelGroupsProps {
  channelGroups: Record<string, {
    channel: Video['channel'];
    videos: Video[];
  }>;
  isGridView: boolean;
  sortBy?: SortOption;
}

export default function ChannelGroups({ channelGroups, isGridView, sortBy = 'original' }: ChannelGroupsProps) {
  return (
    <div className="space-y-12">
      {Object.entries(channelGroups).map(([channelName, { channel, videos }]) => (
        <ChannelGroup
          key={channelName}
          channel={channel}
          videos={videos}
          isGridView={isGridView}
          sortBy={sortBy}
        />
      ))}
    </div>
  );
}