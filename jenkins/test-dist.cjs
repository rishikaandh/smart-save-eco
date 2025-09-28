const { execSync } = require('child_process');
const fs = require('fs');

try {
  console.log('Running build...');
  execSync('npm run build', { stdio: 'inherit' });

  const index = 'dist/index.html';
  if (!fs.existsSync(index)) {
    console.error(`ERROR: expected ${index} not found.`);
    process.exit(1);
  }
  console.log('OK: build artifacts found:', index);
  process.exit(0);
} catch (err) {
  console.error('Build/test script failed:', err.message || err);
  process.exit(1);
}