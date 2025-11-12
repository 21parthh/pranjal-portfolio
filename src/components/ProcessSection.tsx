import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ProcessSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  
  const steps = [
    {
      number: "01",
      title: "Research",
      description: "Gather insights through user research, data, and analysis to understand needs and challenges."
    },
    {
      number: "02",
      title: "Define",
      description: "Synthesize findings to define problems, user goals, and project objectives clearly."
    },
    {
      number: "03",
      title: "Ideate",
      description: "Generate creative, user-focused ideas through brainstorming and rapid exploration."
    },
    {
      number: "04",
      title: "Design",
      description: "Transform ideas into polished, functional interfaces and interactive prototypes."
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="process" 
      className="relative py-32 px-6 md:px-16 lg:px-24 bg-muted/10 overflow-hidden"
    >
      {/* Parallax background accents */}
      <motion.div 
        className="absolute top-1/2 right-0 w-96 h-96 bg-accent/6 rounded-full blur-[80px]"
        style={{ y: y1 }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-80 h-80 bg-accent-secondary/6 rounded-full blur-[80px]"
        style={{ y: y2 }}
      />
      
      {/* Simplified grid lines */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{ 
          backgroundImage: 'linear-gradient(hsl(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)',
          backgroundSize: '100px 100px'
        }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs uppercase tracking-widest mb-6 text-accent">
            Approach
          </p>
          <h2 className="text-4xl md:text-5xl font-serif">
            Design Process
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group cursor-pointer"
            >
              <div className="relative p-8 rounded-lg border-l-4 border-accent/30 group-hover:border-accent transition-all duration-500 bg-card/30 group-hover:bg-card/50 group-hover:shadow-[0_0_40px_hsl(var(--accent)/0.12)]">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                <div className="relative z-10">
                  <motion.p 
                    className="text-sm bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent mb-4 font-mono font-bold"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                  >
                    {step.number}
                  </motion.p>
                  <h3 className="text-2xl font-serif mb-4 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent group-hover:from-accent group-hover:to-accent-secondary transition-all duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
