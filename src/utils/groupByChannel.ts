import { type Video } from '../types/video';

interface ChannelGroup {
  channel: Video['channel'];
  videos: Video[];
  totalViews: number;
}

export function groupByChannel(videos: Video[], debugLog?: (message: string, data?: unknown) => void): Record<string, ChannelGroup> {
  debugLog?.('Grouping videos by channel', {
    totalVideos: videos.length,
    uniqueChannels: new Set(videos.map(v => v.channel.name)).size
  });

  // First, group videos by channel
  const groups = videos.reduce((acc, video) => {
    const channelName = video.channel.name;
    if (!acc[channelName]) {
      debugLog?.('Creating new channel group', { channelName });
      acc[channelName] = {
        channel: video.channel,
        videos: [],
        totalViews: 0
      };
    }
    acc[channelName].videos.push(video);
    acc[channelName].totalViews += video.views;
    return acc;
  }, {} as Record<string, ChannelGroup>);

  const sortedGroups = Object.entries(groups)
    .sort(([, a], [, b]) => b.totalViews - a.totalViews);

  debugLog?.('Channel groups sorted by views',
    sortedGroups.map(([name, group]) => ({
      channel: name,
      videos: group.videos.length,
      totalViews: group.totalViews
    }))
  );

  // Sort channels by total views (descending)
  return sortedGroups
    .reduce((sorted, [channelName, group]) => {
      sorted[channelName] = group;
      return sorted;
    }, {} as Record<string, ChannelGroup>);
}