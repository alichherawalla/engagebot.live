import express, { type Request, Response, NextFunction } from "express";
import path from "path";
import fs from "fs";
import { registerRoutes } from "./routes";
import { log } from "./vite";
import { setupViteWithMeta, serveStaticWithMeta } from "./vite-meta";
import { generateMetaTags, injectMetaTags } from "./meta-tags";
import { storage } from "./storage";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // Serve static files (images, etc.) in both development and production
  const publicPath = path.resolve(import.meta.dirname, "public");
  if (fs.existsSync(publicPath)) {
    app.use(express.static(publicPath));
  }

  // Add meta tag injection middleware for HTML routes
  app.use("*", async (req, res, next) => {
    // Only process HTML requests (not API routes, static files, etc.)
    if (req.path.startsWith('/api/') || req.path.includes('.')) {
      return next();
    }

    // Check if this is a request that should get meta tag injection
    const isHtmlRequest = req.headers.accept?.includes('text/html') || 
                         req.headers.accept?.includes('*/*') ||
                         !req.headers.accept;

    if (!isHtmlRequest) {
      return next();
    }

    try {
      // Generate meta tags for this route
      const metaData = await generateMetaTags(req.originalUrl, storage);
      
      // Store meta data for later injection
      (req as any).metaData = metaData;
    } catch (error) {
      console.error('Error generating meta tags:', error);
    }

    next();
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupViteWithMeta(app, server);
  } else {
    serveStaticWithMeta(app);
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 5000 if not specified.
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = parseInt(process.env.PORT || '5000', 10);
  server.listen({
    port,
    host: "0.0.0.0",
  }, () => {
    log(`serving on port ${port}`);
  });
})();
