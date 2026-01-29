import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="group relative h-full p-6 md:p-8 rounded-2xl bg-gradient-card border border-border/50 shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-300">
      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
      
      {/* Icon container */}
      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
        <Icon className="w-7 h-7 text-primary" />
      </div>

      {/* Content */}
      <h3 className="text-h3 text-foreground mb-3">{title}</h3>
      <p className="text-body text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
