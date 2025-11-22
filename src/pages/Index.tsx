import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { link } from "fs";

const projects = [
    {
        title: "My Clinic",
        description:
            "Designed My Clinic, a healthcare web app that streamlines appointment scheduling and patient management, improving efficiency and reducing manual workload for doctors.",
        image: "https://res.cloudinary.com/dh5trkmtb/image/upload/v1762961549/Hero_1_cv4nif.png",
        categories: ["Healthcare", "UX Design", "UI Design"],
        link: "https://www.behance.net/gallery/234073095/MyClinic-Smart-Appointment-Clinic-Management",
        button: "Case Study",
    },
    {
        title: "syncmyJD",
        description:
            "Designed syncmyJD, an AI-powered resume builder with a chatbot assistant and live ATS score to help users craft smarter, job-ready resumes.",
        image: "https://res.cloudinary.com/dh5trkmtb/image/upload/v1762961549/Frame_1948755425_1_brdh6a.png",
        categories: ["UX Research", "UI Design", "Technology"],
        link: "https://www.behance.net/gallery/237822739/syncmyJD-AI-Powered-Resume-Builder-UX-Case-Study",
        button: "Case Study",
    },
    {
        title: "Nazdeeki Food App",
        description:
            "A food delivery and discovery app that helps customers find and order from nearby restaurants, while giving restaurant owners tools to manage menus, track orders, and reach local customers easily.",
        image: "https://res.cloudinary.com/dh5trkmtb/image/upload/v1762966940/Clean_and_Modern_App_Portfolio_Mockup_Presentation_1_srk28w.png",
        categories: ["UX Research", "UI Design", "Food"],
        button: "Coming Soon",
    },
];

const Index = () => {
    useEffect(() => {
        // Smooth scroll behavior for anchor links
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
            anchor.addEventListener("click", function (e) {
                e.preventDefault();
                const href = this.getAttribute("href");
                if (href) {
                    document.querySelector(href)?.scrollIntoView({
                        behavior: "smooth",
                    });
                }
            });
        });
    }, []);

    return (
        <div className="bg-background text-foreground min-h-screen">
            <Navbar />
            <main>
                <Hero />

                <AboutSection />

                <SkillsSection />

                <ProcessSection />

                <section id="works" className="relative py-40 overflow-hidden">
                    {/* Background gradient orbs */}
                    <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-accent/10 to-accent-secondary/10 blur-[80px] opacity-20" />
                    <div className="absolute bottom-20 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-accent-secondary/10 to-accent/10 blur-[80px] opacity-20" />

                    <div className="max-w-7xl mx-auto relative px-6 md:px-16 lg:px-24">
                        <motion.div
                            className="mb-24"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <p className="text-xs uppercase tracking-[0.3em] mb-8 text-accent font-medium">
                                Portfolio
                            </p>
                            <h2 className="text-6xl md:text-8xl lg:text-9xl font-serif text-foreground leading-[1.1]">
                                Selected
                                <br />
                                <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
                                    Works
                                </span>
                            </h2>
                        </motion.div>

                        {/* Project Cards */}
                        <div className="space-y-16">
                            {projects.map((project, index) => {
                                const isImageLeft = index % 2 !== 0; // alternate layout
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.6,
                                            delay: index * 0.2,
                                        }}
                                        className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-3xl overflow-hidden hover:border-accent/30 transition-all duration-500"
                                    >
                                        <div
                                            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12 items-center ${
                                                isImageLeft
                                                    ? "lg:grid-flow-dense"
                                                    : ""
                                            }`}
                                        >
                                            {/* Image (left or right alternates) */}
                                            <div
                                                className={`relative aspect-[4/3] lg:aspect-auto lg:h-full rounded-2xl overflow-hidden ${
                                                    isImageLeft
                                                        ? "lg:order-1"
                                                        : ""
                                                }`}
                                            >
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            </div>

                                            {/* Content */}
                                            <div className="flex flex-col justify-between space-y-6">
                                                <div className="space-y-6">
                                                    <h3 className="text-4xl md:text-5xl font-serif text-foreground group-hover:text-accent transition-colors duration-300">
                                                        {project.title}
                                                    </h3>

                                                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                                        {project.description}
                                                    </p>

                                                    {/* Tags */}
                                                    <div className="flex flex-wrap gap-2 mt-4">
                                                        {project.categories.map(
                                                            (cat, i) => (
                                                                <span
                                                                    key={i}
                                                                    className="px-3 py-1 text-sm font-medium bg-accent/10 text-accent rounded-full border border-accent/20"
                                                                >
                                                                    {cat}
                                                                </span>
                                                            )
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Button */}
                                                <div className="mt-8">
                                                    <a
                                                        target="_blank"
                                                        href={project.link}
                                                        className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                                                    >
                                                        {project.button}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <TestimonialsSection />

                <ContactSection />
            </main>
            <Footer />
        </div>
    );
};

export default Index;
