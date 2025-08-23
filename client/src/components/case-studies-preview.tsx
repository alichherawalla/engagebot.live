import { motion } from "framer-motion";
import { Users, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    slug: "b2b-saas",
    industry: "B2B SaaS",
    results: { followers: { before: 890, after: 3200 }, engagement: { before: "1.2%", after: "4.8%" } },
    quote:
      "We went from invisible to recognized thought leaders. The AI-powered responses felt authentic and started real business conversations.",
  },
  {
    slug: "sustainability-consulting",
    industry: "Sustainability Consulting",
    results: { followers: { before: 1200, after: 4100 }, engagement: { before: "0.9%", after: "3.6%" } },
    quote:
      "We consistently joined the right conversations. Multiple enterprise decision-makers reached out after seeing our presence.",
  },
  {
    slug: "data-science",
    industry: "Data Science",
    results: { followers: { before: 650, after: 2800 }, engagement: { before: "1.8%", after: "5.2%" } },
    quote:
      "EngageBot captured our technical tone perfectly and helped us win enterprise opportunities through Twitter engagement.",
  },
];

export default function CaseStudiesPreview() {
  return (
    <section className="py-20 bg-white" data-testid="case-studies-preview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Customer Case Studies</h2>
          <p className="text-lg text-slate-600 mt-3">Real results from anonymized companies across industries.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => {
            const followerGrowth = Math.round(
              ((study.results.followers.after - study.results.followers.before) / study.results.followers.before) * 100
            );
            return (
              <motion.a
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className="block bg-slate-50 hover:bg-slate-100 transition-colors rounded-2xl p-6 border border-slate-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-brand-purple/10 text-brand-purple p-3 rounded-xl mr-3">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">A {study.industry} company</h3>
                    <p className="text-slate-500 text-sm">Case Study</p>
                  </div>
                </div>
                <blockquote className="text-slate-700 italic mb-4">“{study.quote}”</blockquote>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-slate-600">
                    <TrendingUp className="h-4 w-4 text-brand-green mr-2" />
                    <span>
                      Followers: {study.results.followers.before.toLocaleString()} → {study.results.followers.after.toLocaleString()} (+{followerGrowth}%)
                    </span>
                  </div>
                  <div className="text-brand-purple text-sm font-medium inline-flex items-center">
                    Read case study <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <a href="/case-studies">
            <Button variant="outline" className="border-brand-purple text-brand-purple hover:bg-slate-50">
              View all case studies
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
