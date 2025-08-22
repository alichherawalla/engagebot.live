import { Brain, Mic, SearchCheck, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: "AI Knowledge Base",
      description: "Upload your expertise through PDFs, documents, and URLs. Our AI ingests and understands your knowledge to create contextual, expert-level responses.",
      details: [
        "Support for PDFs, Word docs, and web URLs",
        "Automatic content extraction and indexing",
        "Contextual knowledge retrieval"
      ],
      color: "brand-blue"
    },
    {
      icon: Mic,
      title: "Brand Voice Intelligence",
      description: "AI learns your communication style, tone, and personality from your existing content to ensure every response sounds authentically like you.",
      details: [
        "Voice analysis from existing tweets",
        "Tone and style consistency",
        "95% brand voice accuracy"
      ],
      color: "brand-green"
    },
    {
      icon: SearchCheck,
      title: "Smart Discovery Engine",
      description: "Find relevant conversations where your expertise can add value. Targets accounts with 200-2000 followers for optimal engagement.",
      details: [
        "Keyword and topic monitoring",
        "Optimal follower range targeting",
        "Real-time conversation discovery"
      ],
      color: "brand-purple"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white" data-testid="features-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6" data-testid="features-title">
            Powerful Features for <span className="text-brand-purple">Authentic</span> Engagement
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto" data-testid="features-description">
            Everything you need to scale your Twitter presence while maintaining your expertise and authenticity.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-slate-50 p-6 sm:p-8 rounded-2xl hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              data-testid={`feature-card-${index}`}
            >
              <div className={`w-16 h-16 bg-${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4" data-testid={`feature-title-${index}`}>
                {feature.title}
              </h3>
              <p className="text-slate-600 mb-4" data-testid={`feature-description-${index}`}>
                {feature.description}
              </p>
              <ul className="text-sm text-slate-500 space-y-2">
                {feature.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-start" data-testid={`feature-detail-${index}-${detailIndex}`}>
                    <span className="mr-2">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6" data-testid="feature-highlight-1-title">
              Intelligent Comment Generation
            </h3>
            <p className="text-lg text-slate-600 mb-6" data-testid="feature-highlight-1-description">
              Every response references your expertise and maintains your brand voice. Claude 4.0 ensures authentic, contextual engagement that builds meaningful professional relationships.
            </p>
            <div className="space-y-4">
              {[
                "Contextual responses based on your knowledge",
                "Authentic tone matching your brand voice",
                "Expert-level insights in every comment"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3" data-testid={`feature-benefit-1-${index}`}>
                  <Check className="h-5 w-5 text-brand-green" />
                  <span className="text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Social media engagement analytics and metrics dashboard"
              className="rounded-2xl shadow-lg w-full h-auto"
              data-testid="feature-highlight-1-image"
            />
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6" data-testid="feature-highlight-2-title">
              Content Calendar & Analytics
            </h3>
            <p className="text-lg text-slate-600 mb-6" data-testid="feature-highlight-2-description">
              AI-generated tweet calendar based on trending topics and your expertise, plus real-time analytics to track engagement performance and relationship building.
            </p>
            <div className="space-y-4">
              {[
                "AI-powered content suggestions",
                "Performance tracking and insights",
                "Relationship building metrics"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3" data-testid={`feature-benefit-2-${index}`}>
                  <Check className="h-5 w-5 text-brand-green" />
                  <span className="text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            className="lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Tech entrepreneurs analyzing business analytics and growth metrics"
              className="rounded-2xl shadow-lg w-full h-auto"
              data-testid="feature-highlight-2-image"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
