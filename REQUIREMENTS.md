# ViewTube Requirements

## Core Features

### Search Functionality
- Search bar in header for video search
- Search results page showing filtered videos
- Home page as default landing page
- Quick search option for "React" in sidebar
- Search term preserved in URL query parameter

### Debug Panel
- Fixed panel at bottom of screen
- Shows timestamped debug messages
- Ability to clear logs
- Real-time updates for search and sort actions

### Video Display
- Two view modes:
  - Grid view (default)
    - Responsive grid layout
    - Automatically adjusts columns based on screen width
    - Supports up to 8 columns on very wide screens
  - List view
    - Single column layout
    - Maximum width of 1096px
    - Centered on page

### Video Information
- Thumbnail with duration overlay
- Video title
- Channel information (name and avatar)
- View count
- Age (displayed as "X days ago")
- Video description (truncated)

### Statistics Display
- Two display modes for video statistics:
  - Text mode: Shows views and age as text
  - Bar chart mode (default):
    - Views bar (blue) - relative to highest view count
    - Age bar (green) - relative to oldest video
    - Animated transitions
    - Clean, modern design

### Sorting
- Sort by views (descending)
- Sort by age (ascending)

### Layout
- Fixed header with search
- Fixed sidebar with navigation options
- Fixed debug panel at bottom
- Main content area with top controls
- Spacing between grid items (gap-4)
- Responsive design supporting multiple breakpoints

### UI Controls
- View toggle (Grid/List)
- Statistics display toggle (Text/Bar charts)
- Sort controls
- Clear visual indication of selected options

## Data Requirements
- Sample video data with:
  - Unique ID
  - Title
  - Description
  - Thumbnail URL
  - Channel info (name, avatar)
  - View count
  - Upload timestamp
  - Duration
- 21 total sample videos across 3 channels:
  - React Masters: 8 videos
  - Code Pioneers: 7 videos
  - Web Wizards: 6 videos
- All timestamps between 2024-11-15 and 2024-11-30 (displayed as days ago)

### Playlists
- Three predefined playlists with curated videos
- Playlist information:
  - Title and description
  - Number of videos
  - Age (days since most recent video)

## Visual Design
- Modern, clean interface
- Consistent spacing and typography
- Hover effects on interactive elements
- Clear visual hierarchy
- Responsive layout at all screen sizes
- Professional thumbnails and avatars
- Tailwind CSS for styling