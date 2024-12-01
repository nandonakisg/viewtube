import { type Playlist } from '../types/playlist';
import { SEARCH_RESULTS } from './sampleVideos';

export const PLAYLISTS: Playlist[] = [
  {
    id: 'react-essentials',
    title: 'React Essentials',
    description: 'Essential React concepts and tutorials',
    videos: SEARCH_RESULTS.filter(v => 
      ['React 19 Features', 'React Performance', 'React State Management'].some(title => 
        v.title.includes(title)
      )
    ),
    createdAt: new Date('2024-11-20'),
    updatedAt: new Date('2024-11-25')
  },
  {
    id: 'web-development',
    title: 'Web Development Tips',
    description: 'Advanced web development techniques',
    videos: SEARCH_RESULTS.filter(v => 
      ['Architecture', 'Performance Monitoring', 'Accessibility'].some(topic => 
        v.title.includes(topic)
      )
    ),
    createdAt: new Date('2024-11-18'),
    updatedAt: new Date('2024-11-28')
  },
  {
    id: 'design-and-animation',
    title: 'Design & Animation',
    description: 'UI/UX design and animation tutorials',
    videos: SEARCH_RESULTS.filter(v => 
      ['Animation', 'Design Systems', 'CSS'].some(topic => 
        v.title.includes(topic)
      )
    ),
    createdAt: new Date('2024-11-15'),
    updatedAt: new Date('2024-11-30')
  }
];