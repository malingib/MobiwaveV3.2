const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

// Function to create Node.js deployment package for cPanel
async function createNodeJSDeploymentPackage() {
  console.log('🚀 Creating Node.js deployment package for cPanel...');
  
  // Ensure .next directory exists (built app)
  const nextDir = path.join(__dirname, '.next');
  if (!fs.existsSync(nextDir)) {
    console.error('❌ .next directory does not exist. Please run the build process first.');
    console.log('Run: npm run build');
    process.exit(1);
  }
  
  // Create output stream
  const output = fs.createWriteStream(path.join(__dirname, 'mobiwave-nodejs-deployment.zip'));
  const archive = archiver('zip', {
    zlib: { level: 9 } // Maximum compression
  });
  
  // Listen for all archive data to be written
  output.on('close', function() {
    console.log(`✅ Node.js deployment package created: ${(archive.pointer() / 1024 / 1024).toFixed(2)} MB`);
    console.log('📦 File: mobiwave-nodejs-deployment.zip');
    console.log('');
    console.log('🚀 Ready for cPanel Node.js deployment!');
    console.log('');
    console.log('📋 Deployment Instructions:');
    console.log('1. Log into your cPanel');
    console.log('2. Go to "Node.js App" or "Node.js Selector"');
    console.log('3. Create a new Node.js app:');
    console.log('   - Node.js Version: 18.x or higher');
    console.log('   - Application Root: public_html (or subdirectory)');
    console.log('   - Application URL: your domain');
    console.log('   - Application Startup File: app.js');
    console.log('4. Upload and extract mobiwave-nodejs-deployment.zip to your app directory');
    console.log('5. In cPanel Node.js App, click "NPM Install" to install dependencies');
    console.log('6. Start the application');
    console.log('');
    console.log('⚠️  Important: Make sure your hosting provider supports Node.js apps!');
  });
  
  // Handle errors
  archive.on('error', function(err) {
    console.error('❌ Error creating deployment package:', err);
    throw err;
  });
  
  // Pipe archive data to the file
  archive.pipe(output);
  
  // Files and directories to include
  const filesToInclude = [
    'package.json',
    'next.config.js',
    'app.js',
    'server.js',
    '.next',
    'public',
    'app',
    'components',
    'lib',
    'hooks',
    'styles'
  ];
  
  // Add each file/directory
  for (const item of filesToInclude) {
    const itemPath = path.join(__dirname, item);
    
    if (fs.existsSync(itemPath)) {
      const stat = fs.lstatSync(itemPath);
      
      if (stat.isDirectory()) {
        console.log(`📁 Adding directory: ${item}`);
        archive.directory(itemPath, item);
      } else {
        console.log(`📄 Adding file: ${item}`);
        archive.file(itemPath, { name: item });
      }
    } else {
      console.log(`⚠️  Skipping missing: ${item}`);
    }
  }
  
  // Create a startup script for cPanel
  const startupScript = `#!/bin/bash
# cPanel Node.js startup script
cd "$(dirname "$0")"
npm install --production
node app.js
`;
  
  archive.append(startupScript, { name: 'startup.sh' });
  
  // Create a .htaccess file for proper routing
  const htaccess = `RewriteEngine On
RewriteRule ^$ http://127.0.0.1:3000/ [P,L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ http://127.0.0.1:3000/$1 [P,L]
`;
  
  archive.append(htaccess, { name: '.htaccess' });
  
  // Create README for deployment
  const readme = `# MobiWave Node.js Deployment

## Requirements
- cPanel with Node.js support
- Node.js 18.x or higher
- At least 512MB RAM

## Deployment Steps

1. **Create Node.js App in cPanel:**
   - Go to cPanel → Node.js App
   - Click "Create Application"
   - Set Node.js version to 18.x or higher
   - Set Application Root to your domain folder
   - Set Startup File to: app.js
   - Click "Create"

2. **Upload Files:**
   - Extract this ZIP file to your application directory
   - Make sure all files are in the root of your app directory

3. **Install Dependencies:**
   - In cPanel Node.js App interface, click "NPM Install"
   - Wait for installation to complete

4. **Start Application:**
   - Click "Start App" in cPanel Node.js interface
   - Your website should now be live!

## Troubleshooting

- **App won't start:** Check Node.js version (needs 18+)
- **Forms not working:** Ensure email settings are configured
- **Images not loading:** Check file permissions
- **500 errors:** Check application logs in cPanel

## Features Included
- ✅ Dynamic API routes for contact forms
- ✅ Server-side rendering
- ✅ Email functionality via Nodemailer
- ✅ All static assets
- ✅ Responsive design

## Support
If you need help, contact your hosting provider about Node.js app setup.
`;
  
  archive.append(readme, { name: 'DEPLOYMENT-README.md' });
  
  // Finalize the archive
  await archive.finalize();
}

// Check if archiver is installed
try {
  require.resolve('archiver');
} catch (e) {
  console.log('Installing required dependency: archiver');
  const { execSync } = require('child_process');
  try {
    execSync('npm install archiver', { stdio: 'inherit' });
    console.log('✅ Archiver installed successfully');
  } catch (installError) {
    console.error('❌ Failed to install archiver. Please install it manually:');
    console.log('npm install archiver');
    process.exit(1);
  }
}

// Run the deployment package creation
createNodeJSDeploymentPackage().catch(console.error);
