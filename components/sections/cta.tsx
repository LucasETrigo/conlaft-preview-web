import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Transform Your Compliance Process?
        </h2>
        <p className="text-lg mb-8 opacity-90">
          Join thousands of companies that trust our platform
        </p>
        <Button size="lg" variant="secondary">
          Start Free Trial <ArrowRight className="ml-2" />
        </Button>
      </div>
    </section>
  );
}