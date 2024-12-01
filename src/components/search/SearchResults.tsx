import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useVideoSearch } from '../../hooks/useVideoSearch';
import { useDebugPanel } from '../../hooks/useDebugPanel';
import { SEARCH_RESULTS } from '../../data/sampleVideos';
import VideoGrid from '../VideoGrid';
import ViewControls from '../ViewControls';
import { groupByChannel } from '../../utils/groupByChannel';
import { type SortOption } from '../SortControls';
import SearchResultsList from './SearchResultsList';
import ChannelGroups from './ChannelGroups';
import { Search } from 'lucide-react';

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const [isGridView, setIsGridView] = React.useState(true);
  const [groupByChannels, setGroupByChannels] = React.useState<boolean>(false);
  const [sortBy, setSortBy] = React.useState<SortOption>('original');
  const { addLog } = useDebugPanel();
  const query = searchParams.get('q') || '';

  const filteredVideos = useVideoSearch(SEARCH_RESULTS, query, sortBy);
  
  React.useEffect(() => {
    addLog(`Search results for "${query}" (${filteredVideos.length} videos)`);
    addLog(`Sorting by ${sortBy}`);
  }, [addLog, query, sortBy, filteredVideos.length]);

  const channelGroups = React.useMemo(() => groupByChannel(filteredVideos), [filteredVideos]);

  return (
    <div className="w-full py-6 px-4 mb-52">
      <ViewControls
        title={`Search results for "${query}"`}
        icon={<Search className="w-6 h-6 text-blue-600" />}
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
          sortBy={sortBy}
        />
      ) : isGridView ? (
        <VideoGrid videos={filteredVideos} sortBy={sortBy} />
      ) : (
        <SearchResultsList videos={filteredVideos} sortBy={sortBy} />
      )}
      
      {filteredVideos.length === 0 && (
        <p className="text-gray-600">No results found for "{query}"</p>
      )}
    </div>
  );
}