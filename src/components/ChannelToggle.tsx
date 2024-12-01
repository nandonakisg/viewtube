import { Users } from 'lucide-react';

interface ChannelToggleProps {
  groupByChannel: boolean;
  onToggle: (groupByChannel: boolean) => void;
}

export default function ChannelToggle({ groupByChannel, onToggle }: ChannelToggleProps) {
  return (
    <button
      onClick={() => onToggle(!groupByChannel)}
      title="Group videos by channel"
      className={`p-2 rounded-lg transition-colors ${
        groupByChannel ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-50'
      }`}
    >
      <Users className="w-5 h-5" />
    </button>
  );
}