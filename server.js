import { createServer } from 'http';
import next from 'next';
import { parse } from 'url';

const dev = process.env.NODE_ENV !== 'production';
const hostname = process.env.HOSTNAME || 'localhost';
const port = parseInt(process.env.PORT || '3000', 10);

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Check if the request URL is missing
      if (!req.url) {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Bad Request: Missing URL');
        return;
      }

      // Parse the URL
      const parsedUrl = parse(req.url, true);

      // Let Next.js handle all routes naturally
      await handle(req, res, parsedUrl);
    } catch (error) {
      console.error('Error occurred handling request:', req.url, error);
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Internal Server Error');
    }
  })
 .once("error", (error) => {
  console.error('Server initialization error:', error);
  process.exit(1);
 })
 .listen(port, hostname, () => {
   console.log(`🚀 Server running at http://${hostname}:${port}/`);
   console.log(`🔧 Environment: ${dev ? 'development' : 'production'}`);
 });
});
