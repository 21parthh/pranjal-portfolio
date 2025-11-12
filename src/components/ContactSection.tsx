import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const ContactSection = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [200, -200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [-150, 150]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

    return (
        <section
            ref={sectionRef}
            id="contact"
            className="relative py-32 px-6 md:px-16 lg:px-24 bg-muted/10 overflow-hidden"
        >
            {/* Parallax accent elements */}
            <motion.div
                className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[100px]"
                style={{ y: y1, scale }}
            />
            <motion.div
                className="absolute top-0 left-0 w-96 h-96 bg-accent-secondary/8 rounded-full blur-[100px]"
                style={{ y: y2 }}
            />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-xs uppercase tracking-widest mb-8 text-accent">
                        Contact
                    </p>

                    <h2 className="text-5xl md:text-7xl font-serif mb-16 max-w-3xl leading-tight">
                        Let's{" "}
                        <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
                            Connect
                        </span>
                    </h2>

                    <motion.p
                        className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        I turn ideas into meaningful experiences that feel
                        natural and effortless. Every design is guided by
                        clarity, empathy, and purpose.
                    </motion.p>

                    <div className="flex flex-col space-y-6 max-w-md">
                        <motion.a
                            href="mailto:pranjalshirsath5@gmail.com"
                            className="group relative flex items-center justify-between py-8 px-6 transition-all duration-500 rounded-lg hover:bg-gradient-to-r hover:from-accent/10 hover:to-accent-secondary/10 hover:shadow-[0_0_30px_hsl(var(--accent)/0.2)]"
                            whileHover={{ x: 10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <span className="text-lg font-medium bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent group-hover:from-accent group-hover:to-accent-secondary transition-all">
                                Email
                            </span>
                            <ArrowUpRight className="w-5 h-5 text-accent group-hover:text-accent-secondary transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </motion.a>

                        <motion.a
                            href="https://www.linkedin.com/in/pranjal5/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative flex items-center justify-between py-8 px-6 transition-all duration-500 rounded-lg hover:bg-gradient-to-r hover:from-accent/10 hover:to-accent-secondary/10 hover:shadow-[0_0_30px_hsl(var(--accent)/0.2)]"
                            whileHover={{ x: 10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <span className="text-lg font-medium bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent group-hover:from-accent group-hover:to-accent-secondary transition-all">
                                LinkedIn
                            </span>
                            <ArrowUpRight className="w-5 h-5 text-accent group-hover:text-accent-secondary transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;
