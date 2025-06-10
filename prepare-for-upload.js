const fs = require('fs');
const path = require('path');

// Create upload directory if it doesn't exist
const uploadDir = path.join(__dirname, 'upload');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Copy .next/static to upload/static
const staticDir = path.join(__dirname, '.next', 'static');
const uploadStaticDir = path.join(uploadDir, '_next', 'static');

if (fs.existsSync(staticDir)) {
  // Create the directory structure
  if (!fs.existsSync(path.join(uploadDir, '_next'))) {
    fs.mkdirSync(path.join(uploadDir, '_next'));
  }
  if (!fs.existsSync(uploadStaticDir)) {
    fs.mkdirSync(uploadStaticDir);
  }

  // Copy static files recursively
  copyFolderRecursiveSync(staticDir, path.join(uploadDir, '_next'));
}

// Copy HTML files from .next/server/app
const serverAppDir = path.join(__dirname, '.next', 'server', 'app');
if (fs.existsSync(serverAppDir)) {
  // Copy HTML files
  copyHtmlFiles(serverAppDir, uploadDir);
}

// Copy public folder contents
const publicDir = path.join(__dirname, 'public');
if (fs.existsSync(publicDir)) {
  copyFolderRecursiveSync(publicDir, uploadDir);
}

// Create .env file for cPanel
const envProdFile = path.join(__dirname, '.env.production');
const uploadEnvFile = path.join(uploadDir, '.env.local');

if (fs.existsSync(envProdFile)) {
  // Copy the production env file to the upload directory as .env.local
  fs.copyFileSync(envProdFile, uploadEnvFile);
  console.log('Copied production environment file to upload directory');
} else {
  // Create a template environment file if none exists
  const templateEnvContent = `# Email Configuration
# Replace these values with your actual cPanel/hosting email settings
SMTP_HOST=mail.yourdomain.com
SMTP_PORT=587
SMTP_USER=contact@yourdomain.com
SMTP_PASSWORD=your-email-password
SMTP_FROM=contact@yourdomain.com

# Site URL (for absolute URLs)
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# Add any other environment variables your application needs here
`;

  fs.writeFileSync(uploadEnvFile, templateEnvContent);
  console.log('Created template environment file in upload directory');
  console.log('IMPORTANT: Edit .env.local in the upload directory with your actual production values before uploading');
}

console.log('Files prepared for upload in the "upload" directory');

// Function to copy a folder recursively
function copyFolderRecursiveSync(source, target) {
  // Create target folder if it doesn't exist
  const targetFolder = path.join(target, path.basename(source));
  if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder, { recursive: true });
  }

  // Copy files and subfolders
  if (fs.lstatSync(source).isDirectory()) {
    const files = fs.readdirSync(source);
    files.forEach(file => {
      const currentSource = path.join(source, file);
      if (fs.lstatSync(currentSource).isDirectory()) {
        copyFolderRecursiveSync(currentSource, targetFolder);
      } else {
        const targetFile = path.join(targetFolder, file);
        fs.copyFileSync(currentSource, targetFile);
      }
    });
  }
}

// Function to copy HTML files (handling route structure)
function copyHtmlFiles(sourceDir, targetDir, currentPath = '') {
  const items = fs.readdirSync(sourceDir);
  
  items.forEach(item => {
    const sourceItem = path.join(sourceDir, item);
    
    if (fs.lstatSync(sourceItem).isDirectory()) {
      // Handle subdirectories
      const newPath = currentPath ? `${currentPath}/${item}` : item;
      copyHtmlFiles(sourceItem, targetDir, newPath);
    } else if (item.endsWith('.html')) {
      // Copy HTML files
      const targetPath = currentPath ? path.join(targetDir, currentPath) : targetDir;
      
      // Create directory structure if needed
      if (currentPath && !fs.existsSync(targetPath)) {
        fs.mkdirSync(targetPath, { recursive: true });
      }
      
      // Special handling for index.html files
      if (item === 'index.html') {
        fs.copyFileSync(sourceItem, path.join(targetPath, item));
      } else if (item !== 'page.html') {
        // For other HTML files, copy them directly
        const pageName = item.replace('.html', '');
        
        // Create directory for the page if it doesn't exist
        const pageDir = path.join(targetPath, pageName);
        if (!fs.existsSync(pageDir)) {
          fs.mkdirSync(pageDir, { recursive: true });
        }
        
        // Copy the HTML file as index.html in the page directory
        fs.copyFileSync(sourceItem, path.join(pageDir, 'index.html'));
      }
    }
  });
}
