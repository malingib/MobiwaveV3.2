const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

// Function to create deployment package with Unix-style paths
async function createDeploymentPackage() {
  console.log('Creating deployment package...');
  
  // Ensure upload directory exists and has content
  const uploadDir = path.join(__dirname, 'upload');
  if (!fs.existsSync(uploadDir)) {
    console.error('Upload directory does not exist. Please run the build process first.');
    console.log('Run: npm run build && node prepare-for-upload.js');
    process.exit(1);
  }
  
  // Create output stream
  const output = fs.createWriteStream(path.join(__dirname, 'mobiwave-website-deployment.zip'));
  const archive = archiver('zip', {
    zlib: { level: 9 } // Maximum compression
  });
  
  // Listen for all archive data to be written
  output.on('close', function() {
    console.log(`✅ Deployment package created: ${archive.pointer()} total bytes`);
    console.log('📦 File: mobiwave-website-deployment.zip');
    console.log('');
    console.log('🚀 Ready for deployment!');
    console.log('');
    console.log('Next steps:');
    console.log('1. Upload mobiwave-website-deployment.zip to your cPanel File Manager');
    console.log('2. Extract the zip file in your public_html directory');
    console.log('3. Configure email settings in send-mail.php');
    console.log('4. Test your website');
  });
  
  // Handle errors
  archive.on('error', function(err) {
    console.error('Error creating deployment package:', err);
    throw err;
  });
  
  // Pipe archive data to the file
  archive.pipe(output);
  
  // Add files from upload directory with Unix-style paths
  await addDirectoryToArchive(archive, uploadDir, '');
  
  // Finalize the archive
  await archive.finalize();
}

// Function to recursively add directory contents with Unix paths
function addDirectoryToArchive(archive, sourceDir, archivePath) {
  return new Promise((resolve, reject) => {
    const items = fs.readdirSync(sourceDir);
    let pending = items.length;
    
    if (pending === 0) {
      resolve();
      return;
    }
    
    items.forEach(item => {
      const sourcePath = path.join(sourceDir, item);
      // Always use forward slashes for archive paths (Unix-style)
      const archiveItemPath = archivePath ? `${archivePath}/${item}` : item;
      
      const stat = fs.lstatSync(sourcePath);
      
      if (stat.isDirectory()) {
        // Recursively add directory contents
        addDirectoryToArchive(archive, sourcePath, archiveItemPath)
          .then(() => {
            pending--;
            if (pending === 0) resolve();
          })
          .catch(reject);
      } else {
        // Add file with Unix-style path
        archive.file(sourcePath, { name: archiveItemPath });
        pending--;
        if (pending === 0) resolve();
      }
    });
  });
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
createDeploymentPackage().catch(console.error);