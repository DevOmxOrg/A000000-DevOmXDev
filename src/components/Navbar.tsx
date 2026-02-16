import { Phone } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="text-xl font-extrabold text-primary-foreground tracking-tight">
          Rapid<span className="text-gradient">Flow</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-primary-foreground/80">
          <a href="#services" className="hover:text-primary-foreground transition-colors">Services</a>
          <a href="#contact" className="hover:text-primary-foreground transition-colors">Contact</a>
        </nav>

        <a
          href="tel:+441234567890"
          className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-accent-foreground hover:brightness-110 transition-all"
        >
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline">01234 567 890</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
