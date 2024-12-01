import * as Popover from '@radix-ui/react-popover';
import * as Dialog from '@radix-ui/react-dialog';
import { MoreVertical, ListPlus, Check, Plus, X } from 'lucide-react';
import { useState } from 'react';
import { usePlaylistStore } from '../stores/usePlaylistStore';

interface VideoMenuProps {
  videoId: string;
}

export default function VideoMenu({ videoId }: VideoMenuProps) {
  const [isNewPlaylistOpen, setIsNewPlaylistOpen] = useState(false);
  const [newPlaylistTitle, setNewPlaylistTitle] = useState('');
  const { playlists, addToPlaylist, removeFromPlaylist, isInPlaylist, createPlaylist } = usePlaylistStore();

  const togglePlaylist = (playlistId: string) => {
    if (isInPlaylist(playlistId, videoId)) {
      removeFromPlaylist(playlistId, videoId);
    } else {
      addToPlaylist(playlistId, videoId);
    }
  };

  const handleCreatePlaylist = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPlaylistTitle.trim()) {
      createPlaylist(newPlaylistTitle.trim());
      setNewPlaylistTitle('');
      setIsNewPlaylistOpen(false);
    }
  };

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button
          className="p-1.5 hover:bg-gray-100 rounded-full absolute right-2 top-2 bg-black/75 hover:bg-black/85 transition-colors"
          aria-label="More options"
        >
          <MoreVertical className="w-4 h-4 text-white" />
        </button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          className="bg-white rounded-xl shadow-xl py-2 w-48 animate-scaleIn z-50"
          sideOffset={5}
        >
          <Popover.Root>
            <Popover.Trigger asChild>
              <button className="w-full px-4 py-2 text-sm text-left hover:bg-gray-100 flex items-center gap-2">
                <ListPlus className="w-4 h-4" />
                Save to playlist
              </button>
            </Popover.Trigger>

            <Popover.Portal>
              <Popover.Content
                className="bg-white rounded-xl shadow-xl py-2 w-72 animate-scaleIn z-50"
                sideOffset={12}
                align="start"
              >
                <div className="px-4 py-2 border-b border-gray-100">
                  <h3 className="font-medium">Save to...</h3>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  {playlists.map(playlist => (
                    <button
                      key={playlist.id}
                      onClick={() => {
                        togglePlaylist(playlist.id);
                      }}
                      className="w-full px-4 py-2 text-sm text-left hover:bg-gray-100 flex items-center gap-3"
                    >
                      <div className="w-5 h-5 rounded border border-gray-300 flex items-center justify-center bg-white">
                        {isInPlaylist(playlist.id, videoId) && (
                          <Check className="w-4 h-4 text-blue-600" />
                        )}
                      </div>
                      <span className="font-medium">{playlist.title}</span>
                    </button>
                  ))}
                  <div className="border-t border-gray-100 mt-2">
                    <Dialog.Root open={isNewPlaylistOpen} onOpenChange={setIsNewPlaylistOpen}>
                      <Dialog.Trigger asChild>
                        <button
                      className="w-full px-4 py-2 text-sm text-left hover:bg-gray-100 flex items-center gap-3 text-blue-600"
                    >
                      <Plus className="w-5 h-5" />
                      <span>Create new playlist</span>
                    </button>
                      </Dialog.Trigger>
                      <Dialog.Portal>
                        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
                        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl p-6 w-[400px] animate-scaleIn">
                          <div className="flex items-center justify-between mb-4">
                            <Dialog.Title className="text-lg font-semibold">
                              Create new playlist
                            </Dialog.Title>
                            <Dialog.Close asChild>
                              <button className="p-1 hover:bg-gray-100 rounded-full">
                                <X className="w-5 h-5" />
                              </button>
                            </Dialog.Close>
                          </div>
                          <form onSubmit={handleCreatePlaylist}>
                            <input
                              type="text"
                              value={newPlaylistTitle}
                              onChange={(e) => setNewPlaylistTitle(e.target.value)}
                              placeholder="Enter playlist name"
                              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                              autoFocus
                            />
                            <div className="flex justify-end gap-2 mt-4">
                              <Dialog.Close asChild>
                                <button
                                  type="button"
                                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
                                >
                                  Cancel
                                </button>
                              </Dialog.Close>
                              <button
                                type="submit"
                                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
                              >
                                Create
                              </button>
                            </div>
                          </form>
                        </Dialog.Content>
                      </Dialog.Portal>
                    </Dialog.Root>
                  </div>
                </div>
                <Popover.Arrow className="fill-white" />
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
          <Popover.Arrow className="fill-white" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}