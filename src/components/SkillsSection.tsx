import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const SkillsSection = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const yBackground = useTransform(scrollYProgress, [0, 1], [100, -100]);

    const skills = [
        {
            title: "UI Design",
            description:
                "Creating intuitive and visually appealing interfaces that delight users and align with business goals.",
        },
        {
            title: "UX Research",
            description:
                "Discovering user needs and behavior patterns through interviews, testing, and analytical research.",
        },
        // {
        //   title: "Data Analysis",
        //   description: "Interpreting user data to make informed design decisions and measure the impact of design changes."
        // },
        {
            title: "Competitive Analysis",
            description:
                "Analyzing market trends and competitor strategies to identify opportunities and create distinctive solutions.",
        },
        {
            title: "Prototyping",
            description:
                "Building interactive prototypes that communicate design intent and facilitate user testing.",
        },
        {
            title: "Design Systems",
            description:
                "Creating scalable design systems that ensure consistency across products and accelerate development.",
        },
        {
            title: "Brand Identity",
            description:
                "Developing distinctive brand identities that establish emotional connections with users.",
        },
    ];

    return (
        <section
            ref={sectionRef}
            id="skills"
            className="relative py-32 px-6 md:px-16 lg:px-24 overflow-hidden"
        >
            {/* Parallax background elements */}
            <motion.div
                className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-[80px]"
                style={{ y: yBackground }}
            />
            <motion.div
                className="absolute bottom-20 left-10 w-96 h-96 bg-accent-secondary/5 rounded-full blur-[80px]"
                style={{ y: useTransform(scrollYProgress, [0, 1], [-30, 30]) }}
            />

            <div className="max-w-6xl mx-auto">
                <motion.div
                    className="mb-24"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-xs uppercase tracking-widest mb-6 text-accent">
                        Expertise
                    </p>
                    <h2 className="text-4xl md:text-5xl font-serif">
                        What I Do
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative p-6 rounded-lg border border-border/30 hover:border-accent/50 transition-all duration-500 hover:shadow-[0_0_30px_hsl(var(--accent)/0.15)] cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                            <div className="relative z-10">
                                <h3 className="text-xl font-serif mb-4 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent group-hover:from-accent group-hover:to-accent-secondary transition-all duration-300">
                                    {skill.title}
                                </h3>
                                <div className="w-12 h-[2px] bg-gradient-to-r from-accent to-accent-secondary mb-4 group-hover:w-24 transition-all duration-500"></div>
                                <p className="text-muted-foreground leading-relaxed text-sm">
                                    {skill.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
