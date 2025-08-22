import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Calendar, User, Mail, Building, MessageSquare, Twitter } from "lucide-react";
import SEOHead from "@/components/seo-head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import type { TrialRequest } from "@shared/schema";

export default function TrialRequests() {
  const { data: requests, isLoading } = useQuery<TrialRequest[]>({
    queryKey: ['/api/trial-requests'],
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <SEOHead
        title="Trial Requests - EngageBot Admin"
        description="View and manage trial requests from potential customers"
        canonical="/trial-requests"
      />
      
      <Navbar />
      
      <main className="py-20" data-testid="trial-requests-page">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-slate-900 mb-6" data-testid="trial-requests-title">
              Trial Requests
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto" data-testid="trial-requests-description">
              Manage incoming trial requests from potential customers
            </p>
          </motion.div>

          {isLoading ? (
            <div className="grid gap-6" data-testid="trial-requests-loading">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-lg shadow-md p-6 animate-pulse">
                  <div className="h-6 bg-slate-200 rounded mb-4"></div>
                  <div className="h-4 bg-slate-200 rounded mb-2"></div>
                  <div className="h-4 bg-slate-200 rounded w-2/3"></div>
                </div>
              ))}
            </div>
          ) : requests && requests.length > 0 ? (
            <div className="grid gap-6" data-testid="trial-requests-list">
              {requests.map((request, index) => (
                <motion.div
                  key={request.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  data-testid={`trial-request-${index}`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex items-center" data-testid={`request-name-${index}`}>
                          <User className="h-5 w-5 mr-2 text-slate-500" />
                          <span className="font-semibold text-slate-900">{request.name}</span>
                        </div>
                        <Badge variant="secondary" data-testid={`request-date-${index}`}>
                          {request.createdAt ? new Date(request.createdAt).toLocaleDateString() : 'No date'}
                        </Badge>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center" data-testid={`request-email-${index}`}>
                          <Mail className="h-4 w-4 mr-2 text-slate-500" />
                          <span className="text-slate-700">{request.email}</span>
                        </div>
                        
                        {request.company && (
                          <div className="flex items-center" data-testid={`request-company-${index}`}>
                            <Building className="h-4 w-4 mr-2 text-slate-500" />
                            <span className="text-slate-700">{request.company}</span>
                          </div>
                        )}
                        
                        {request.twitterHandle && (
                          <div className="flex items-center" data-testid={`request-twitter-${index}`}>
                            <Twitter className="h-4 w-4 mr-2 text-slate-500" />
                            <span className="text-slate-700">{request.twitterHandle}</span>
                          </div>
                        )}
                        
                        <div className="flex items-center" data-testid={`request-time-${index}`}>
                          <Calendar className="h-4 w-4 mr-2 text-slate-500" />
                          <span className="text-slate-700">
                            {request.createdAt ? new Date(request.createdAt).toLocaleString() : 'No timestamp'}
                          </span>
                        </div>
                      </div>
                      
                      {request.message && (
                        <div className="mt-4" data-testid={`request-message-${index}`}>
                          <div className="flex items-start">
                            <MessageSquare className="h-4 w-4 mr-2 text-slate-500 mt-0.5" />
                            <div>
                              <div className="text-sm font-medium text-slate-700 mb-1">Message:</div>
                              <p className="text-slate-600 text-sm leading-relaxed">{request.message}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg shadow-md" data-testid="no-trial-requests">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-8 w-8 text-slate-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">No trial requests yet</h3>
              <p className="text-slate-600 mb-6">Trial requests will appear here when users submit the form</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}