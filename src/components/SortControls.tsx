export type SortOption = 'views' | 'age';

interface SortControlsProps {
  sortBy: SortOption;
  onSortChange: (option: SortOption) => void;
}

export default function SortControls({ sortBy, onSortChange }: SortControlsProps) {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => onSortChange('views')}
        className={`px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-1.5 transition-colors ${
          sortBy === 'views' 
            ? 'bg-blue-100 text-blue-600' 
            : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        Views
      </button>
      <button
        onClick={() => onSortChange('age')}
        className={`px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-1.5 transition-colors ${
          sortBy === 'age' 
            ? 'bg-blue-100 text-blue-600' 
            : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        Age
      </button>
    </div>
  );
}