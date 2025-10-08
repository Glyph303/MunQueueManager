# MunQueue - Model United Nations Speaking Queue Manager

## Overview

MunQueue is a real-time speaking queue management system designed for Model United Nations (MUN) committees. The application enables delegates to join a First-Come-First-Serve (FCFS) speaking queue while hosts (Executive Board members) manage the queue in real-time. Access is controlled via room codes without requiring user authentication.

The system supports multiple concurrent committee rooms, each with its own independent queue. It's built as a mobile-first progressive web application optimized for formal MUN settings, emphasizing clarity, efficiency, and professional appearance.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React with Vite for fast development and optimized production builds
- TypeScript for type safety across the application
- Wouter for lightweight client-side routing

**UI Component System**
- Radix UI primitives for accessible, unstyled components
- Shadcn/ui design system following Material Design principles
- Tailwind CSS for utility-first styling with custom design tokens
- Dark mode as primary theme (matches formal MUN settings)

**State Management**
- TanStack Query for server state management and caching
- Local component state for UI interactions
- Real-time state updates via Socket.IO event handlers

**Routing Structure**
- `/` - Committee selection landing page
- `/committee/:committeeId` - Role selection (host/delegate)
- `/committee/:committeeId/host` - Host setup (create/join room)
- `/committee/:committeeId/host/:roomCode` - Host queue management interface
- `/committee/:committeeId/delegate` - Delegate setup (join room)
- `/committee/:committeeId/room/:roomCode` - Delegate queue interface

### Backend Architecture

**Server Framework**
- Express.js for HTTP server and API routes
- Node.js runtime environment
- HTTP server upgraded to support WebSocket connections

**Real-time Communication**
- Socket.IO for bidirectional event-based communication
- WebSocket as primary transport with polling fallback
- Room-based event broadcasting for isolated committee sessions

**Data Storage Strategy**
- In-memory Map structure for room data (MVP implementation)
- Room data includes: committee ID, speaker queue, active speaker
- Data persists only during server uptime (stateless between restarts)
- Designed for easy migration to PostgreSQL via Drizzle ORM

**Core Socket.IO Events**
- `joinRoom` - Client joins specific committee room
- `enterQueue` - Delegate adds themselves to speaking queue
- `leaveQueue` - Delegate removes themselves from queue
- `callNext` - Host advances queue to next speaker
- `removeFromQueue` - Host removes specific delegate
- `moveInQueue` - Host reorders queue positions
- `resetQueue` - Host clears entire queue
- `queueUpdated` - Server broadcasts queue state changes

### Data Models

**Room Data Structure**
```typescript
{
  committeeId: string,
  queue: Speaker[],
  activeSpeaker: Speaker | null
}
```

**Speaker Model**
```typescript
{
  id: string,           // Socket ID
  name: string,         // Delegate name
  representation: string // Country/Portfolio
}
```

**Committee Configuration**
- Predefined committee data in `shared/committees.ts`
- Includes: ID, name, full name, agenda, member list
- Supports UNGA, UNSC, ECOSOC with specific rosters

### Design System

**Color Scheme (Dark Mode Primary)**
- Professional blue (`217 91% 60%`) for primary actions
- Green (`142 76% 45%`) for success/active speaker
- Red (`0 84% 60%`) for destructive actions
- Neutral backgrounds (`222 15% 12-20%`) for depth hierarchy

**Typography**
- System font stack for optimal performance
- Clear type scale: Display (36px), Heading (24px), Body (16px)
- Tracking and spacing optimized for mobile readability

**Interaction Patterns**
- Hover elevation effects (`hover-elevate`)
- Active state feedback (`active-elevate-2`)
- Instant visual confirmation for all actions
- Touch-optimized hit targets (min 44x44px)

## External Dependencies

### Core Frontend Libraries
- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Wouter** - Client-side routing
- **TanStack Query** - Server state management
- **Socket.IO Client** - Real-time communication

### UI Component Libraries
- **Radix UI** - Accessible component primitives (dialog, dropdown, select, etc.)
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Icon system
- **class-variance-authority** - Component variant management
- **cmdk** - Command palette component

### Backend Dependencies
- **Express** - HTTP server framework
- **Socket.IO** - WebSocket server
- **Drizzle ORM** - Database toolkit (configured for future PostgreSQL)
- **Drizzle Zod** - Schema validation

### Development Tools
- **TypeScript** - Type checking
- **tsx** - TypeScript execution
- **esbuild** - JavaScript bundler for production
- **Replit Vite Plugins** - Development utilities (error overlay, cartographer, dev banner)

### Database (Future Integration)
- **@neondatabase/serverless** - Neon PostgreSQL driver
- **Drizzle Kit** - Database migrations
- PostgreSQL configured but not actively used (in-memory storage in MVP)

### Additional Utilities
- **nanoid** - Unique ID generation
- **date-fns** - Date formatting
- **zod** - Runtime schema validation