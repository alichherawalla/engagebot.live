import { motion } from "framer-motion";

export default function SolutionSection() {
  const steps = [
    {
      number: "1",
      title: "Upload Your Knowledge Base",
      description: "Import PDFs, documents, and URLs containing your expertise. EngageBot learns your knowledge to create contextual responses.",
      colorClass: "bg-brand-blue"
    },
    {
      number: "2",
      title: "Train Your Brand Voice",
      description: "AI analyzes your communication style and tone from existing content to maintain authentic engagement.",
      colorClass: "bg-brand-green"
    },
    {
      number: "3",
      title: "Discover Relevant Conversations",
      description: "Smart discovery engine finds engagement opportunities in conversations where your expertise adds value.",
      colorClass: "bg-purple-600"
    },
    {
      number: "4",
  title: "Review & Approve Drafts",
  description: "EngageBot drafts personalized, expert-level responses in your voice for your approval.",
      colorClass: "bg-blue-500"
    }
  ];

  return (
    <section className="py-20 bg-slate-50" data-testid="solution-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6" data-testid="solution-title">
            How <span className="text-brand-green">EngageBot</span> Works
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto" data-testid="solution-description">
            Four simple steps: teach your voice, discover conversations, and get AI-drafted replies ready for your approval.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=225"
              alt="Professional business networking and collaboration"
              className="rounded-2xl shadow-lg w-full h-auto"
              data-testid="solution-image"
            />
          </motion.div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                data-testid={`solution-step-${index}`}
              >
                <div className={`w-12 h-12 ${step.colorClass} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white font-bold text-lg">{step.number}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2" data-testid={`solution-step-title-${index}`}>
                    {step.title}
                  </h3>
                  <p className="text-slate-600" data-testid={`solution-step-description-${index}`}>
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
