import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBlogPostSchema, updateBlogPostSchema, insertTrialRequestSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Blog routes
  app.get("/api/blog/posts", async (req, res) => {
    try {
      const posts = await storage.getPublishedBlogPosts();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch blog posts" });
    }
  });

  app.get("/api/blog/posts/search", async (req, res) => {
    try {
      const { q: query, category } = req.query;
      const posts = await storage.searchBlogPosts(
        query ? String(query) : undefined,
        category ? String(category) : undefined
      );
      res.json(posts);
    } catch (error) {
      res.status(500).json({ message: "Failed to search blog posts" });
    }
  });

  app.get("/api/blog/categories", async (req, res) => {
    try {
      const categories = await storage.getBlogPostCategories();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch blog categories" });
    }
  });

  app.get("/api/blog/posts/all", async (req, res) => {
    try {
      const posts = await storage.getAllBlogPosts();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch all blog posts" });
    }
  });

  app.get("/api/blog/posts/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const post = await storage.getBlogPost(id);
      
      if (!post) {
        return res.status(404).json({ message: "Blog post not found" });
      }
      
      res.json(post);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch blog post" });
    }
  });

  app.get("/api/blog/posts/slug/:slug", async (req, res) => {
    try {
      const { slug } = req.params;
      const post = await storage.getBlogPostBySlug(slug);
      
      if (!post) {
        return res.status(404).json({ message: "Blog post not found" });
      }
      
      res.json(post);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch blog post" });
    }
  });

  app.post("/api/blog/posts", async (req, res) => {
    try {
      const validatedData = insertBlogPostSchema.parse(req.body);
      const post = await storage.createBlogPost(validatedData);
      res.status(201).json(post);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid blog post data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create blog post" });
    }
  });

  app.put("/api/blog/posts/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const validatedData = updateBlogPostSchema.parse(req.body);
      
      const post = await storage.updateBlogPost(id, validatedData);
      
      if (!post) {
        return res.status(404).json({ message: "Blog post not found" });
      }
      
      res.json(post);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid blog post data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to update blog post" });
    }
  });

  app.delete("/api/blog/posts/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const success = await storage.deleteBlogPost(id);
      
      if (!success) {
        return res.status(404).json({ message: "Blog post not found" });
      }
      
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: "Failed to delete blog post" });
    }
  });

  // Trial request routes
  app.post("/api/trial-requests", async (req, res) => {
    try {
      const validatedData = insertTrialRequestSchema.parse(req.body);
      const trialRequest = await storage.createTrialRequest(validatedData);
      res.status(201).json(trialRequest);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid trial request data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create trial request" });
    }
  });

  app.get("/api/trial-requests", async (req, res) => {
    try {
      const requests = await storage.getAllTrialRequests();
      res.json(requests);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch trial requests" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
