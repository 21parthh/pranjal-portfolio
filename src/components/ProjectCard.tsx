import { useRef, useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    categories: string[];
    index: number;
    link: string;
}

const ProjectCard = ({
    title,
    description,
    image,
    categories,
    index,
    link,
}: ProjectCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"],
    });

    const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsVisible(true);
                    }, index * 200);
                }
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) observer.observe(cardRef.current);
        return () => {
            if (cardRef.current) observer.unobserve(cardRef.current);
        };
    }, [index]);

    // alternate layout: even index = normal, odd index = reversed
    const isReversed = index % 2 !== 0;

    return (
        <motion.div
            ref={cardRef}
            style={{ scale }}
            initial={{ opacity: 0, y: 80 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-24 w-full"
        >
            <div
                className={`flex flex-col md:flex-row items-center justify-between gap-10 ${
                    isReversed ? "md:flex-row-reverse" : ""
                }`}
            >
                {/* 🖼️ Image Section */}
                <motion.div
                    style={{ y: imageY }}
                    className="relative w-full md:w-1/2 h-[320px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg"
                >
                    <img
                        src={image}
                        alt={title}
                        loading="lazy"
                        className="w-full h-full object-cover scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </motion.div>

                {/* 📝 Content Section */}
                <div className="w-full md:w-1/2 space-y-6 px-4 md:px-8">
                    {/* Categories */}
                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat, i) => (
                            <span
                                key={i}
                                className="text-xs uppercase tracking-widest text-accent font-medium px-3 py-1 bg-accent/5 rounded-full"
                            >
                                {cat}
                            </span>
                        ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl md:text-5xl font-serif text-foreground leading-tight">
                        {title}
                    </h3>

                    {/* Description */}
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                        {description}
                    </p>

                    {/* CTA */}
                    <a
                        href={link}
                        className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] font-medium text-accent hover:gap-3 transition-all duration-300"
                    >
                        <span className="relative">
                            View Project
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 hover:w-full" />
                        </span>
                        <ArrowUpRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
