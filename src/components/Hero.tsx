import { Phone } from "lucide-react";
import heroImage from "@/assets/hero-plumber.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Professional plumber at work" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
      </div>

      <div className="container relative z-10 py-20">
        <div className="max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-1.5 text-sm font-medium text-accent-foreground border border-accent/30">
            <span className="h-2 w-2 rounded-full bg-trust animate-pulse" />
            Serving Crawley &amp; Surrounding Areas
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary-foreground leading-[1.1]">
            Fast, Reliable<br />
            <span className="text-gradient">Plumbing Services</span><br />
            You Can Trust
          </h1>

          <p className="text-lg text-primary-foreground/80 max-w-lg leading-relaxed">
            From emergency leaks to full bathroom installations — Rapid Flow Plumbing delivers professional, affordable service across Crawley. Available 24/7.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="tel:+441234567890"
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-accent px-8 py-4 text-lg font-bold text-accent-foreground shadow-lg hover:brightness-110 transition-all animate-pulse-glow"
            >
              <Phone className="h-5 w-5" />
              Call Now — Free Quote
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border-2 border-primary-foreground/30 px-8 py-4 text-lg font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition-all"
            >
              Request a Callback
            </a>
          </div>

          <div className="flex items-center gap-6 pt-4 text-primary-foreground/70 text-sm">
            <span className="flex items-center gap-1.5">✓ No Call-Out Charge</span>
            <span className="flex items-center gap-1.5">✓ 24/7 Emergency</span>
            <span className="flex items-center gap-1.5">✓ Gas Safe Registered</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
