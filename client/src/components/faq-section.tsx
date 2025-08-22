import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does EngageBot ensure my responses sound authentic?",
      answer: "EngageBot uses advanced AI to analyze your existing content, communication style, and brand voice. Our Claude 4.0 integration learns your unique tone, vocabulary, and expertise patterns to generate responses that consistently match your authentic voice with 95% accuracy."
    },
    {
      question: "Can Twitter detect that my responses are AI-generated?",
      answer: "Our AI generates human-like responses that are indistinguishable from manually written content. By incorporating your knowledge base and brand voice, responses appear naturally authored. We also include randomization and contextual variations to ensure authenticity."
    },
    {
      question: "What kind of content can I upload to the knowledge base?",
      answer: "You can upload PDFs, Word documents, blog posts via URLs, your website content, case studies, whitepapers, and any text-based content that represents your expertise. Our AI processes and indexes this content to generate contextually relevant responses."
    },
    {
      question: "How does the conversation discovery engine work?",
      answer: "Our smart discovery engine monitors Twitter for conversations related to your expertise using keyword tracking, topic analysis, and engagement patterns. It specifically targets accounts with 200-2000 followers for optimal engagement opportunities and relationship building potential."
    },
    {
      question: "Is my data secure and private?",
      answer: "Yes, we use enterprise-grade security with end-to-end encryption for all data. Your knowledge base content, brand voice data, and engagement patterns are stored securely and never shared with third parties. We're SOC 2 compliant and follow strict data privacy protocols."
    },
    {
      question: "Can I review responses before they're posted?",
      answer: "Absolutely. EngageBot can operate in manual approval mode where all responses are queued for your review before posting. You can also set up automatic posting with confidence filters, or use a hybrid approach where only high-confidence responses post automatically."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white" data-testid="faq-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6" data-testid="faq-title">
            Frequently Asked <span className="text-brand-green">Questions</span>
          </h2>
          <p className="text-xl text-slate-600" data-testid="faq-description">
            Common questions about EngageBot and AI-powered Twitter engagement.
          </p>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-slate-200 rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              data-testid={`faq-item-${index}`}
            >
              <button
                className="w-full px-6 py-4 text-left bg-slate-50 hover:bg-slate-100 transition-colors flex items-center justify-between"
                onClick={() => toggleFAQ(index)}
                data-testid={`faq-question-${index}`}
              >
                <span className="font-semibold text-slate-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-slate-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-slate-500" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 py-4 bg-white"
                    data-testid={`faq-answer-${index}`}
                  >
                    <p className="text-slate-600">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
