import { useState, useCallback } from 'react';

interface DebugLog {
  timestamp: Date;
  message: string;
  data?: unknown;
}

export function useDebugLogs() {
  const [logs, setLogs] = useState<DebugLog[]>([]);

  const log = useCallback((message: string, data?: unknown) => {
    setLogs(prev => [...prev, {
      timestamp: new Date(),
      message,
      data
    }]);
  }, []);

  return { logs, log };
}