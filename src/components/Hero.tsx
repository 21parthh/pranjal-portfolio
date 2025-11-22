import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
    const yFast = useTransform(scrollYProgress, [0, 0.5], [0, 150]);

    const [showResume, setShowResume] = useState(false);

    return (
        <>
            <Dialog open={showResume} onOpenChange={setShowResume}>
                <DialogContent className="max-w-4xl w-[95vw] h-[50vh] md:h-[90vh] flex flex-col p-0">
                    <iframe
                        src="/resume.pdf#&navpanes=0&scrollbar=0"
                        className="flex-1 w-full h-full rounded-md"
                        title="Resume"
                        style={{ border: "none" }}
                    />
                </DialogContent>
            </Dialog>

            <section
                ref={ref}
                id="about"
                className="
                    relative 
                    min-h-screen 
                    flex 
                    flex-col 
                    justify-center 
                    items-center 
                    text-center 
                    px-4 sm:px-6 md:px-16 lg:px-24 
                    pt-10 sm:pt-16 md:pt-24
                    overflow-hidden
                "
            >
                {/* Background motion effects */}
                <motion.div
                    className="absolute top-10 right-10 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-accent/10 rounded-full blur-[100px]"
                    style={{ y: yFast }}
                />
                <motion.div
                    className="absolute bottom-20 left-10 w-52 sm:w-64 md:w-80 h-52 sm:h-64 md:h-80 bg-accent-secondary/10 rounded-full blur-[100px]"
                    style={{ y }}
                />

                {/* Centered Content */}
                <motion.div
                    className="max-w-4xl mx-auto flex flex-col items-center text-center"
                    style={{ opacity, y }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <h1
                            className="
                            text-4xl sm:text-5xl md:text-6xl lg:text-8xl 
                            font-serif 
                            mb-6 
                            leading-tight sm:leading-[1.15] md:leading-[1.1]
                        "
                        >
                            <span className="block">
                                Hey, I'm{" "}
                                <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent font-bold">
                                    Pranjal
                                </span>
                            </span>

                            <span className="block">a UI/UX Designer</span>

                            <span className="block">
                                based in{" "}
                                <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent font-bold">
                                    India
                                </span>
                            </span>
                        </h1>

                        <motion.p
                            className="
                                text-base sm:text-lg md:text-xl 
                                text-muted-foreground 
                                max-w-xl sm:max-w-2xl 
                                mx-auto 
                                text-center 
                                mb-12 
                                leading-relaxed sm:leading-loose
                            "
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                        >
                            I design experiences that speak to both logic and
                            emotion. Every pixel has a purpose, every
                            interaction a story. <br />
                            Design, for me, is where function meets feeling.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.9 }}
                        >
                            <a
                                href="#works"
                                className="
        group relative 
        inline-flex items-center 
        px-6 py-3 sm:px-8 sm:py-4 
        bg-gradient-to-r from-accent to-accent-secondary 
        rounded-full 
        font-medium 
        transition-all 
        hover:scale-105 
        hover:shadow-[0_0_40px_hsl(var(--accent)/0.5)]
    "
                            >
                                <span className="relative z-10 text-sm uppercase tracking-wider mr-2 text-white">
                                    View Work
                                </span>
                                <ArrowRight className="relative z-10 w-4 h-4 text-white transition-transform group-hover:translate-x-1" />

                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </a>

                            <button
                                onClick={() => setShowResume(true)}
                                className="
                                    group relative 
                                    inline-flex items-center 
                                    px-6 py-3 sm:px-8 sm:py-4 
                                    bg-gradient-to-r from-accent to-accent-secondary 
                                    rounded-full 
                                    font-medium 
                                    transition-all 
                                    hover:scale-105 
                                    hover:shadow-[0_0_40px_hsl(var(--accent)/0.5)]
                                "
                            >
                                <span className="text-white">View Resume</span>
                            </button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </section>
        </>
    );
};

export default Hero;
