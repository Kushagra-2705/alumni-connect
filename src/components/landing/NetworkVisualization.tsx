import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const NetworkVisualization = () => {
  const avatars = [
    { name: "Sarah Chen", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face", initials: "SC" },
    { name: "Michael Johnson", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face", initials: "MJ" },
    { name: "Emily Rodriguez", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face", initials: "ER" },
    { name: "David Kim", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face", initials: "DK" },
    { name: "Jessica Taylor", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face", initials: "JT" },
    { name: "Alex Thompson", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face", initials: "AT" },
  ];

  return (
    <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
      {/* Glow effect background */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent animate-pulse-glow" />
      
      {/* Orbital rings */}
      <div className="absolute w-[240px] h-[240px] md:w-[300px] md:h-[300px] rounded-full border border-primary/20" />
      <div className="absolute w-[360px] h-[360px] md:w-[450px] md:h-[450px] rounded-full border border-primary/10" />
      
      {/* Center node */}
      <div className="absolute w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-primary shadow-glow flex items-center justify-center z-10">
        <span className="text-white font-bold text-lg md:text-xl">YOU</span>
      </div>

      {/* Orbiting avatars - inner ring */}
      <div className="absolute w-[240px] h-[240px] md:w-[300px] md:h-[300px]" style={{ animation: 'orbit 25s linear infinite' }}>
        {avatars.slice(0, 3).map((avatar, index) => (
          <div
            key={avatar.name}
            className="absolute"
            style={{
              left: '50%',
              top: '50%',
              transform: `rotate(${index * 120}deg) translateX(120px) rotate(-${index * 120}deg) translate(-50%, -50%)`,
            }}
          >
            <Avatar className="w-12 h-12 md:w-14 md:h-14 border-2 border-primary/50 shadow-card hover:scale-110 transition-transform duration-300">
              <AvatarImage src={avatar.image} alt={avatar.name} />
              <AvatarFallback className="bg-muted text-foreground">{avatar.initials}</AvatarFallback>
            </Avatar>
          </div>
        ))}
      </div>

      {/* Orbiting avatars - outer ring */}
      <div className="absolute w-[360px] h-[360px] md:w-[450px] md:h-[450px]" style={{ animation: 'orbit-reverse 35s linear infinite' }}>
        {avatars.slice(3).map((avatar, index) => (
          <div
            key={avatar.name}
            className="absolute"
            style={{
              left: '50%',
              top: '50%',
              transform: `rotate(${index * 120 + 60}deg) translateX(180px) rotate(-${index * 120 + 60}deg) translate(-50%, -50%)`,
            }}
          >
            <Avatar className="w-10 h-10 md:w-12 md:h-12 border-2 border-secondary/40 shadow-card hover:scale-110 transition-transform duration-300">
              <AvatarImage src={avatar.image} alt={avatar.name} />
              <AvatarFallback className="bg-muted text-foreground">{avatar.initials}</AvatarFallback>
            </Avatar>
          </div>
        ))}
      </div>

      {/* Connection lines (decorative) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(248, 90%, 66%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(248, 90%, 66%)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(248, 90%, 66%)" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default NetworkVisualization;
