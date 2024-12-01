import React from 'react';
import { useDebugPanel } from '../hooks/useDebugPanel';
import { PLAYLISTS } from '../data/playlists';
import { ListVideo } from 'lucide-react';
import PlaylistCard from './PlaylistCard';
import ViewControls from './ViewControls';
import VideoGrid from './VideoGrid';
import { type SortOption } from './SortControls';
import { groupByChannel } from '../utils/groupByChannel';
import ChannelGroups from './search/ChannelGroups';
import SearchResultsList from './search/SearchResultsList';

export default function Playlists() {
  const { addLog } = useDebugPanel();
  const [selectedPlaylist, setSelectedPlaylist] = React.useState(PLAYLISTS[0]);
  const [isGridView, setIsGridView] = React.useState(true);
  const [groupByChannels, setGroupByChannels] = React.useState(false);
  const [sortBy, setSortBy] = React.useState<SortOption>('original');

  const channelGroups = React.useMemo(
    () => groupByChannel(selectedPlaylist.videos),
    [selectedPlaylist]
  );

  React.useEffect(() => {
    addLog('Playlists page mounted');
    addLog(`Selected playlist: ${selectedPlaylist.title}`);
  }, [addLog, selectedPlaylist]);

  return (
    <div className="w-full py-6 px-4 mb-32">
      <div className="flex items-center gap-2 mb-6">
        <ListVideo className="w-6 h-6 text-blue-600" />
        <h1 className="text-2xl font-semibold">Playlists</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-8 mb-8 border-b border-gray-200">
        {PLAYLISTS.map(playlist => (
          <PlaylistCard
            key={playlist.id}
            playlist={playlist}
            onClick={() => setSelectedPlaylist(playlist)}
            isSelected={playlist.id === selectedPlaylist.id}
          />
        ))}
      </div>

      {selectedPlaylist && (
        <>
          <ViewControls
            title={selectedPlaylist.title}
            icon={<ListVideo className="w-6 h-6 text-blue-600" />}
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
            <VideoGrid videos={selectedPlaylist.videos} sortBy={sortBy} />
          ) : (
            <SearchResultsList videos={selectedPlaylist.videos} sortBy={sortBy} />
          )}
        </>
      )}
    </div>
  );
}