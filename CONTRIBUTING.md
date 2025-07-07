# Contributing to TagMaster

We welcome contributions to TagMaster! This document outlines how to contribute to the project.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL database
- Git

### Setup Development Environment
```bash
# Fork and clone the repository
git clone https://github.com/yourusername/tagmaster.git
cd tagmaster

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your database URL

# Setup database
npm run db:push

# Start development server
npm run dev
```

## 🔧 Development Workflow

### 1. Create a Feature Branch
```bash
git checkout -b feature/your-feature-name
```

### 2. Code Standards
- Use TypeScript for all new code
- Follow existing code style and conventions
- Use meaningful variable and function names
- Add comments for complex logic
- Follow the established file structure

### 3. Testing Your Changes
```bash
# Test API endpoints
curl http://localhost:5000/api/health

# Test tag generation
curl -X POST http://localhost:5000/api/generate-tags \
  -H "Content-Type: application/json" \
  -d '{"platform":"youtube-tags","description":"test description"}'

# Test premium features
curl -X POST http://localhost:5000/api/generate-youtube-titles \
  -H "Content-Type: application/json" \
  -d '{"description":"test video","style":"professional"}'
```

### 4. Commit Guidelines
Use clear, descriptive commit messages:
```
feat: add new tag generation algorithm
fix: resolve database connection timeout
docs: update API documentation
style: improve UI components styling
refactor: optimize tag generation logic
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
│   ├── config/             # Configuration files
│   └── routes.ts           # API routes
├── shared/                 # Shared types and schemas
└── docs/                   # Documentation files
```

## 🎯 Types of Contributions

### 🐛 Bug Reports
- Use the GitHub issue template
- Include steps to reproduce
- Provide error messages and logs
- Specify your environment details

### ✨ Feature Requests
- Check existing issues first
- Clearly describe the feature
- Explain the use case and benefits
- Consider implementation complexity

### 🔧 Code Contributions

#### Frontend (React + TypeScript)
- Follow component patterns in existing code
- Use Tailwind CSS for styling
- Implement responsive design
- Add loading states and error handling

#### Backend (Node.js + Express)
- Use TypeScript for type safety
- Follow RESTful API patterns
- Implement proper error handling
- Add input validation with Zod schemas

#### Database (PostgreSQL + Drizzle)
- Use Drizzle ORM for database operations
- Follow existing schema patterns
- Add proper indexes for performance
- Use migrations for schema changes

## 🧪 Testing Guidelines

### Frontend Testing
- Test all user interactions
- Verify responsive design
- Check accessibility features
- Test with different data scenarios

### Backend Testing
- Test all API endpoints
- Verify error handling
- Test rate limiting
- Check database operations

### Integration Testing
- Test full user workflows
- Verify AI integration fallbacks
- Test premium features
- Check cross-platform compatibility

## 📊 Performance Considerations

### Frontend Performance
- Optimize bundle size
- Use React Query for caching
- Implement lazy loading
- Minimize re-renders

### Backend Performance
- Optimize database queries
- Implement proper caching
- Use connection pooling
- Monitor response times

## 🔒 Security Guidelines

### Data Protection
- Validate all user inputs
- Sanitize database queries
- Protect against XSS attacks
- Implement rate limiting

### API Security
- Use HTTPS in production
- Implement proper CORS policies
- Protect sensitive endpoints
- Secure environment variables

## 📝 Documentation

### Code Documentation
- Add JSDoc comments for functions
- Document complex algorithms
- Update README for new features
- Maintain API documentation

### User Documentation
- Update user guides
- Add feature tutorials
- Create troubleshooting guides
- Maintain deployment docs

## 🚀 Pull Request Process

### Before Submitting
1. Ensure all tests pass
2. Update documentation
3. Check code formatting
4. Verify no breaking changes

### PR Requirements
- Clear title and description
- Link related issues
- Include screenshots for UI changes
- Add tests for new features

### Review Process
1. Automated checks must pass
2. Code review by maintainers
3. Testing in staging environment
4. Approval and merge

## 🌟 Recognition

Contributors will be recognized in:
- README contributors section
- GitHub contributors graph
- Release notes for major contributions

## 📞 Getting Help

- **Discord**: [Join our community](https://discord.gg/tagmaster)
- **Issues**: [GitHub Issues](https://github.com/yourusername/tagmaster/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/tagmaster/discussions)
- **Email**: support@tagmaster.com

## 📜 Code of Conduct

### Our Standards
- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on constructive feedback
- Collaborate effectively

### Enforcement
- Report violations to maintainers
- All reports will be reviewed
- Consequences for violations may include warnings or bans

## 🎉 Thank You!

Thank you for contributing to TagMaster! Your efforts help make social media optimization accessible to everyone.

---

**Happy Coding!** 🚀