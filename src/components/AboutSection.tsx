import { motion } from "framer-motion";
import profileAvatar from "@/assets/profile-avatar.png";

const AboutSection = () => {
    return (
        <section
            id="about"
            className="relative py-24 md:py-32 px-6 md:px-16 lg:px-24"
        >
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
                >
                    {/* Profile Image */}
                    <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
                        <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] ">
                            {/* Orange blob background */}
                            {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] md:w-[380px] md:h-[380px]">
                                <svg
                                    viewBox="0 0 200 200"
                                    className="w-full h-full"
                                >
                                    <path
                                        fill="hsl(var(--accent))"
                                        d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.8,56.4,53.8,69,39.8,76.8C25.8,84.6,8.8,87.6,-7.1,87.3C-23,87,-37.8,83.4,-51.2,75.8C-64.6,68.2,-76.6,56.6,-83.8,42.4C-91,28.2,-93.4,11.4,-91.8,-4.6C-90.2,-20.6,-84.6,-35.8,-76.2,-49.4C-67.8,-63,-56.6,-75,-43.2,-81.8C-29.8,-88.6,-14.9,-90.2,0.3,-90.7C15.5,-91.2,30.6,-83.6,44.7,-76.4Z"
                                        transform="translate(100 100)"
                                        opacity="0.9"
                                    />
                                </svg>
                            </div> */}
                            <div className="overflow-hidden rounded-2xl w-full h-full">
                                <img
                                    src="https://res.cloudinary.com/dh5trkmtb/image/upload/v1763825967/8d62c729-a6a1-4d2c-a21e-482f67aff422_utjqba.jpg"
                                    alt="Profile"
                                    className="w-full h-full object-cover scale-100 rounded-2xl"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="order-1 lg:order-2 space-y-6">
                        <div>
                            <p className="text-sm uppercase tracking-wider text-accent mb-4">
                                About Me
                            </p>
                            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
                                Crafting Digital Experiences That Matter
                            </h2>
                        </div>

                        <p className="text-lg text-muted-foreground leading-relaxed">
                            I’m a passionate designer who believes in the power
                            of thoughtful design to solve real problems. I’m
                            fascinated by how design shapes what people feel and
                            how they interact. Apart from design, I love
                            admiring sunsets, watching the sky change colors,
                            and losing myself in good series. Traveling brings
                            me peace and helps me understand life and people
                            better. All of these moments inspire the designer
                            I’m becoming.
                        </p>

                        {/* Stats */}
                        <div className="flex gap-8 pt-4">
                            <div>
                                <div className="text-3xl font-serif text-foreground mb-1">
                                    2+
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    Years
                                </div>
                            </div>
                            <div>
                                <div className="text-3xl font-serif text-foreground mb-1">
                                    5+
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    Projects
                                </div>
                            </div>
                            <div>
                                <div className="text-3xl font-serif text-foreground mb-1">
                                    7+
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    Clients
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
