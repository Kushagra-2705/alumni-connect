import { Users, Briefcase, BookOpen, MessageCircle } from "lucide-react";
import FeatureCard from "./FeatureCard";

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "1:1 Mentorship",
      description: "Get personalized guidance from experienced alumni in your field. Schedule calls, get feedback, and accelerate your growth.",
    },
    {
      icon: Briefcase,
      title: "Referrals & Jobs",
      description: "Access exclusive job opportunities and get referred directly by alumni working at top companies worldwide.",
    },
    {
      icon: BookOpen,
      title: "Knowledge Base",
      description: "Learn from shared experiences, interview tips, and industry insights curated by the alumni community.",
    },
    {
      icon: MessageCircle,
      title: "Community Chat",
      description: "Join topic-based groups, ask questions, and engage with a supportive network of peers and mentors.",
    },
  ];

  return (
    <section id="features" className="relative py-20 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="text-h2 md:text-[2.5rem] text-foreground mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-body text-muted-foreground">
            From finding mentors to landing dream jobs, we've built all the tools 
            you need to leverage your alumni network effectively.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
