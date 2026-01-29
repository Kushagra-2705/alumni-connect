import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const CTASection = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-cta opacity-90" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[120px]" />

      <div className="container relative mx-auto px-4 md:px-6 text-center">
        <ScrollReveal variant="scale">
          <h2 className="text-h2 md:text-[3rem] text-white mb-6 max-w-3xl mx-auto leading-tight">
            Ready to Unlock Your Network's Full Potential?
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto">
            Join thousands of students and alumni who are building meaningful connections 
            and advancing their careers together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="xl" 
              className="bg-white text-primary font-semibold hover:bg-white/90 rounded-full shadow-elevated group"
            >
              Join AlumniHub Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="xl" 
              variant="outline" 
              className="border-2 border-white/30 text-white hover:bg-white/10 rounded-full"
            >
              Schedule a Demo
            </Button>
          </div>

          <p className="mt-6 text-sm text-white/60">
            Free to join • No credit card required • Cancel anytime
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;
