import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { insertTrialRequestSchema, type InsertTrialRequest } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

interface TrialRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TrialRequestModal({ isOpen, onClose }: TrialRequestModalProps) {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<InsertTrialRequest>({
    resolver: zodResolver(insertTrialRequestSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      twitterHandle: "",
      message: "",
    },
  });

  const createTrialRequestMutation = useMutation({
    mutationFn: async (data: InsertTrialRequest) => {
      const response = await fetch("/api/trial-requests", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error("Failed to send trial request");
      }
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Trial Request Sent!",
        description: "We'll get back to you within 24 hours to set up your early access.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send trial request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertTrialRequest) => {
    createTrialRequestMutation.mutate(data);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    form.reset();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" data-testid="trial-request-modal">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-slate-900" data-testid="modal-title">
              {isSubmitted ? "Request Sent!" : "Get Early Access"}
            </h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClose}
              data-testid="modal-close"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {isSubmitted ? (
            <div className="text-center py-8" data-testid="success-message">
              <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Thank you!</h3>
              <p className="text-slate-600 mb-6">
                We've received your early access request. Our team will contact you within 24 hours to set up your access.
              </p>
              <Button onClick={handleClose} className="bg-brand-green hover:bg-brand-green-light text-white">
                Got it
              </Button>
            </div>
          ) : (
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" data-testid="trial-request-form">
              <div>
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  {...form.register("name")}
                  placeholder="Your full name"
                  data-testid="input-name"
                />
                {form.formState.errors.name && (
                  <p className="text-red-600 text-sm mt-1">{form.formState.errors.name.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  {...form.register("email")}
                  placeholder="your@email.com"
                  data-testid="input-email"
                />
                {form.formState.errors.email && (
                  <p className="text-red-600 text-sm mt-1">{form.formState.errors.email.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  {...form.register("company")}
                  placeholder="Your company name"
                  data-testid="input-company"
                />
              </div>

              <div>
                <Label htmlFor="twitterHandle">Twitter Handle</Label>
                <Input
                  id="twitterHandle"
                  {...form.register("twitterHandle")}
                  placeholder="@yourusername"
                  data-testid="input-twitter"
                />
              </div>

              <div>
                <Label htmlFor="message">Tell us about your goals</Label>
                <Textarea
                  id="message"
                  {...form.register("message")}
                  placeholder="What do you hope to achieve with EngageBot?"
                  className="min-h-[80px]"
                  data-testid="input-message"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleClose}
                  className="flex-1"
                  data-testid="button-cancel"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={createTrialRequestMutation.isPending}
                  className="flex-1 bg-brand-green hover:bg-brand-green-light text-white"
                  data-testid="button-submit"
                >
                  {createTrialRequestMutation.isPending ? "Sending..." : "Send Request"}
                </Button>
              </div>

              <p className="text-xs text-slate-500 text-center">
                By submitting, you agree to our terms and privacy policy. No credit card required.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}