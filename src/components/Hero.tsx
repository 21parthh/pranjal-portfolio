import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

    // Simplified parallax
    const yFast = useTransform(scrollYProgress, [0, 0.5], [0, 150]);
    const [showResume, setShowResume] = useState(false);
    return (
        <>
            <Dialog open={showResume} onOpenChange={setShowResume}>
                <DialogContent className="max-w-4xl w-[95vw] h-[50vh] md:h-[90vh] flex flex-col p-0 sm:p-0">
                    <iframe
                        src="/resume.pdf#&navpanes=0&scrollbar=0"
                        className="flex-1 w-full h-full rounded-md sm:rounded-md"
                        title="Resume"
                        style={{ border: "none" }}
                    />
                </DialogContent>
            </Dialog>
            <section
                ref={ref}
                id="about"
                className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-20 overflow-hidden"
            >
                {/* Simplified parallax elements */}
                <motion.div
                    className="absolute top-20 right-20 w-96 h-96 bg-accent/8 rounded-full blur-[100px]"
                    style={{ y: yFast }}
                />
                <motion.div
                    className="absolute bottom-40 left-20 w-80 h-80 bg-accent-secondary/8 rounded-full blur-[100px]"
                    style={{ y }}
                />

                <motion.div
                    className="max-w-6xl mx-auto w-full"
                    style={{ opacity, y }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 leading-[1.1] max-w-4xl">
                            {[
                                "Hey, I'm ",
                                "Pranjal",
                                ", a UI/UX Designer based in ",
                                "India",
                            ].map((text, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: 0.3 + i * 0.1,
                                    }}
                                    className={
                                        i === 1 || i === 3
                                            ? "bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent font-bold"
                                            : ""
                                    }
                                >
                                    {text}
                                </motion.span>
                            ))}
                        </h1>

                        <motion.p
                            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                        >
                            I design experiences that speak to both logic and
                            emotion. Every pixel has a purpose, every
                            interaction a story. Design, for me, is where
                            function meets feeling.
                        </motion.p>

                        <motion.div
                            className="flex gap-6 items-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.9 }}
                        >
                            <a
                                href="#works"
                                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent to-accent-secondary rounded-full font-medium overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_hsl(var(--accent)/0.5)]"
                            >
                                <span className="relative z-10 text-sm uppercase tracking-wider mr-2 text-white">
                                    View Work
                                </span>
                                <ArrowRight className="relative z-10 w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
                                <div className="absolute inset-0 bg-gradient-to-r from-accent-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </a>

                            <button
                                onClick={() => setShowResume(true)}
                                className="inline-flex items-center gap-2 px-5 py-2 text-primary text-base sm:text-lg font-medium rounded-md"
                            >
                                <span>View Resume</span>
                            </button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </section>
        </>
    );
};

export default Hero;
