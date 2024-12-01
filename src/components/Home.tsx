import React from 'react';
import { useDebugPanel } from '../hooks/useDebugPanel';
import VideoGrid from './VideoGrid';
import { SEARCH_RESULTS } from '../data/sampleVideos';
import { type SortOption } from './SortControls';
import { Compass } from 'lucide-react';
import ViewControls from './ViewControls';
import { groupByChannel } from '../utils/groupByChannel';
import ChannelGroups from './search/ChannelGroups';
import SearchResultsList from './search/SearchResultsList';

export default function Home() {
  const { addLog } = useDebugPanel();
  const [isGridView, setIsGridView] = React.useState(true);
  const [groupByChannels, setGroupByChannels] = React.useState(false);
  const [sortBy, setSortBy] = React.useState<SortOption>('original');
  
  const recommendedVideos = React.useMemo(() => 
    SEARCH_RESULTS.slice(0, 8), 
    []
  );

  const channelGroups = React.useMemo(
    () => groupByChannel(recommendedVideos),
    [recommendedVideos]
  );

  React.useEffect(() => {
    addLog('Home page mounted');
    addLog('Loading recommended videos');
  }, [addLog]);

  return (
    <div className="w-full py-6 px-4 mb-32">
      <ViewControls
        title="Recommended Videos"
        icon={<Compass className="w-6 h-6 text-blue-600" />}
        sortBy={sortBy}
        isGridView={isGridView}
        groupByChannels={groupByChannels}
        onSortChange={setSortBy}
        onViewToggle={setIsGridView}
        onChannelToggle={setGroupByChannels}
      />
      
      {groupByChannels ? (
        <ChannelGroups
          channelGroups={channelGroups}
          isGridView={isGridView}
        />
      ) : isGridView ? (
        <VideoGrid videos={recommendedVideos} sortBy={sortBy} />
      ) : (
        <SearchResultsList videos={recommendedVideos} sortBy={sortBy} />
      )}
    </div>
  );
}