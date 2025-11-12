import { motion } from "framer-motion";

const Footer = () => {
    return (
        <footer className="py-12 px-6 md:px-16 lg:px-24 relative">
            <motion.div
                className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="text-muted-foreground text-sm tracking-widest">
                    Made With 🍵 & 💖 By Pranjal
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;
