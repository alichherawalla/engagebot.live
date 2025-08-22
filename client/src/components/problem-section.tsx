import { Clock, Bot, Search, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

export default function ProblemSection() {
  const problems = [
    {
      icon: Clock,
      title: "Time Consuming",
      description: "Spending 3-5 hours daily finding and engaging in relevant conversations",
      color: "red"
    },
    {
      icon: Bot,
      title: "Generic Responses",
      description: "Automated tools create robotic, inauthentic comments that damage reputation",
      color: "orange"
    },
    {
      icon: Search,
      title: "Missed Opportunities",
      description: "Can't monitor all conversations where your expertise could add value",
      color: "yellow"
    },
    {
      icon: VolumeX,
      title: "Inconsistent Voice",
      description: "Maintaining brand voice and expertise across all engagements manually",
      color: "purple"
    }
  ];

  return (
    <section className="py-20 bg-white" data-testid="problem-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6" data-testid="problem-title">
            The Twitter Engagement <span className="text-brand-purple">Problem</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto" data-testid="problem-description">
            Busy professionals struggle to maintain consistent, authentic engagement on Twitter while focusing on their core business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              className="text-center p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              data-testid={`problem-card-${index}`}
            >
              <div className={`w-16 h-16 bg-${problem.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <problem.icon className={`h-8 w-8 text-${problem.color}-600`} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2" data-testid={`problem-title-${index}`}>
                {problem.title}
              </h3>
              <p className="text-slate-600" data-testid={`problem-description-${index}`}>
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
