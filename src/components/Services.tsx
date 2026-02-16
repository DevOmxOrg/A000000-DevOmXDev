import { Droplets, Flame, Bath } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "TESTTESTTESTLeak Repairs",
    description: "Fast detection and repair of all types of leaks — taps, pipes, toilets, and hidden water damage. We stop the drip before it becomes a flood.",
    features: ["Emergency call-outs", "Pipe replacement", "Water damage prevention"],
  },
  {
    icon: Flame,
    title: "Boiler Services",
    description: "Installation, servicing, and repair of all boiler brands. Gas Safe registered engineers ensure your heating runs safely and efficiently.",
    features: ["Annual servicing", "New installations", "Breakdown repairs"],
  },
  {
    icon: Bath,
    title: "Bathroom Fitting",
    description: "Complete bathroom design and installation — from budget refreshes to luxury renovations. We handle plumbing, tiling, and everything in between.",
    features: ["Full refurbishments", "Shower installations", "Accessible bathrooms"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-2">What We Do</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            Our Core Services
          </h2>
          <p className="mt-4 text-muted-foreground">
            Professional plumbing solutions for homes and businesses across Crawley.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-xl bg-card p-8 shadow-sm border border-border hover:shadow-lg hover:border-accent/30 transition-all duration-300"
            >
              <div className="mb-5 inline-flex items-center justify-center h-14 w-14 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-5">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-card-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
