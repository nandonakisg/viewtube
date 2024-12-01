import ViewToggle from '../ViewToggle';
import SortControls, { type SortOption } from '../SortControls';
import ChannelToggle from '../ChannelToggle';

interface SearchControlsProps {
  query: string;
  sortBy: SortOption;
  isGridView: boolean;
  groupByChannels: boolean;
  onSortChange: (option: SortOption) => void;
  onViewToggle: (isGrid: boolean) => void;
  onChannelToggle: (groupByChannel: boolean) => void;
}

export default function SearchControls({
  query,
  sortBy,
  isGridView,
  groupByChannels,
  onSortChange,
  onViewToggle,
  onChannelToggle
}: SearchControlsProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-xl font-semibold">
        Search results for "{query}"
      </h2>
      <div className="flex items-center gap-4">
        <ChannelToggle
          groupByChannel={groupByChannels}
          onToggle={onChannelToggle}
        />
        <div className="h-6 w-px bg-gray-200" />
        <SortControls
          sortBy={sortBy}
          onSortChange={onSortChange}
        />
        <div className="h-6 w-px bg-gray-200" />
        <ViewToggle
          isGridView={isGridView}
          onToggle={onViewToggle}
        />
      </div>
    </div>
  );
}