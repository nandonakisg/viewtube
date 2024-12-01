import { LayoutGrid, LayoutList } from 'lucide-react';

interface ViewToggleProps {
  isGridView: boolean;
  onToggle: (isGrid: boolean) => void;
}

export default function ViewToggle({ isGridView, onToggle }: ViewToggleProps) {
  return (
    <>
      <button
        onClick={() => onToggle(false)}
        className={`p-2 rounded-lg transition-colors ${
          !isGridView ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-50'
        }`}
        title="Show videos in list view"
      >
        <LayoutList className="w-5 h-5" />
      </button>
      <button
        onClick={() => onToggle(true)}
        className={`p-2 rounded-lg transition-colors ${
          isGridView ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-50'
        }`}
        title="Show videos in grid view"
      >
        <LayoutGrid className="w-5 h-5" />
      </button>
    </>
  );
}