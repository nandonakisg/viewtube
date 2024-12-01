import React from 'react';
import ViewToggle from './ViewToggle';
import SortControls, { type SortOption } from './SortControls';
import ChannelToggle from './ChannelToggle';

interface ViewControlsProps {
  title: string;
  icon: React.ReactNode;
  sortBy: SortOption;
  isGridView: boolean;
  groupByChannels: boolean;
  onSortChange: (option: SortOption) => void;
  onViewToggle: (isGrid: boolean) => void;
  onChannelToggle: (groupByChannel: boolean) => void;
}

export default function ViewControls({
  title,
  icon,
  sortBy,
  isGridView,
  groupByChannels,
  onSortChange,
  onViewToggle,
  onChannelToggle
}: ViewControlsProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-2">
        {icon}
        <h1 className="text-2xl font-semibold">{title}</h1>
      </div>
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