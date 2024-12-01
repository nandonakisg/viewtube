import React from 'react';
import { useDebugPanel } from '../hooks/useDebugPanel';
import VideoGrid from './VideoGrid';
import { ThumbsUp } from 'lucide-react';
import { SEARCH_RESULTS } from '../data/sampleVideos';
import { type SortOption } from './SortControls';
import ViewControls from './ViewControls';
import { groupByChannel } from '../utils/groupByChannel';
import ChannelGroups from './search/ChannelGroups';
import SearchResultsList from './search/SearchResultsList';

export default function LikedVideos() {
  const { addLog } = useDebugPanel();
  const [isGridView, setIsGridView] = React.useState(true);
  const [groupByChannels, setGroupByChannels] = React.useState(false);
  const [sortBy, setSortBy] = React.useState<SortOption>('views');
  const likedVideos = React.useMemo(() => [
    // React Masters - highest viewed video
    SEARCH_RESULTS.find(v => v.channel.name === 'React Masters')!,
    // Code Pioneers - most recent video
    SEARCH_RESULTS.find(v => v.channel.name === 'Code Pioneers')!,
    // Web Wizards - popular design systems video
    SEARCH_RESULTS.find(v => v.channel.name === 'Web Wizards' && v.title.includes('Design Systems'))!,
  ], []);

  const channelGroups = React.useMemo(
    () => groupByChannel(likedVideos),
    [likedVideos]
  );

  React.useEffect(() => {
    addLog('Liked Videos page mounted');
    addLog(`Found ${likedVideos.length} liked videos`);
  }, [addLog, likedVideos.length]);

  return (
    <div className="w-full py-6 px-4 mb-32">
      <ViewControls
        title={`Liked Videos (${likedVideos.length})`}
        icon={<ThumbsUp className="w-6 h-6 text-blue-600" />}
        sortBy={sortBy}
        isGridView={isGridView}
        groupByChannels={groupByChannels}
        onSortChange={setSortBy}
        onViewToggle={setIsGridView}
        onChannelToggle={setGroupByChannels}
      />
      
      {likedVideos.length > 0 ? (
        groupByChannels ? (
          <ChannelGroups
            channelGroups={channelGroups}
            isGridView={isGridView}
          />
        ) : isGridView ? (
          <VideoGrid videos={likedVideos} />
        ) : (
          <SearchResultsList videos={likedVideos} />
        )
      ) : (
        <div className="text-center text-gray-500 mt-12">
          <ThumbsUp className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <p className="text-lg">No liked videos yet</p>
          <p className="text-sm mt-2">Videos you like will appear here</p>
        </div>
      )}
    </div>
  );
}