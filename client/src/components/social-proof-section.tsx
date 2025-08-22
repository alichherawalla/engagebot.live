import { Star } from "lucide-react";
import { motion } from "framer-motion";

export default function SocialProofSection() {
  const stats = [
    { value: "500+", label: "Active Users" },
    { value: "15k+", label: "Hours Saved" },
    { value: "95%", label: "Voice Consistency" },
    { value: "2.5x", label: "Engagement Growth" }
  ];

  const testimonials = [
    {
      quote: "EngageBot saved me 20+ hours weekly while actually improving my engagement quality. The AI responses feel authentic and showcase my expertise perfectly.",
      author: "Sarah Martinez",
      title: "SaaS Founder, TechFlow",
      initials: "SM",
      color: "brand-blue"
    },
    {
      quote: "The brand voice consistency is incredible. Clients often don't realize my responses are AI-generated because they sound exactly like me.",
      author: "David Thompson",
      title: "Digital Marketing Expert",
      initials: "DT",
      color: "brand-green"
    },
    {
      quote: "Finally, a Twitter automation tool that doesn't make me sound like a robot. My engagement rate tripled while spending 90% less time on Twitter.",
      author: "Alex Chen",
      title: "Startup Founder, BuildAI",
      initials: "AC",
      color: "brand-purple"
    }
  ];

  return (
    <section className="py-20 bg-slate-50" data-testid="social-proof-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6" data-testid="social-proof-title">
            Trusted by <span className="text-brand-green">Successful</span> Entrepreneurs
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto" data-testid="social-proof-description">
            See how EngageBot is helping tech entrepreneurs and startup founders scale their Twitter presence.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              data-testid={`stat-${index}`}
            >
              <div className="text-4xl font-bold text-brand-blue mb-2" data-testid={`stat-value-${index}`}>
                {stat.value}
              </div>
              <div className="text-slate-600" data-testid={`stat-label-${index}`}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              className="bg-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              data-testid={`testimonial-${index}`}
            >
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-slate-700 mb-4" data-testid={`testimonial-quote-${index}`}>
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <div className={`w-10 h-10 bg-${testimonial.color} rounded-full flex items-center justify-center text-white font-semibold mr-3`}>
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-semibold text-slate-900" data-testid={`testimonial-author-${index}`}>
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-slate-600" data-testid={`testimonial-title-${index}`}>
                    {testimonial.title}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
