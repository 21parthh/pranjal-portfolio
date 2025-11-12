import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface TestimonialProps {
    content: string;
    name: string;
    role: string;
    company: string;
}

const testimonials: TestimonialProps[] = [
    {
        content:
            "Working with Pranjal was an amazing experience. He redesigned our Poker app for Android with a strong grasp of user flow and visual hierarchy. The result feels modern, intuitive, and exactly what we envisioned.",
        name: "Vishakha Singhal",
        role: "Freelance Client",
        company: "Poker App Project",
    },
    {
        content:
            "Pranjal was a key part of our design team, owning the UI/UX for our food app. Her attention to detail and understanding of user behavior helped us deliver a seamless and visually engaging experience that surpassed expectations.",
        name: "Gaurav",
        role: "Project Lead",
        company: "Nagarjuna Tech Solutions (Nazdeeki App)",
    },
    {
        content:
            "Pranjal brought fresh ideas and clarity to our design process. His collaborative approach and creativity helped turn complex concepts into clean, functional designs that our users love.",
        name: "Parth Deore",
        role: "Freelance Client",
        company: "Personal Branding Project",
    },
];

const TestimonialsSection = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const yParallax = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section
            ref={sectionRef}
            id="testimonials"
            className="relative py-32 px-6 md:px-16 lg:px-24 overflow-hidden"
        >
            {/* Parallax background orbs */}
            <motion.div
                className="absolute top-40 left-20 w-64 h-64 bg-accent/4 rounded-full blur-[80px]"
                style={{ y: yParallax }}
            />
            <motion.div
                className="absolute bottom-40 right-20 w-80 h-80 bg-accent-secondary/4 rounded-full blur-[80px]"
                style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
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
                        Testimonials
                    </p>
                    <h2 className="text-4xl md:text-5xl font-serif">
                        Client Feedback
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative p-8 rounded-lg border border-border/30 group hover:border-accent/50 transition-all duration-500 bg-card/20 hover:bg-card/40 cursor-pointer hover:shadow-[0_0_40px_hsl(var(--accent)/0.15)]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                            <div className="absolute top-0 left-8 w-12 h-1 bg-gradient-to-r from-accent to-accent-secondary"></div>
                            <div className="relative z-10">
                                <blockquote className="mb-8 text-muted-foreground leading-relaxed italic">
                                    "{testimonial.content}"
                                </blockquote>
                                <div>
                                    <p className="font-medium mb-1 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent group-hover:from-accent group-hover:to-accent-secondary transition-all duration-300">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        {testimonial.role},{" "}
                                        {testimonial.company}
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

export default TestimonialsSection;
