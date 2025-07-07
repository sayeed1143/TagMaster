# TagMaster Deployment Guide

This guide covers deployment options for TagMaster across different platforms.

## 🚀 Quick Deploy Options

### Option 1: Replit (Recommended for Development)
1. Fork this repository to Replit
2. Set environment variables in Secrets tab
3. Click "Run" - deployment is automatic!

### Option 2: Vercel + Neon Database
```bash
# Install Vercel CLI
npm i -g vercel

# Clone and setup
git clone https://github.com/yourusername/tagmaster.git
cd tagmaster
npm install

# Deploy to Vercel
vercel --prod

# Set environment variables in Vercel dashboard
# DATABASE_URL (get from Neon)
# GEMINI_API_KEY (optional)
```

### Option 3: Railway
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and deploy
railway login
railway new
railway add postgresql
railway deploy

# Set environment variables in Railway dashboard
```

### Option 4: Docker Deployment
```bash
# Build and run with Docker Compose
docker-compose up -d

# Or build manually
docker build -t tagmaster .
docker run -p 5000:5000 -e DATABASE_URL=your_db_url tagmaster
```

## 🔧 Environment Setup

### Required Environment Variables
```bash
DATABASE_URL=postgresql://user:pass@host:port/database
```

### Optional Environment Variables
```bash
GEMINI_API_KEY=your_api_key         # Enables AI features
NODE_ENV=production                 # Production optimizations
PORT=5000                          # Server port
RATE_LIMIT_MAX_REQUESTS=100        # Request throttling
```

## 📊 Database Setup

### Neon PostgreSQL (Recommended)
1. Visit [neon.tech](https://neon.tech)
2. Create new project
3. Copy connection string to `DATABASE_URL`
4. Run `npm run db:push` to setup schema

### Local PostgreSQL
```bash
# Install PostgreSQL
# Create database
createdb tagmaster

# Set DATABASE_URL
export DATABASE_URL=postgresql://localhost/tagmaster

# Setup schema
npm run db:push
```

## 🔑 API Keys Setup

### Google Gemini API (Optional)
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create API key
3. Add to environment as `GEMINI_API_KEY`
4. Enables AI-powered tag and content generation

**Note**: Without API key, TagMaster uses intelligent fallback algorithms.

## 🏗️ Build Process

### Development
```bash
npm install
npm run db:push
npm run dev
```

### Production
```bash
npm install
npm run build
npm start
```

## 🔍 Health Monitoring

### Health Checks
- `GET /api/health` - Basic health status
- `GET /api/status` - Detailed service information

### Monitoring Setup
```bash
# Basic health check
curl http://localhost:5000/api/health

# Detailed status
curl http://localhost:5000/api/status
```

## 🚦 Performance Optimization

### Rate Limiting
- Default: 100 requests per 15 minutes
- Configurable via `RATE_LIMIT_MAX_REQUESTS`
- IP-based throttling

### Caching
- Static assets cached via Express
- Database queries optimized with indexes
- AI responses cached temporarily

### Security
- CORS protection enabled
- Input validation with Zod schemas
- SQL injection prevention
- Environment variable sanitization

## 📈 Scaling Considerations

### Horizontal Scaling
- Stateless application design
- Database connection pooling
- Load balancer ready

### Database Scaling
- PostgreSQL connection pooling
- Read replicas supported
- Neon auto-scaling available

### CDN Integration
- Static assets can be served via CDN
- API responses cacheable
- Global distribution ready

## 🔧 Troubleshooting

### Common Issues

**Database Connection Errors**
```bash
# Check DATABASE_URL format
echo $DATABASE_URL

# Test connection
npm run db:push
```

**Port Already in Use**
```bash
# Change port
export PORT=3000
npm start
```

**Build Failures**
```bash
# Clear cache
rm -rf node_modules dist
npm install
npm run build
```

### Debug Mode
```bash
# Enable debug logging
export DEBUG=tagmaster:*
npm run dev
```

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/tagmaster/issues)
- **Documentation**: [Wiki](https://github.com/yourusername/tagmaster/wiki)
- **Support**: [Ko-fi](https://ko-fi.com/ytseo1509)

## 🔄 Updates

### Automatic Updates
```bash
# Check for updates
git pull origin main
npm install
npm run build
```

### Database Migrations
```bash
# Update database schema
npm run db:push
```

---

**TagMaster** - Ready for production deployment on any platform! 🚀