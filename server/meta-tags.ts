import { IStorage } from "./storage";

export interface MetaData {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  keywords?: string;
}

export async function generateMetaTags(url: string, storage: IStorage): Promise<MetaData> {
  // Default meta data for the site
  const defaultMeta: MetaData = {
    title: "EngageBot - AI-Powered Twitter Engagement Automation",
    description: "Transform Twitter engagement with AI automation. EngageBot uses Claude 4.0 to discover conversations, generate authentic responses, and build meaningful relationships at scale.",
    ogTitle: "EngageBot - AI-Powered Twitter Engagement Automation",
    ogDescription: "Transform Twitter engagement with AI automation. EngageBot uses Claude 4.0 to discover conversations, generate authentic responses, and build meaningful relationships at scale.",
    ogImage: "https://engagebot.live/favicon.webp",
    ogUrl: "https://engagebot.live",
    twitterCard: "summary_large_image",
    keywords: "Twitter automation, AI engagement, social media automation, Twitter bot, engagement automation, social media marketing"
  };

  // Handle blog routes
  if (url.includes('/blog/')) {
    const slugMatch = url.match(/\/blog\/([^\/\?#]+)/);
    if (slugMatch) {
      const slug = slugMatch[1];
      try {
        const post = await storage.getBlogPostBySlug(slug);
        if (post) {
          return {
            title: `${post.title} | EngageBot Blog`,
            description: post.excerpt || post.content.substring(0, 160).replace(/#/g, '').trim() + "...",
            ogTitle: post.title,
            ogDescription: post.excerpt || post.content.substring(0, 160).replace(/#/g, '').trim() + "...",
            ogImage: post.imageUrl ? `https://engagebot.live${post.imageUrl}` : defaultMeta.ogImage,
            ogUrl: `https://engagebot.live/blog/${slug}`,
            twitterCard: "summary_large_image",
            keywords: getKeywordsFromContent(post.title, post.content, post.category)
          };
        }
      } catch (error) {
        console.error('Error fetching blog post for meta tags:', error);
      }
    }
    
    // Blog listing page
    return {
      title: "Twitter Automation Blog | EngageBot Insights & Strategies",
      description: "Discover advanced Twitter automation strategies, AI engagement techniques, and social media growth tactics. Expert insights for scaling your Twitter presence with EngageBot.",
      ogTitle: "Twitter Automation Blog | EngageBot Insights & Strategies", 
      ogDescription: "Discover advanced Twitter automation strategies, AI engagement techniques, and social media growth tactics. Expert insights for scaling your Twitter presence with EngageBot.",
      ogImage: defaultMeta.ogImage,
      ogUrl: "https://engagebot.live/blog",
      twitterCard: "summary_large_image",
      keywords: "Twitter automation blog, social media strategies, AI engagement, Twitter growth, automation techniques, social media marketing"
    };
  }

  // Handle case studies page
  if (url.includes('/case-studies')) {
    return {
      title: "Customer Success Stories & Case Studies | EngageBot",
      description: "Discover how businesses across industries use EngageBot to build authority, generate leads, and grow their Twitter presence. Real results from real companies using AI-powered engagement automation.",
      ogTitle: "EngageBot Customer Success Stories & Case Studies",
      ogDescription: "See real results from companies using EngageBot AI Twitter automation. Case studies showing increased followers, engagement rates, and lead generation across multiple industries.",
      ogImage: defaultMeta.ogImage,
      ogUrl: "https://engagebot.live/case-studies",
      twitterCard: "summary_large_image",
      keywords: "EngageBot case studies, Twitter automation success stories, social media ROI, B2B lead generation, customer testimonials, AI engagement results"
    };
  }

  // Handle comparison pages
  if (url.includes('/vs-buffer')) {
    return {
      title: "EngageBot vs Buffer: AI Engagement vs Content Scheduling | 2025 Comparison",
      description: "Compare EngageBot's AI-powered Twitter engagement with Buffer's content scheduling. See why authentic conversation automation outperforms basic posting tools for building authority and generating leads.",
      ogTitle: "EngageBot vs Buffer - AI Engagement vs Content Scheduling",
      ogDescription: "Detailed comparison: EngageBot's intelligent Twitter engagement automation vs Buffer's content scheduling. Discover which tool drives better ROI for B2B growth and thought leadership.",
      ogImage: defaultMeta.ogImage,
      ogUrl: "https://engagebot.live/vs-buffer",
      twitterCard: "summary_large_image",
      keywords: "EngageBot vs Buffer, Twitter automation comparison, AI engagement vs scheduling, social media tools comparison, Buffer alternative"
    };
  }

  if (url.includes('/vs-plannable')) {
    return {
      title: "EngageBot vs Plannable: AI Engagement vs Social Media Planning | 2025",
      description: "Compare EngageBot's AI-powered engagement automation with Plannable's social media planning tools. See how intelligent conversation participation beats content planning for Twitter growth.",
      ogTitle: "EngageBot vs Plannable - AI Engagement vs Social Planning",
      ogDescription: "EngageBot's intelligent Twitter engagement vs Plannable's social media planning. Learn which approach delivers better results for building authority and generating qualified leads.",
      ogImage: defaultMeta.ogImage,
      ogUrl: "https://engagebot.live/vs-plannable",
      twitterCard: "summary_large_image",
      keywords: "EngageBot vs Plannable, social media automation comparison, AI engagement vs planning, Twitter growth tools, Plannable alternative"
    };
  }

  if (url.includes('/vs-sproutsocial')) {
    return {
      title: "EngageBot vs Sprout Social: AI Engagement vs Enterprise Social Tools | 2025",
      description: "Compare EngageBot's AI-powered Twitter engagement with Sprout Social's enterprise social media management. Discover why intelligent engagement outperforms traditional social tools for B2B growth.",
      ogTitle: "EngageBot vs Sprout Social - AI Engagement vs Enterprise Tools",
      ogDescription: "Detailed comparison: EngageBot's intelligent Twitter automation vs Sprout Social's enterprise features. See which platform delivers better ROI for B2B companies and startups.",
      ogImage: defaultMeta.ogImage,
      ogUrl: "https://engagebot.live/vs-sproutsocial",
      twitterCard: "summary_large_image",
      keywords: "EngageBot vs Sprout Social, enterprise social media tools, AI engagement vs traditional tools, B2B social media automation, Sprout Social alternative"
    };
  }

  if (url.includes('/vs-hypefury')) {
    return {
      title: "EngageBot vs Hypefury: AI Engagement vs Growth Automation | 2025",
      description: "Compare EngageBot's intelligent Twitter engagement with Hypefury's growth automation. Learn why authentic AI-powered conversations beat mechanical growth hacks for sustainable authority building.",
      ogTitle: "EngageBot vs Hypefury - AI Engagement vs Growth Automation", 
      ogDescription: "EngageBot's intelligent engagement automation vs Hypefury's growth hacks. Discover which approach builds real authority and generates quality leads for long-term Twitter success.",
      ogImage: defaultMeta.ogImage,
      ogUrl: "https://engagebot.live/vs-hypefury",
      twitterCard: "summary_large_image",
      keywords: "EngageBot vs Hypefury, Twitter growth automation, AI engagement vs growth hacks, authentic automation vs mechanical tools, Hypefury alternative"
    };
  }

  // Handle specific pages
  if (url.includes('/pricing')) {
    return {
      title: "Pricing - EngageBot AI Twitter Automation",
      description: "Choose the perfect EngageBot plan for your Twitter automation needs. Flexible pricing for individuals, teams, and enterprises. Start your free trial today.",
      ogTitle: "EngageBot Pricing - AI Twitter Automation Plans",
      ogDescription: "Choose the perfect EngageBot plan for your Twitter automation needs. Flexible pricing for individuals, teams, and enterprises. Start your free trial today.",
      ogImage: defaultMeta.ogImage,
      ogUrl: "https://engagebot.live/pricing",
      twitterCard: "summary_large_image", 
      keywords: "EngageBot pricing, Twitter automation pricing, social media automation cost, AI engagement plans"
    };
  }

  if (url.includes('/features')) {
    return {
      title: "Features - EngageBot AI Twitter Automation Platform",
      description: "Explore EngageBot's powerful AI features: smart conversation discovery, authentic response generation, analytics, and more. Scale your Twitter engagement effortlessly.",
      ogTitle: "EngageBot Features - AI Twitter Automation Platform",
      ogDescription: "Explore EngageBot's powerful AI features: smart conversation discovery, authentic response generation, analytics, and more. Scale your Twitter engagement effortlessly.",
      ogImage: defaultMeta.ogImage,
      ogUrl: "https://engagebot.live/features",
      twitterCard: "summary_large_image",
      keywords: "Twitter automation features, AI engagement tools, social media automation, Twitter bot features, engagement automation"
    };
  }

  // Return default meta for home page and other routes
  return defaultMeta;
}

function getKeywordsFromContent(title: string, content: string, category: string): string {
  const baseKeywords = "Twitter automation, AI engagement, social media automation";
  
  // Extract potential keywords from title and category
  const titleWords = title.toLowerCase()
    .split(' ')
    .filter(word => word.length > 3 && !['that', 'with', 'your', 'from', 'this', 'they', 'have', 'will', 'been', 'than'].includes(word));
  
  const categoryKeywords = category.toLowerCase().replace(/[&\-]/g, ' ');
  
  // Combine and format keywords
  const keywords = [baseKeywords, ...titleWords.slice(0, 5), categoryKeywords]
    .join(', ')
    .replace(/\s+/g, ' ')
    .trim();
    
  return keywords.length > 160 ? keywords.substring(0, 157) + '...' : keywords;
}

export function injectMetaTags(html: string, metaData: MetaData): string {
  // Remove existing meta tags that we'll replace
  let updatedHtml = html.replace(/<title>.*?<\/title>/i, `<title>${metaData.title}</title>`);
  updatedHtml = updatedHtml.replace(/<meta name="description".*?>/i, `<meta name="description" content="${escapeHtml(metaData.description)}" />`);
  
  // Add Open Graph and Twitter meta tags
  const newMetaTags = `
    <title>${metaData.title}</title>
    <meta name="description" content="${escapeHtml(metaData.description)}" />
    <meta name="keywords" content="${escapeHtml(metaData.keywords || '')}" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${metaData.ogUrl || ''}" />
    <meta property="og:title" content="${escapeHtml(metaData.ogTitle || metaData.title)}" />
    <meta property="og:description" content="${escapeHtml(metaData.ogDescription || metaData.description)}" />
    <meta property="og:image" content="${metaData.ogImage || ''}" />
    <meta property="og:site_name" content="EngageBot" />
    
    <!-- Twitter -->
    <meta property="twitter:card" content="${metaData.twitterCard || 'summary_large_image'}" />
    <meta property="twitter:url" content="${metaData.ogUrl || ''}" />
    <meta property="twitter:title" content="${escapeHtml(metaData.ogTitle || metaData.title)}" />
    <meta property="twitter:description" content="${escapeHtml(metaData.ogDescription || metaData.description)}" />
    <meta property="twitter:image" content="${metaData.ogImage || ''}" />
    
    <!-- Additional SEO -->
    <meta name="robots" content="index, follow" />
    <meta name="author" content="EngageBot Team" />
    <link rel="canonical" href="${metaData.ogUrl || ''}" />`;
  
  // Replace the head section
  updatedHtml = updatedHtml.replace(/<title>.*?<\/title>/i, newMetaTags);
  
  return updatedHtml;
}

function escapeHtml(text: string): string {
  const div = { innerHTML: '', textContent: text };
  return div.innerHTML || text.replace(/[&<>"']/g, function(m) {
    return {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[m] || m;
  });
}