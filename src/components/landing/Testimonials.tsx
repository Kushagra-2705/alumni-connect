import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Through AlumniHub, I connected with a senior engineer at Google who helped me prepare for my interviews. I got the job!",
      name: "Priya Sharma",
      role: "Software Engineer at Google",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
      initials: "PS",
    },
    {
      quote: "As an alumni, giving back to students has been incredibly rewarding. The platform makes mentoring seamless and impactful.",
      name: "James Wilson",
      role: "VP of Product at Stripe",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      initials: "JW",
    },
    {
      quote: "The referral system helped me land 3 interviews in my first week. The alumni network here is genuinely supportive.",
      name: "Maria Garcia",
      role: "Data Scientist at Meta",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
      initials: "MG",
    },
  ];

  return (
    <section id="community" className="relative py-20 md:py-32">
      <div className="absolute inset-0 bg-background" />
      
      <div className="container relative mx-auto px-4 md:px-6">
        {/* Section header */}
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-h2 md:text-[2.5rem] text-foreground mb-4">
            Loved by Students & Alumni
          </h2>
          <p className="text-body text-muted-foreground">
            See how our community members are building connections and advancing their careers.
          </p>
        </ScrollReveal>

        {/* Testimonial grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal
              key={testimonial.name}
              delay={index * 100}
              variant="fade-up"
            >
              <div className="relative h-full p-6 md:p-8 rounded-2xl bg-gradient-card border border-border/50 shadow-card hover:shadow-elevated transition-all duration-300">
                {/* Quote icon */}
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                
                {/* Quote text */}
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12 border-2 border-primary/30">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
