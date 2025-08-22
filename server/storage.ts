import { type User, type InsertUser, type BlogPost, type InsertBlogPost, type UpdateBlogPost, type TrialRequest, type InsertTrialRequest, users, blogPosts, trialRequests } from "@shared/schema";
import { randomUUID } from "crypto";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Blog post methods
  getAllBlogPosts(): Promise<BlogPost[]>;
  getPublishedBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(id: string): Promise<BlogPost | undefined>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  updateBlogPost(id: string, post: UpdateBlogPost): Promise<BlogPost | undefined>;
  deleteBlogPost(id: string): Promise<boolean>;
  
  // Trial request methods
  createTrialRequest(request: InsertTrialRequest): Promise<TrialRequest>;
  getAllTrialRequests(): Promise<TrialRequest[]>;
}

// Fallback in-memory storage implementation
export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private blogPosts: Map<string, BlogPost>;
  private trialRequests: Map<string, TrialRequest>;

  constructor() {
    this.users = new Map();
    this.blogPosts = new Map();
    this.trialRequests = new Map();
    
    // Initialize with some sample blog posts
    this.initializeBlogPosts();
  }

  private initializeBlogPosts() {
    const samplePosts: BlogPost[] = [
      {
        id: randomUUID(),
        title: "How AI is Revolutionizing Twitter Engagement for Entrepreneurs",
        slug: "ai-revolutionizing-twitter-engagement",
        content: `
# How AI is Revolutionizing Twitter Engagement for Entrepreneurs

In today's fast-paced digital landscape, entrepreneurs face an unprecedented challenge: maintaining authentic engagement on social media while focusing on core business operations. Twitter, with its real-time conversation dynamics, presents both tremendous opportunities and significant time management challenges.

## The Traditional Approach Falls Short

Most entrepreneurs approach Twitter engagement in one of two ways:

1. **Manual engagement**: Spending hours daily scrolling, finding relevant conversations, and crafting responses
2. **Generic automation**: Using basic scheduling tools that create robotic, inauthentic interactions

Both approaches have critical flaws. Manual engagement is unsustainable for busy founders, while generic automation damages brand reputation and fails to build meaningful relationships.

## Enter AI-Powered Engagement

Modern AI technology, particularly large language models like Claude 4.0, has fundamentally changed what's possible in social media automation. These systems can:

- **Understand context**: AI can analyze conversation threads, identify relevant topics, and understand the nuanced context of discussions
- **Maintain brand voice**: Advanced AI learns your communication style, ensuring consistent voice across all interactions
- **Generate expert responses**: By ingesting your knowledge base, AI can create responses that showcase your expertise

## The EngageBot Difference

EngageBot represents the next evolution in Twitter automation. Unlike traditional tools that simply schedule generic posts, EngageBot:

### 1. Learns Your Expertise
Upload your documents, blog posts, and expertise content. The AI ingests this information to understand your domain knowledge and create contextually relevant responses.

### 2. Maintains Authenticity
Through advanced voice analysis, EngageBot learns your communication patterns, ensuring every response sounds genuinely like you.

### 3. Discovers Quality Opportunities
Smart conversation discovery identifies high-value engagement opportunities where your expertise can add real value.

## Real Results from Real Entrepreneurs

Early adopters report:
- **15+ hours saved weekly** on Twitter engagement
- **2.5x increase in engagement rates** while maintaining authenticity
- **95% brand voice consistency** across all automated responses

## The Future of Social Media for Entrepreneurs

As AI technology continues advancing, we're moving toward a future where entrepreneurs can maintain authentic, expert-level social media presence without sacrificing time for core business activities.

The key is choosing tools that prioritize authenticity and expertise over volume and generic automation.

---

*Ready to transform your Twitter engagement? Get early access to EngageBot today.*
        `,
        excerpt: "Discover how modern entrepreneurs are leveraging AI to scale their Twitter presence while maintaining authentic engagement...",
        category: "AI Automation",
        author: "EngageBot Team",
        imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        published: true,
        createdAt: new Date("2023-12-15"),
        updatedAt: new Date("2023-12-15"),
      },
      {
        id: randomUUID(),
        title: "Building Authentic Relationships Through Automated Engagement",
        slug: "building-authentic-relationships-automated-engagement",
        content: `
# Building Authentic Relationships Through Automated Engagement

The greatest misconception about social media automation is that it inherently destroys authenticity. This couldn't be further from the truth when automation is implemented thoughtfully.

## What Makes Engagement Authentic?

Authentic engagement has three core characteristics:

1. **Relevance**: Your response adds value to the conversation
2. **Personality**: Your unique voice and perspective shine through
3. **Expertise**: You share insights from your domain knowledge

Traditional automation fails because it focuses on volume over these quality factors.

## The Relationship-First Approach

Successful entrepreneurs understand that social media is about building relationships, not broadcasting messages. Every interaction is an opportunity to:

- Demonstrate expertise
- Show personality
- Add genuine value
- Build trust

## How AI Enables Authentic Automation

Modern AI makes it possible to automate engagement while maintaining all the elements that make interactions authentic:

### Context Understanding
AI can read entire conversation threads, understanding not just what people are saying, but why they're saying it.

### Knowledge Integration
By learning from your expertise content, AI can craft responses that showcase your domain knowledge naturally.

### Voice Consistency
Advanced language models can maintain your unique communication style across all interactions.

## Best Practices for Authentic Automation

1. **Quality over Quantity**: Focus on meaningful interactions rather than maximum volume
2. **Target Relevant Conversations**: Engage where your expertise truly adds value
3. **Maintain Voice Consistency**: Ensure all automated responses sound genuinely like you
4. **Monitor and Adjust**: Regularly review automated interactions to maintain quality

## Measuring Relationship Building Success

Track metrics that matter for relationship building:
- Response quality and relevance
- Follow-up conversations initiated
- Meaningful connections made
- Business opportunities generated

Volume metrics like total responses or engagement rate tell only part of the story.

---

*Learn how EngageBot helps entrepreneurs build authentic relationships at scale.*
        `,
        excerpt: "Learn the strategies successful founders use to build meaningful professional relationships on Twitter without sacrificing authenticity...",
        category: "Growth Strategy",
        author: "Sarah Martinez",
        imageUrl: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        published: true,
        createdAt: new Date("2023-12-12"),
        updatedAt: new Date("2023-12-12"),
      },
      {
        id: randomUUID(),
        title: "Measuring ROI: Twitter Engagement Metrics That Actually Matter",
        slug: "measuring-roi-twitter-engagement-metrics",
        content: `
# Measuring ROI: Twitter Engagement Metrics That Actually Matter

Most entrepreneurs track the wrong metrics when measuring Twitter engagement success. Likes, retweets, and follower count tell an incomplete story about real business impact.

## The Problem with Vanity Metrics

Traditional social media metrics fail entrepreneurs because they:
- Don't correlate with business outcomes
- Can be artificially inflated
- Focus on quantity over quality
- Miss relationship-building progress

## Metrics That Drive Business Results

### 1. Conversation Quality Score
Rate your engagements on:
- Relevance to your expertise
- Depth of discussion generated
- Value provided to participants

### 2. Relationship Progression
Track how many Twitter interactions lead to:
- Direct messages
- Email subscriptions
- Business inquiries
- Partnership discussions

### 3. Expertise Recognition
Monitor mentions that position you as:
- Subject matter expert
- Thought leader
- Go-to resource in your field

### 4. Conversion Funnel Metrics
Measure Twitter's impact on:
- Website traffic
- Newsletter signups
- Demo requests
- Sales conversations

## The Time ROI Factor

For entrepreneurs, time is the most valuable resource. Calculate:
- Hours invested in Twitter engagement
- Business outcomes generated
- Efficiency improvements over time

## Setting Meaningful Targets

Establish goals based on business objectives:
- **Brand Awareness**: Quality mentions and expertise recognition
- **Lead Generation**: Conversion funnel metrics
- **Partnership Building**: Relationship progression indicators
- **Customer Support**: Response quality and resolution rates

## Tools for Tracking What Matters

Use analytics tools that focus on:
- Conversation quality analysis
- Relationship mapping
- Business outcome attribution
- Time investment tracking

## The EngageBot Advantage

EngageBot provides advanced analytics that track:
- Response relevance scores
- Relationship building progression
- Time saved through automation
- Business impact attribution

## Optimization Strategies

Based on meaningful metrics:
1. **Identify High-Value Topics**: Focus on conversations that generate business results
2. **Refine Targeting**: Engage with accounts most likely to become customers or partners
3. **Improve Response Quality**: Use metrics to enhance AI training and response generation
4. **Time Allocation**: Invest saved time in high-ROI business activities

---

*Discover how EngageBot helps entrepreneurs track metrics that actually drive business growth.*
        `,
        excerpt: "Beyond likes and retweets: discover the key metrics successful entrepreneurs track to measure real Twitter engagement success...",
        category: "Best Practices",
        author: "David Thompson",
        imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        published: true,
        createdAt: new Date("2023-12-10"),
        updatedAt: new Date("2023-12-10"),
      }
    ];

    samplePosts.forEach(post => {
      this.blogPosts.set(post.id, post);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getAllBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values()).sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  async getPublishedBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values())
      .filter(post => post.published)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  async getBlogPost(id: string): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    return Array.from(this.blogPosts.values()).find(post => post.slug === slug);
  }

  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const id = randomUUID();
    const now = new Date();
    const post: BlogPost = {
      ...insertPost,
      id,
      createdAt: now,
      updatedAt: now,
    };
    this.blogPosts.set(id, post);
    return post;
  }

  async updateBlogPost(id: string, updatePost: UpdateBlogPost): Promise<BlogPost | undefined> {
    const existingPost = this.blogPosts.get(id);
    if (!existingPost) {
      return undefined;
    }

    const updatedPost: BlogPost = {
      ...existingPost,
      ...updatePost,
      updatedAt: new Date(),
    };
    this.blogPosts.set(id, updatedPost);
    return updatedPost;
  }

  async deleteBlogPost(id: string): Promise<boolean> {
    return this.blogPosts.delete(id);
  }

  async createTrialRequest(insertRequest: InsertTrialRequest): Promise<TrialRequest> {
    const id = randomUUID();
    const now = new Date();
    const request: TrialRequest = {
      ...insertRequest,
      id,
      createdAt: now,
    };
    this.trialRequests.set(id, request);
    return request;
  }

  async getAllTrialRequests(): Promise<TrialRequest[]> {
    return Array.from(this.trialRequests.values()).sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }
}

// Database storage implementation
export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async getAllBlogPosts(): Promise<BlogPost[]> {
    const posts = await db.select().from(blogPosts).orderBy(desc(blogPosts.createdAt));
    return posts.map(post => ({
      ...post,
      createdAt: post.createdAt || new Date(),
      updatedAt: post.updatedAt || new Date(),
      published: post.published || false,
      imageUrl: post.imageUrl || undefined
    }));
  }

  async getPublishedBlogPosts(): Promise<BlogPost[]> {
    const posts = await db
      .select()
      .from(blogPosts)
      .where(eq(blogPosts.published, true))
      .orderBy(desc(blogPosts.createdAt));
    return posts.map(post => ({
      ...post,
      createdAt: post.createdAt || new Date(),
      updatedAt: post.updatedAt || new Date(),
      published: post.published || false,
      imageUrl: post.imageUrl || undefined
    }));
  }

  async getBlogPost(id: string): Promise<BlogPost | undefined> {
    const [post] = await db.select().from(blogPosts).where(eq(blogPosts.id, id));
    if (!post) return undefined;
    return {
      ...post,
      createdAt: post.createdAt || new Date(),
      updatedAt: post.updatedAt || new Date(),
      published: post.published || false,
      imageUrl: post.imageUrl || undefined
    };
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    const [post] = await db.select().from(blogPosts).where(eq(blogPosts.slug, slug));
    if (!post) return undefined;
    return {
      ...post,
      createdAt: post.createdAt || new Date(),
      updatedAt: post.updatedAt || new Date(),
      published: post.published || false,
      imageUrl: post.imageUrl || undefined
    };
  }

  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const [post] = await db
      .insert(blogPosts)
      .values({
        ...insertPost,
        imageUrl: insertPost.imageUrl || null,
        published: insertPost.published || false
      })
      .returning();
    return {
      ...post,
      createdAt: post.createdAt || new Date(),
      updatedAt: post.updatedAt || new Date(),
      published: post.published || false,
      imageUrl: post.imageUrl || undefined
    };
  }

  async updateBlogPost(id: string, updatePost: UpdateBlogPost): Promise<BlogPost | undefined> {
    const [post] = await db
      .update(blogPosts)
      .set({ 
        ...updatePost, 
        updatedAt: new Date(),
        imageUrl: updatePost.imageUrl !== undefined ? updatePost.imageUrl || null : undefined
      })
      .where(eq(blogPosts.id, id))
      .returning();
    if (!post) return undefined;
    return {
      ...post,
      createdAt: post.createdAt || new Date(),
      updatedAt: post.updatedAt || new Date(),
      published: post.published || false,
      imageUrl: post.imageUrl || undefined
    };
  }

  async deleteBlogPost(id: string): Promise<boolean> {
    const result = await db.delete(blogPosts).where(eq(blogPosts.id, id));
    return (result.rowCount || 0) > 0;
  }

  async createTrialRequest(insertRequest: InsertTrialRequest): Promise<TrialRequest> {
    const [request] = await db
      .insert(trialRequests)
      .values({
        ...insertRequest,
        company: insertRequest.company || null,
        twitterHandle: insertRequest.twitterHandle || null,
        message: insertRequest.message || null
      })
      .returning();
    return {
      ...request,
      createdAt: request.createdAt || new Date(),
      company: request.company || undefined,
      twitterHandle: request.twitterHandle || undefined,
      message: request.message || undefined
    };
  }

  async getAllTrialRequests(): Promise<TrialRequest[]> {
    const requests = await db.select().from(trialRequests).orderBy(desc(trialRequests.createdAt));
    return requests.map(request => ({
      ...request,
      createdAt: request.createdAt || new Date(),
      company: request.company || undefined,
      twitterHandle: request.twitterHandle || undefined,
      message: request.message || undefined
    }));
  }
}

export const storage = new DatabaseStorage();
