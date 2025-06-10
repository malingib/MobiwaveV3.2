// Simple startup for cPanel hosting
const next = require('next');

const dev = false; // Always production on cPanel
const port = process.env.PORT || 3000;

console.log(`Starting Next.js app on port ${port}`);

const app = next({ dev, dir: __dirname });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = require('http').createServer((req, res) => {
      handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) {
        console.error('Error starting server:', err);
        throw err;
      }
      console.log(`> Server ready on http://localhost:${port}`);
    });
  })
  .catch((ex) => {
    console.error('Error preparing app:', ex.stack);
    process.exit(1);
  });