const Stats = () => {
  const stats = [
    { value: "10K+", label: "Verified Alumni" },
    { value: "5K+", label: "Active Mentors" },
    { value: "15K+", label: "Successful Referrals" },
    { value: "98%", label: "Satisfaction Rate" },
  ];

  return (
    <section className="relative py-16 md:py-24">
      <div className="absolute inset-0 bg-muted/30" />
      
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
