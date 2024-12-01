# ViewTube Project Context

## Project Overview
ViewTube is a YouTube clone built with React, TypeScript, and Tailwind CSS. The project implements a modern, responsive video platform with search functionality, multiple view modes, and advanced statistics visualization.

## Code Organization

### Directory Structure
- `src/components/search/`: Search-related components
- `src/data/`: Data models and sample content
- `src/hooks/`: Custom React hooks
- `src/utils/`: Utility functions
- `src/types/`: TypeScript type definitions

## Current State
The project has implemented core YouTube-like features including:
- Search functionality with URL parameter support
- Grid and list view layouts
- Statistics visualization with animated bar charts and text modes
- Responsive design supporting ultra-wide screens
- Playlist management with age based on most recent video
- Sort functionality for views and age
- Modern UI with clear visual feedback
- Debug panel for development insights
- Channel-based content organization

## Key Technical Decisions

### Architecture
- React with TypeScript for type safety
- Tailwind CSS for styling
- Path aliases for clean imports
- Lucide React for icons
- React Router for navigation
- Component-based architecture with clear separation of concerns
- Utility functions for class name merging
- Modular component organization
- Debug panel for development monitoring

### Data Management
- Sample video data stored in `src/data/sampleVideos.ts`
- Channel data separated in `src/data/channels.ts`
- Timestamps use actual Date objects for accurate sorting
- View counts and ages displayed in relative format (X days ago)
- Consistent date range (2024-11-15 to 2024-11-30)
- Three distinct channels with varied content:
  - React Masters (8 videos)
  - Code Pioneers (7 videos)
  - Web Wizards (6 videos)

### UI/UX Choices
- Default to grid view for better content discovery
- Bar chart statistics mode as default for visual appeal
- Fixed header and sidebar for consistent navigation
- Responsive grid supporting up to 8 columns on wide screens
- Animated transitions for statistics bars
- Playlist cards with video count and last update time
- Clear visual indicators for active states

## Component Structure

### Core Components
- `App.tsx`: Main routing and layout
- `Header.tsx`: Search and navigation
- `Sidebar.tsx`: Navigation menu
- Search Components:
  - `SearchResults.tsx`: Main search results container
  - `SearchControls.tsx`: Search control interface
  - `SearchResultsGrid.tsx`: Grid layout for results
  - `SearchResultsList.tsx`: List layout for results
  - `ChannelGroups.tsx`: Channel-based grouping

### Display Components
- `SearchResultCard.tsx`: List view item
- `SearchResultGrid.tsx`: Grid view item
- `VideoCard.tsx`: Base video display
- `VideoStats.tsx`: Statistics display
- `StatsBar.tsx`: Visual statistics bars
- `Progress.tsx`: Reusable progress component
- `ToggleGroup.tsx`: Reusable toggle controls

### Utility Components
- `SortControls.tsx`: Sorting interface
- `utils.ts`: Shared utility functions

## Current Challenges & Areas for Improvement

### Potential Enhancements
1. Video playback functionality
2. User authentication
3. Comments system
4. Channel pages
5. Video upload interface
6. Watch history
7. Playlists
8. Like/dislike functionality

### Known Limitations
- Static sample data
- Limited to sample video dataset
- No backend integration
- No persistence
- Limited interaction features
- No video playback functionality

## Development Guidelines

### Code Style
- Functional components with hooks
- TypeScript interfaces for type safety
- Tailwind classes for styling
- Component-based architecture
- Utility functions in dedicated files
- Path aliases for cleaner imports

### Best Practices
- Responsive design first
- Type safety throughout
- Clean component hierarchy
- Reusable components
- Clear naming conventions
- Consistent formatting

### Testing Considerations
- Component testing needed
- Sort functionality testing
- Responsive layout testing
- Statistics calculation testing
- Cross-browser compatibility
- Performance testing for large datasets

## Next Steps
1. Implement video playback
2. Add user authentication
3. Create channel pages
4. Implement comments system
5. Add watch history
6. Create playlists functionality
7. Add like/dislike system
8. Implement backend integration

## Development Environment
- Vite for development server
- ESLint for code quality
- TypeScript for type checking
- Tailwind CSS for styling
- Path aliases configured
- React Router for navigation

This context document should help future development by providing a clear understanding of the project's current state, architecture decisions, and future direction.