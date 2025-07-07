# TagMaster - AI-Powered Social Media Tag Generator

## Overview

TagMaster is a modern web application that generates optimized hashtags and tags for social media platforms using AI-powered algorithms. The application supports YouTube (tags and hashtags), Instagram, and TikTok, providing SEO-optimized results to maximize content discoverability.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom CSS variables and neon theme
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite with React plugin and runtime error overlay

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon serverless PostgreSQL
- **Session Management**: DatabaseStorage class with PostgreSQL persistence
- **API**: RESTful endpoints with JSON responses

### UI/UX Design
- **Design System**: Dark theme with neon accents (cyan, pink, purple, yellow)
- **Layout**: Responsive design with mobile-first approach
- **Animations**: CSS animations with glass morphism effects
- **Accessibility**: ARIA labels and semantic HTML structure

## Key Components

### Database Schema
- **Tag Generations Table**: Stores generated tags with platform, description, and results
- **Fields**: id (serial), platform (text), description (text), generatedTags (jsonb), createdAt (timestamp)
- **Supported Platforms**: youtube-tags, youtube-hashtags, instagram, tiktok

### API Endpoints
- `POST /api/generate-tags`: Generate tags using AI or fallback logic
- `GET /api/recent-generations`: Retrieve recent tag generations with pagination
- `GET /api/generation/:id`: Get specific generation by ID
- `POST /api/generate-youtube-titles`: Generate video titles (Premium)
- `POST /api/generate-youtube-description`: Generate video descriptions (Premium)
- `GET /api/health`: Basic health check endpoint
- `GET /api/status`: Detailed service status and dependencies

### Core Services
- **TagGeneratorService**: AI-powered tag generation with intelligent fallback
- **GeminiService**: Google Gemini AI integration for smart tag suggestions
- **YouTubeContentGenerator**: Premium content generation service (NEW)
- **DatabaseStorage**: PostgreSQL persistence with optimized queries
- **Rate Limiting**: IP-based request throttling with configurable limits
- **Error Handling**: Comprehensive error management with logging
- **Health Monitoring**: Service status tracking and diagnostics

### Frontend Components
- **PlatformSelector**: Multi-platform selection interface
- **TagGenerator**: Input form and generation logic
- **TagResults**: Display and copy functionality for generated tags
- **FeaturesShowcase**: Marketing section with feature highlights
- **RecentGenerations**: History viewer with expandable details
- **AnalyticsDashboard**: Live analytics with platform breakdown
- **SearchFunctionality**: Advanced search and filter capabilities
- **YouTubeContentGenerator**: Premium title and description generation (NEW)
- **ComingSoon**: Feature roadmap with thumbnail generator preview (NEW)
- **TipsAndTricks**: Educational content for optimization strategies
- **Footer**: Comprehensive site footer with social links

## Data Flow

1. **User Input**: User selects platform and enters content description
2. **Validation**: Client-side and server-side validation using Zod schemas
3. **Rate Limiting**: Request throttling applied based on IP address
4. **AI Processing**: Primary attempt using Google Gemini AI for intelligent tag generation
5. **Fallback Logic**: Automatic fallback to logic-based generation if AI fails
6. **Storage**: Generated tags stored in PostgreSQL database with metadata
7. **Response**: Server returns structured response with success status and source info
8. **Display**: Frontend displays results with copy/reset functionality
9. **History**: Recent generations accessible with pagination support

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Query
- **UI Components**: Radix UI primitives, Lucide React icons
- **Styling**: Tailwind CSS, Class Variance Authority, clsx
- **Forms**: React Hook Form with Hookform Resolvers
- **Utilities**: date-fns, nanoid

### Backend Dependencies
- **Server**: Express.js with enhanced middleware stack
- **Database**: Drizzle ORM, Neon serverless client with connection pooling
- **AI Integration**: Google Gemini AI with fallback logic-based generation
- **Validation**: Zod schemas with comprehensive error handling
- **Security**: CORS protection, rate limiting, input sanitization
- **Monitoring**: Health checks, API status endpoints, request logging

### Development Dependencies
- **Build Tools**: Vite, esbuild, TypeScript
- **Database Tools**: Drizzle Kit for migrations
- **Development**: tsx for TypeScript execution

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds React app to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Database**: Drizzle migrations in `migrations/` directory

### Environment Configuration
- **Database**: PostgreSQL connection via `DATABASE_URL` environment variable
- **Development**: Hot module replacement with Vite dev server
- **Production**: Static file serving with Express.js

### Platform Support
- **Development**: Replit environment with cartographer plugin
- **Production**: Node.js server with static file serving
- **Database**: Neon serverless PostgreSQL for scalability

## Production Readiness Features

### Security & Performance
- **Rate Limiting**: IP-based request throttling (100 req/15min default)
- **CORS Protection**: Configurable origin validation  
- **Input Validation**: Comprehensive request sanitization
- **Error Handling**: Structured error responses with logging
- **Health Monitoring**: `/api/health` and `/api/status` endpoints

### AI Integration
- **Primary Engine**: Google Gemini 2.5 Flash for intelligent tag generation
- **Automatic Fallback**: Logic-based generation when AI unavailable
- **Graceful Degradation**: System remains functional without API keys

### Development Features
- **Environment Validation**: Startup checks for required configuration
- **Structured Logging**: Request tracking and performance metrics
- **Hot Reload**: Development server with instant updates
- **Type Safety**: Full TypeScript coverage with Zod validation

## Deployment Requirements

### Required Environment Variables
```bash
DATABASE_URL=postgresql://user:pass@host:port/db
```

### Optional Configuration
```bash
GEMINI_API_KEY=your_api_key_here
NODE_ENV=production
PORT=5000
RATE_LIMIT_MAX_REQUESTS=100
```

### Deployment Commands
```bash
npm install          # Install dependencies
npm run db:push      # Setup database schema  
npm run build        # Build for production
npm start           # Start production server
```

## Changelog

```
Changelog:
- July 07, 2025. Initial setup with React frontend and Express backend
- July 07, 2025. Added PostgreSQL database integration with Drizzle ORM
- July 07, 2025. Integrated Google Gemini AI with intelligent fallback system
- July 07, 2025. Added production-ready features: rate limiting, CORS, error handling
- July 07, 2025. Created comprehensive deployment documentation and health monitoring
- July 07, 2025. Enhanced UI with tabbed interface, analytics dashboard, search functionality
- July 07, 2025. Added educational tips section and comprehensive footer
- July 07, 2025. Configured Ko-fi support link integration
- July 07, 2025. Added Premium YouTube content generation (titles & descriptions)
- July 07, 2025. Created Coming Soon section with thumbnail generator roadmap
- July 07, 2025. Optimized codebase structure for GitHub deployment
- July 07, 2025. Added comprehensive README and build scripts
- July 07, 2025. PERFORMANCE & SEO OPTIMIZATION: Global SEO, Core Web Vitals, speed optimizations
- July 07, 2025. Added comprehensive meta tags, structured data, sitemap, robots.txt
- July 07, 2025. Implemented performance monitoring, bundle optimization, caching strategies
- July 07, 2025. Created complete GitHub deployment package with CI/CD workflows
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
Ko-fi Support Link: https://ko-fi.com/ytseo1509
```