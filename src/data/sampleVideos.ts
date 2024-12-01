import { type Video } from '../types/video';

import { CHANNELS } from './channels';

export const SEARCH_RESULTS: Video[] = [
  // React Masters (8 videos)
  {
    id: '1',
    title: 'React 19 Features Deep Dive',
    description: 'Comprehensive overview of React 19\'s new features including server components and streaming SSR.',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
    channel: CHANNELS.REACT_MASTERS,
    views: 254000,
    timestamp: new Date('2024-11-15T14:30:00Z'),
    duration: '32:14'
  },
  {
    id: '2',
    title: 'Advanced React Patterns 2024',
    description: 'Master modern React patterns including compound components, hooks patterns, and render props.',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    channel: CHANNELS.REACT_MASTERS,
    views: 189000,
    timestamp: new Date('2024-11-16T09:15:00Z'),
    duration: '28:45'
  },
  {
    id: '3',
    title: 'React Performance Optimization',
    description: 'Learn advanced techniques for optimizing React applications including code splitting and memoization.',
    thumbnail: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&q=80',
    channel: CHANNELS.REACT_MASTERS,
    views: 167000,
    timestamp: new Date('2024-11-17T16:45:00Z'),
    duration: '24:30'
  },
  {
    id: '4',
    title: 'Building a React Component Library',
    description: 'Step-by-step guide to creating your own React component library with TypeScript and Storybook.',
    thumbnail: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&q=80',
    channel: CHANNELS.REACT_MASTERS,
    views: 145000,
    timestamp: new Date('2024-11-18T11:20:00Z'),
    duration: '41:15'
  },
  {
    id: '5',
    title: 'React State Management in 2024',
    description: 'Compare modern state management solutions including Context, Redux Toolkit, and Zustand.',
    thumbnail: 'https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=800&q=80',
    channel: CHANNELS.REACT_MASTERS,
    views: 203000,
    timestamp: new Date('2024-11-19T08:30:00Z'),
    duration: '35:50'
  },
  {
    id: '6',
    title: 'React Testing Masterclass',
    description: 'Comprehensive guide to testing React applications with Jest and React Testing Library.',
    thumbnail: 'https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=800&q=80',
    channel: CHANNELS.REACT_MASTERS,
    views: 122000,
    timestamp: new Date('2024-11-20T13:45:00Z'),
    duration: '45:20'
  },
  {
    id: '7',
    title: 'React Server Components',
    description: 'Deep dive into React Server Components and their impact on modern web development.',
    thumbnail: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800&q=80',
    channel: CHANNELS.REACT_MASTERS,
    views: 178000,
    timestamp: new Date('2024-11-21T15:10:00Z'),
    duration: '38:25'
  },
  {
    id: '8',
    title: 'React Architecture Patterns',
    description: 'Learn scalable architecture patterns for large React applications.',
    thumbnail: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80',
    channel: CHANNELS.REACT_MASTERS,
    views: 134000,
    timestamp: new Date('2024-11-22T10:20:00Z'),
    duration: '29:55'
  },

  // Code Pioneers (7 videos)
  {
    id: '9',
    title: 'Full-Stack React Development',
    description: 'Build a complete application with React, Node.js, and MongoDB.',
    thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80',
    channel: CHANNELS.CODE_PIONEERS,
    views: 198000,
    timestamp: new Date('2024-11-23T14:15:00Z'),
    duration: '52:30'
  },
  {
    id: '10',
    title: 'React Native vs Flutter',
    description: 'Comprehensive comparison of React Native and Flutter for mobile development.',
    thumbnail: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&q=80',
    channel: CHANNELS.CODE_PIONEERS,
    views: 167000,
    timestamp: new Date('2024-11-24T09:30:00Z'),
    duration: '34:15'
  },
  {
    id: '11',
    title: 'GraphQL with React',
    description: 'Master GraphQL integration in React applications using Apollo Client.',
    thumbnail: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&q=80',
    channel: CHANNELS.CODE_PIONEERS,
    views: 145000,
    timestamp: new Date('2024-11-25T16:20:00Z'),
    duration: '43:40'
  },
  {
    id: '12',
    title: 'Micro-Frontend Architecture',
    description: 'Implementing micro-frontends with React and Module Federation.',
    thumbnail: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800&q=80',
    channel: CHANNELS.CODE_PIONEERS,
    views: 112000,
    timestamp: new Date('2024-11-26T11:30:00Z'),
    duration: '47:25'
  },
  {
    id: '13',
    title: 'React Security Best Practices',
    description: 'Essential security practices for React applications including authentication and authorization.',
    thumbnail: 'https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=800&q=80',
    channel: CHANNELS.CODE_PIONEERS,
    views: 189000,
    timestamp: new Date('2024-11-27T13:45:00Z'),
    duration: '39:15'
  },
  {
    id: '14',
    title: 'React Performance Monitoring',
    description: 'Setting up performance monitoring and analytics in React applications.',
    thumbnail: 'https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=800&q=80',
    channel: CHANNELS.CODE_PIONEERS,
    views: 134000,
    timestamp: new Date('2024-11-28T15:10:00Z'),
    duration: '31:50'
  },
  {
    id: '15',
    title: 'React Deployment Strategies',
    description: 'Learn different deployment strategies for React applications.',
    thumbnail: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80',
    channel: CHANNELS.CODE_PIONEERS,
    views: 156000,
    timestamp: new Date('2024-11-29T10:20:00Z'),
    duration: '36:45'
  },

  // Web Wizards (6 videos)
  {
    id: '16',
    title: 'React Animation Techniques',
    description: 'Create stunning animations in React using Framer Motion and React Spring.',
    thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80',
    channel: CHANNELS.WEB_WIZARDS,
    views: 178000,
    timestamp: new Date('2024-11-24T14:15:00Z'),
    duration: '28:35'
  },
  {
    id: '17',
    title: 'React Forms Mastery',
    description: 'Master form handling in React with React Hook Form and Formik.',
    thumbnail: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&q=80',
    channel: CHANNELS.WEB_WIZARDS,
    views: 145000,
    timestamp: new Date('2024-11-25T09:30:00Z'),
    duration: '33:20'
  },
  {
    id: '18',
    title: 'React CSS-in-JS Solutions',
    description: 'Compare different CSS-in-JS solutions for React applications.',
    thumbnail: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&q=80',
    channel: CHANNELS.WEB_WIZARDS,
    views: 167000,
    timestamp: new Date('2024-11-26T16:20:00Z'),
    duration: '25:45'
  },
  {
    id: '19',
    title: 'React Accessibility Guide',
    description: 'Implementing accessibility best practices in React applications.',
    thumbnail: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800&q=80',
    channel: CHANNELS.WEB_WIZARDS,
    views: 123000,
    timestamp: new Date('2024-11-27T11:30:00Z'),
    duration: '42:15'
  },
  {
    id: '20',
    title: 'React SEO Optimization',
    description: 'Optimize React applications for search engines and social sharing.',
    thumbnail: 'https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=800&q=80',
    channel: CHANNELS.WEB_WIZARDS,
    views: 156000,
    timestamp: new Date('2024-11-28T13:45:00Z'),
    duration: '37:50'
  },
  {
    id: '21',
    title: 'React Design Systems',
    description: 'Building and maintaining design systems in React applications.',
    thumbnail: 'https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=800&q=80',
    channel: CHANNELS.WEB_WIZARDS,
    views: 189000,
    timestamp: new Date('2024-11-29T15:10:00Z'),
    duration: '44:25'
  }
];