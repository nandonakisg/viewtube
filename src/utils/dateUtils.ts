export function formatRelativeTime(date: Date): string {
  const now = new Date();
  const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
  return `${diffInDays} day${diffInDays !== 1 ? 's' : ''} ago`;
}