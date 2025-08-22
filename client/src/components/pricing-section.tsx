import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import TrialRequestModal from "@/components/trial-request-modal";

export default function PricingSection() {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  
  const plans = [
    {
      name: "Starter",
      price: "$49",
      description: "Perfect for individual entrepreneurs",
      features: [
        "50 AI responses per day",
        "Basic knowledge base (5 docs)",
        "Brand voice training",
        "Basic analytics",
        "Email support"
      ],
      cta: "Get Early Access",
      popular: false
    },
    {
      name: "Professional",
      price: "$149",
      description: "Best for growing businesses",
      features: [
        "200 AI responses per day",
        "Advanced knowledge base (25 docs)",
        "Advanced brand voice training",
        "Content calendar",
        "Advanced analytics & insights",
        "Priority support"
      ],
      cta: "Get Early Access",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      description: "For teams and agencies",
      features: [
        "Unlimited AI responses",
        "Unlimited knowledge base",
        "Team collaboration",
        "Custom integrations",
        "White-label options",
        "Dedicated account manager"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white" data-testid="pricing-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6" data-testid="pricing-title">
            Simple, <span className="text-brand-green">Transparent</span> Pricing
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto" data-testid="pricing-description">
            Choose the plan that fits your engagement needs. Get early access today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`rounded-2xl p-8 relative ${
                plan.popular 
                  ? "gradient-hero text-white transform scale-105" 
                  : "bg-slate-50"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              data-testid={`pricing-plan-${index}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-brand-green text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className={`text-xl font-semibold mb-2 ${plan.popular ? 'text-white' : 'text-slate-900'}`} data-testid={`plan-name-${index}`}>
                  {plan.name}
                </h3>
                <div className={`text-4xl font-bold mb-1 ${plan.popular ? 'text-white' : 'text-slate-900'}`} data-testid={`plan-price-${index}`}>
                  {plan.price}
                </div>
                <div className={`${plan.popular ? 'text-blue-100' : 'text-slate-600'}`} data-testid={`plan-period-${index}`}>
                  per month
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3" data-testid={`plan-feature-${index}-${featureIndex}`}>
                    <Check className={`h-5 w-5 ${plan.popular ? 'text-brand-green-light' : 'text-brand-green'}`} />
                    <span className={plan.popular ? 'text-white' : 'text-slate-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <Button
                onClick={() => {
                  if (plan.cta === "Contact Sales") {
                    // For enterprise, could open a different modal or redirect
                    window.location.href = "mailto:sales@engagebot.com";
                  } else {
                    setIsTrialModalOpen(true);
                  }
                }}
                className={`w-full py-3 font-semibold transition-colors ${
                  plan.popular
                    ? "bg-brand-green hover:bg-brand-green-light text-white"
                    : "bg-slate-900 hover:bg-slate-800 text-white"
                }`}
                data-testid={`plan-cta-${index}`}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-600" data-testid="pricing-disclaimer">
            All plans include early access. No credit card required.
          </p>
        </motion.div>
      </div>
      
      <TrialRequestModal 
        isOpen={isTrialModalOpen} 
        onClose={() => setIsTrialModalOpen(false)} 
      />
    </section>
  );
}
