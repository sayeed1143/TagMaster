// Simplified build and deployment scripts for GitHub deployment
const { execSync } = require('child_process');

const scripts = {
  // Development
  dev: () => {
    console.log('🚀 Starting TagMaster development server...');
    execSync('NODE_ENV=development tsx server/index.ts', { stdio: 'inherit' });
  },

  // Production build
  build: () => {
    console.log('📦 Building TagMaster for production...');
    console.log('Building frontend...');
    execSync('vite build', { stdio: 'inherit' });
    
    console.log('Building backend...');
    execSync('esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist', { stdio: 'inherit' });
    
    console.log('✅ Build complete!');
  },

  // Start production server
  start: () => {
    console.log('🌟 Starting TagMaster production server...');
    execSync('NODE_ENV=production node dist/index.js', { stdio: 'inherit' });
  },

  // Database operations
  'db:push': () => {
    console.log('📊 Pushing database schema...');
    execSync('drizzle-kit push', { stdio: 'inherit' });
  },

  'db:studio': () => {
    console.log('🎛️ Opening Drizzle Studio...');
    execSync('drizzle-kit studio', { stdio: 'inherit' });
  },

  // Health check
  health: () => {
    console.log('🏥 Checking TagMaster health...');
    try {
      execSync('curl -f http://localhost:5000/api/health', { stdio: 'inherit' });
      console.log('✅ TagMaster is healthy!');
    } catch (error) {
      console.log('❌ TagMaster health check failed');
      process.exit(1);
    }
  },

  // Deployment helpers
  deploy: {
    vercel: () => {
      console.log('🚀 Deploying to Vercel...');
      execSync('npm run build', { stdio: 'inherit' });
      execSync('vercel --prod', { stdio: 'inherit' });
    },
    
    railway: () => {
      console.log('🚂 Deploying to Railway...');
      execSync('npm run build', { stdio: 'inherit' });
      execSync('railway up', { stdio: 'inherit' });
    },
    
    docker: () => {
      console.log('🐳 Building Docker image...');
      execSync('docker build -t tagmaster .', { stdio: 'inherit' });
      console.log('✅ Docker image built: tagmaster');
    }
  }
};

// CLI handler
const command = process.argv[2];
const subCommand = process.argv[3];

if (command === 'deploy' && subCommand) {
  scripts.deploy[subCommand]?.() || console.log('❌ Unknown deployment target');
} else if (scripts[command]) {
  scripts[command]();
} else {
  console.log(`
🏷️  TagMaster Build Scripts

Available commands:
  node package-scripts.js dev              # Start development server
  node package-scripts.js build            # Build for production
  node package-scripts.js start            # Start production server
  node package-scripts.js db:push          # Push database schema
  node package-scripts.js db:studio        # Open database studio
  node package-scripts.js health           # Health check
  node package-scripts.js deploy vercel    # Deploy to Vercel
  node package-scripts.js deploy railway   # Deploy to Railway
  node package-scripts.js deploy docker    # Build Docker image
  `);
}