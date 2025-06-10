const { spawn } = require('child_process');
const path = require('path');

// Simple startup script for cPanel
console.log('Starting MobiWave application...');

// Set environment
process.env.NODE_ENV = process.env.NODE_ENV || 'production';

// Start Next.js
const nextStart = spawn('npx', ['next', 'start'], {
  cwd: __dirname,
  stdio: 'inherit',
  env: {
    ...process.env,
    PORT: process.env.PORT || 3000
  }
});

nextStart.on('error', (err) => {
  console.error('Failed to start application:', err);
  process.exit(1);
});

nextStart.on('close', (code) => {
  console.log(`Application exited with code ${code}`);
  if (code !== 0) {
    process.exit(code);
  }
});

// Handle process termination
process.on('SIGTERM', () => {
  console.log('Received SIGTERM, shutting down gracefully');
  nextStart.kill('SIGTERM');
});

process.on('SIGINT', () => {
  console.log('Received SIGINT, shutting down gracefully');
  nextStart.kill('SIGINT');
});
