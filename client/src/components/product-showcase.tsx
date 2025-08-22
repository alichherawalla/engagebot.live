import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoPath from "@assets/ChatGPT Image Aug 22, 2025, 05_03_22 PM_1755863825599.png";

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      id: "dashboard",
      title: "Smart Dashboard",
      description: "Monitor your Twitter engagement and performance in real-time with comprehensive analytics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      mockup: {
        title: "Dashboard Overview",
        stats: [
          { label: "Active Followers", value: "2,847" },
          { label: "Engagement Rate", value: "8.5%" },
          { label: "Weekly Growth", value: "+127" },
          { label: "Response Time", value: "2.3m" }
        ]
      }
    },
    {
      id: "knowledge",
      title: "Knowledge Base",
      description: "Upload your expertise documents and let AI learn from your knowledge to create authentic responses.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      mockup: {
        title: "Knowledge Base Ingestion",
        documents: [
          { name: "Business Strategy Guide.pdf", status: "Ready", date: "2 days ago" },
          { name: "Product Marketing Playbook.docx", status: "Ready", date: "5 days ago" },
          { name: "Customer Success Framework.pdf", status: "Processing", date: "1 hour ago" },
          { name: "Industry Analysis Report.pdf", status: "Ready", date: "1 week ago" }
        ]
      }
    },
    {
      id: "engagement",
      title: "Engagement Hub",
      description: "Discover relevant conversations and generate AI-powered responses that showcase your expertise.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      mockup: {
        title: "Fresh Engagement Opportunities",
        conversations: [
          {
            user: "TechFounder2024",
            content: "Struggling with customer acquisition strategies for our SaaS startup. Any proven frameworks?",
            suggested: "Consider implementing a product-led growth strategy combined with content marketing...",
            score: 92
          },
          {
            user: "StartupAdviser",
            content: "What metrics should early-stage companies focus on for sustainable growth?",
            suggested: "Focus on these key metrics: Customer Acquisition Cost (CAC), Monthly Recurring Revenue...",
            score: 88
          }
        ]
      }
    },
    {
      id: "calendar",
      title: "Content Calendar",
      description: "AI-powered content scheduling and management with performance tracking.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      mockup: {
        title: "Content Calendar",
        scheduled: 35,
        thisWeek: 8,
        published: 127,
        pending: 12,
        posts: [
          {
            date: "Today, 2:45 PM",
            content: "Key insights from our latest customer research study - what drives retention in SaaS businesses",
            status: "scheduled",
            type: "thread"
          },
          {
            date: "Tomorrow, 10:30 AM", 
            content: "5 proven strategies for reducing customer churn in your startup's first year",
            status: "scheduled",
            type: "single"
          }
        ]
      }
    },
    {
      id: "analytics",
      title: "Profile Analysis",
      description: "Deep insights into your Twitter performance and audience engagement patterns.",
      image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      mockup: {
        title: "Profile Analysis",
        profile: {
          handle: "@BusinessExpert",
          followers: 3456,
          following: 1847,
          tweets: 2193,
          joinDate: "March 2019"
        },
        metrics: [
          { label: "Avg. Engagement", value: "7.2%" },
          { label: "Best Time to Post", value: "2:00 PM EST" },
          { label: "Top Content Type", value: "Educational Threads" }
        ]
      }
    },
    {
      id: "settings",
      title: "Brand Voice Training",
      description: "Configure your AI to match your unique communication style and expertise areas.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      mockup: {
        title: "Brand Voice Configuration",
        settings: {
          tone: "Professional, approachable, and educational",
          style: "Conversational with data-driven insights",
          expertise: ["Business Strategy", "SaaS Growth", "Customer Success"],
          avoid: ["Overly promotional language", "Industry jargon without context"]
        }
      }
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50" data-testid="product-showcase">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900" data-testid="showcase-title">
              See
            </h2>
            <img 
              src={logoPath} 
              alt="EngageBot Logo" 
              className="h-12 w-auto"
            />
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              in Action
            </h2>
          </div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto" data-testid="showcase-description">
            Explore the powerful dashboard and features that successful entrepreneurs use to scale their Twitter presence.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4">
            <div className="space-y-2">
              {features.map((feature, index) => (
                <motion.button
                  key={feature.id}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left p-4 rounded-xl transition-all ${
                    activeTab === index
                      ? "bg-brand-blue text-white shadow-lg"
                      : "bg-white text-slate-700 hover:bg-slate-50"
                  }`}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  data-testid={`feature-tab-${index}`}
                >
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className={`text-sm ${activeTab === index ? "text-blue-100" : "text-slate-500"}`}>
                    {feature.description}
                  </p>
                </motion.button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8">
            <motion.div
              key={activeTab}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              data-testid="feature-showcase"
            >
              <div className="bg-slate-100 px-6 py-3 border-b flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 text-center">
                  <span className="text-sm font-medium text-slate-600">
                    {features[activeTab].mockup.title}
                  </span>
                </div>
              </div>

              <div className="p-6">
                {/* Dashboard View */}
                {features[activeTab].id === "dashboard" && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {features[activeTab].mockup.stats?.map((stat, i) => (
                        <div key={i} className="bg-slate-50 p-4 rounded-lg text-center">
                          <div className="text-2xl font-bold text-brand-blue">{stat.value}</div>
                          <div className="text-sm text-slate-600">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    <div className="h-32 bg-gradient-to-r from-brand-blue to-brand-purple rounded-lg flex items-center justify-center">
                      <span className="text-white font-medium">Real-time Analytics Chart</span>
                    </div>
                  </div>
                )}

                {/* Knowledge Base View */}
                {features[activeTab].id === "knowledge" && (
                  <div className="space-y-4">
                    <div className="border-2 border-dashed border-slate-200 rounded-lg p-8 text-center">
                      <div className="text-slate-500">Drag and drop files here, or click to browse</div>
                      <div className="text-sm text-slate-400 mt-2">Supports PDF, TXT files, and website URLs</div>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-medium text-slate-700">Recent Uploads</h4>
                      {features[activeTab].mockup.documents?.map((doc, i) => (
                        <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                          <div>
                            <div className="font-medium text-slate-900">{doc.name}</div>
                            <div className="text-sm text-slate-500">{doc.date}</div>
                          </div>
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            doc.status === "Ready" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                          }`}>
                            {doc.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Engagement Hub View */}
                {features[activeTab].id === "engagement" && (
                  <div className="space-y-4">
                    <div className="text-sm text-slate-600 mb-4">Showing 15 to 20 of 148 opportunities</div>
                    {features[activeTab].mockup.conversations?.map((conv, i) => (
                      <div key={i} className="border border-slate-200 rounded-lg p-4 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-slate-900">@{conv.user}</span>
                          <span className="text-sm font-medium text-brand-green">Score: {conv.score}</span>
                        </div>
                        <p className="text-slate-700 text-sm">{conv.content}</p>
                        <div className="bg-blue-50 p-3 rounded border-l-4 border-brand-blue">
                          <div className="text-xs text-slate-600 mb-1">Suggested Response:</div>
                          <p className="text-sm text-slate-800">{conv.suggested}</p>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" className="bg-brand-blue hover:bg-brand-blue-light text-white">
                            Use Response
                          </Button>
                          <Button size="sm" variant="outline">Generate Alternative</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Calendar View */}
                {features[activeTab].id === "calendar" && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-4 gap-4 text-center">
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="text-2xl font-bold text-brand-blue">{features[activeTab].mockup.scheduled}</div>
                        <div className="text-sm text-slate-600">Total Scheduled</div>
                      </div>
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <div className="text-2xl font-bold text-brand-purple">{features[activeTab].mockup.thisWeek}</div>
                        <div className="text-sm text-slate-600">This Week</div>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <div className="text-2xl font-bold text-brand-green">{features[activeTab].mockup.published}</div>
                        <div className="text-sm text-slate-600">Published</div>
                      </div>
                      <div className="bg-yellow-50 p-3 rounded-lg">
                        <div className="text-2xl font-bold text-yellow-600">{features[activeTab].mockup.pending}</div>
                        <div className="text-sm text-slate-600">Pending</div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-medium text-slate-700">Upcoming Posts</h4>
                      {features[activeTab].mockup.posts?.map((post, i) => (
                        <div key={i} className="flex items-start space-x-3 p-3 bg-slate-50 rounded-lg">
                          <div className="flex-1">
                            <div className="text-sm font-medium text-slate-900">{post.date}</div>
                            <p className="text-sm text-slate-700 mt-1">{post.content}</p>
                          </div>
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            post.status === "scheduled" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-700"
                          }`}>
                            {post.type}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Analytics View */}
                {features[activeTab].id === "analytics" && (
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-lg">
                      <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold text-xl">
                        BE
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">{features[activeTab].mockup.profile?.handle}</div>
                        <div className="text-sm text-slate-600">Expert in Business Strategy & Growth</div>
                        <div className="text-xs text-slate-500">Joined {features[activeTab].mockup.profile?.joinDate}</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-slate-900">{features[activeTab].mockup.profile?.following.toLocaleString()}</div>
                        <div className="text-sm text-slate-600">Following</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-slate-900">{features[activeTab].mockup.profile?.followers.toLocaleString()}</div>
                        <div className="text-sm text-slate-600">Followers</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-slate-900">{features[activeTab].mockup.profile?.tweets.toLocaleString()}</div>
                        <div className="text-sm text-slate-600">Tweets</div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-medium text-slate-700">Key Metrics</h4>
                      {features[activeTab].mockup.metrics?.map((metric, i) => (
                        <div key={i} className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                          <span className="text-slate-700">{metric.label}</span>
                          <span className="font-medium text-brand-blue">{metric.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Settings View */}
                {features[activeTab].id === "settings" && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Tone</label>
                      <div className="p-3 bg-slate-50 rounded-lg text-sm text-slate-700">
                        {features[activeTab].mockup.settings?.tone}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Style</label>
                      <div className="p-3 bg-slate-50 rounded-lg text-sm text-slate-700">
                        {features[activeTab].mockup.settings?.style}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Expertise Areas</label>
                      <div className="flex flex-wrap gap-2">
                        {features[activeTab].mockup.settings?.expertise?.map((area, i) => (
                          <span key={i} className="px-3 py-1 bg-brand-blue text-white text-sm rounded-full">
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Avoid</label>
                      <div className="space-y-2">
                        {features[activeTab].mockup.settings?.avoid?.map((item, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <span className="text-sm text-slate-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-600 mb-6">
            Ready to experience the full power of AI-driven Twitter engagement?
          </p>
          <Button className="bg-brand-green hover:bg-brand-green-light text-white px-8 py-3 text-lg font-semibold">
            Get Early Access
          </Button>
        </motion.div>
      </div>
    </section>
  );
}