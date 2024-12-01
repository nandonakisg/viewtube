import { create } from 'zustand';

interface DebugLog {
  id: string;
  timestamp: Date;
  message: string;
  data?: unknown;
}

interface DebugPanelState {
  logs: DebugLog[];
  addLog: (message: string, data?: unknown) => void;
  clearLogs: () => void;
}

export const useDebugPanel = create<DebugPanelState>((set) => ({
  logs: [],
  addLog: (message, data) => set((state) => ({
    logs: [...state.logs, {
      id: Math.random().toString(36).slice(2),
      timestamp: new Date(),
      message,
      data
    }]
  })),
  clearLogs: () => set({ logs: [] })
}));