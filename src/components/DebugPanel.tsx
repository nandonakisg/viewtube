import { useDebugPanel } from '../hooks/useDebugPanel';

export function DebugPanel() {
  const { logs, clearLogs } = useDebugPanel();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/90 text-white p-4 h-48 font-mono text-sm overflow-y-auto">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold">Debug Panel</h3>
        <button
          onClick={clearLogs}
          className="px-2 py-1 text-xs bg-red-500 rounded hover:bg-red-600"
        >
          Clear Logs
        </button>
      </div>
      <div className="space-y-1 text-xs overflow-y-auto">
        {logs.map((log) => (
          <div key={log.id} className="text-green-400">
            [{new Date(log.timestamp).toLocaleTimeString()}] {log.message}
          </div>
        ))}
      </div>
    </div>
  );
}