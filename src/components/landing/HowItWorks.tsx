import { UserPlus, Search, Handshake, Rocket } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      step: "01",
      title: "Create Your Profile",
      description: "Sign up and build your profile. Students showcase their skills, alumni share their expertise.",
    },
    {
      icon: Search,
      step: "02",
      title: "Find Your Match",
      description: "Browse alumni by industry, company, or expertise. Our smart matching helps you find the right mentor.",
    },
    {
      icon: Handshake,
      step: "03",
      title: "Connect & Engage",
      description: "Send connection requests, schedule 1:1 calls, or join group discussions in your interest areas.",
    },
    {
      icon: Rocket,
      step: "04",
      title: "Grow Together",
      description: "Get mentorship, referrals, and opportunities. As you grow, pay it forward by helping others.",
    },
  ];

  return (
    <section id="how-it-works" className="relative py-20 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-muted/20" />

      <div className="container relative mx-auto px-4 md:px-6">
        {/* Section header */}
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="text-h2 md:text-[2.5rem] text-foreground mb-4">
            Get Started in Minutes
          </h2>
          <p className="text-body text-muted-foreground">
            Building meaningful professional relationships has never been easier.
          </p>
        </ScrollReveal>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <ScrollReveal
              key={step.title}
              delay={index * 150}
              variant="fade-up"
              className="relative text-center"
            >
              {/* Connector line (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/40 to-transparent" />
              )}

              {/* Icon */}
              <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-primary shadow-glow mb-6">
                <step.icon className="w-8 h-8 text-white" />
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center">
                  {step.step}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-h3 text-foreground mb-3">{step.title}</h3>
              <p className="text-body text-muted-foreground">{step.description}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
