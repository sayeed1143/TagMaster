# TagMaster - AI-Powered Social Media Tag Generator

🚀 **TagMaster** is a comprehensive social media optimization platform that generates SEO-optimized hashtags and tags for YouTube, Instagram, and TikTok using advanced AI technology.

## ✨ Features

### 🏷️ Tag Generation
- **YouTube Tags** - SEO-optimized video tags (15-20 per generation)
- **YouTube Hashtags** - Trending hashtag suggestions with # symbols
- **Instagram** - Comprehensive hashtag sets (up to 30 hashtags)
- **TikTok** - Viral hashtag combinations for maximum reach

### 🎬 Premium YouTube Tools ⭐ NEW
- **AI Title Generator** - Clickbait, professional & educational styles (10 titles per generation)
- **Description Generator** - Full video descriptions with timestamps, CTAs, and hashtags
- **Smart Fallback** - Works with or without AI API keys

### 🚀 Performance & SEO
- **Lightning Fast** - Optimized for Core Web Vitals (LCP < 2.5s)
- **Global SEO** - Multi-language ready with structured data
- **Mobile First** - Perfect performance on all devices
- **PWA Ready** - Installable web app experience

### 📊 Analytics & Insights
- **Live Analytics** - Real-time generation statistics
- **Platform Breakdown** - Usage analytics by platform
- **Performance Tracking** - Tag effectiveness metrics

### 🔍 Advanced Features
- **Smart Search** - Find and filter past generations
- **Generation History** - Complete activity timeline
- **Pro Tips** - Platform-specific optimization strategies

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript + Tailwind CSS + Vite
- **Backend**: Node.js + Express + TypeScript + ES Modules
- **Database**: PostgreSQL with Drizzle ORM + Connection Pooling
- **AI**: Google Gemini 2.5 Flash with intelligent fallback
- **UI**: Radix UI + shadcn/ui components + Framer Motion
- **Performance**: Bundle splitting, lazy loading, Core Web Vitals optimized
- **SEO**: Structured data, sitemap, robots.txt, Open Graph

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- (Optional) Google Gemini API key

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/tagmaster.git
cd tagmaster

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your database URL and API keys

# Set up the database
npm run db:push

# Start development server
npm run dev
```

### Environment Variables

```bash
# Required
DATABASE_URL=postgresql://user:pass@host:port/database

# Optional (enables AI features)
GEMINI_API_KEY=your_gemini_api_key

# Optional configuration
NODE_ENV=development
PORT=5000
RATE_LIMIT_MAX_REQUESTS=100
```

## 📁 Project Structure

```
tagmaster/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Application pages
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Utility functions
├── server/                 # Express backend
│   ├── services/           # Business logic services
│   ├── middleware/         # Express middleware
│   └── config/             # Configuration files
├── shared/                 # Shared types and schemas
└── README.md
```

## 🌟 Key Components

### Frontend Components
- `PlatformSelector` - Multi-platform selection interface
- `TagGenerator` - Main tag generation form
- `TagResults` - Results display with copy functionality
- `YouTubeContentGenerator` - Premium title/description tools
- `AnalyticsDashboard` - Live statistics dashboard

### Backend Services
- `TagGeneratorService` - Core tag generation logic
- `GeminiService` - AI integration with fallback
- `YouTubeContentGenerator` - Premium content generation
- `DatabaseStorage` - PostgreSQL data persistence

## 🎯 API Endpoints

### Tag Generation
- `POST /api/generate-tags` - Generate platform-specific tags
- `GET /api/recent-generations` - Retrieve generation history
- `GET /api/generation/:id` - Get specific generation

### Premium Features
- `POST /api/generate-youtube-titles` - Generate video titles
- `POST /api/generate-youtube-description` - Generate descriptions

### System
- `GET /api/health` - Basic health check
- `GET /api/status` - Detailed service status

## 🔧 Deployment

### Production Build
```bash
npm run build
npm start
```

### Docker Deployment
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 5000
CMD ["npm", "start"]
```

### Platform Deployments
- **Replit**: One-click deployment with auto-configuration
- **Vercel**: Connect GitHub repo + set environment variables
- **Railway**: PostgreSQL plugin + environment setup
- **Heroku**: Heroku Postgres + build configuration

## 📊 Performance Features

- **Rate Limiting**: 100 requests per 15 minutes (configurable)
- **CORS Protection**: Secure cross-origin requests
- **Input Validation**: Comprehensive request sanitization
- **Error Handling**: Structured error responses
- **Health Monitoring**: Real-time service status

## 🔒 Security

- IP-based rate limiting
- Input validation with Zod schemas
- SQL injection prevention
- Secure environment variable handling
- CORS protection with configurable origins

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎉 Acknowledgments

- Built with ❤️ for content creators
- Powered by Google Gemini AI
- UI components by Radix UI & shadcn/ui
- Icons by Font Awesome

## 📞 Support

- **Ko-fi**: [Support TagMaster](https://ko-fi.com/ytseo1509)
- **Issues**: [GitHub Issues](https://github.com/yourusername/tagmaster/issues)
- **Documentation**: [Wiki](https://github.com/yourusername/tagmaster/wiki)

---

**TagMaster** - Smarter Tags. Better Reach. Faster Growth. 🚀