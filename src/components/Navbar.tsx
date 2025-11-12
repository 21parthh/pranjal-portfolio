import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Works", href: "#works" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-16 lg:px-24 py-6",
                isScrolled &&
                    "glass-effect shadow-lg [box-shadow:0_4px_30px_rgba(0,0,0,0.3)]"
            )}
            style={isScrolled ? { border: "none" } : undefined}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <a href="#" className="text-xl font-serif group relative">
                    <span className="relative z-10 bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent font-bold">
                        Pranjal
                    </span>
                    <span className="absolute inset-0 bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                </a>

                <nav className="flex space-x-10">
                    {navLinks.map((link, index) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground transition-all duration-300 relative group"
                            style={{ transitionDelay: `${index * 50}ms` }}
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-accent to-accent-secondary transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
