import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast({ title: "Please fill in your name and phone number.", variant: "destructive" });
      return;
    }
    toast({ title: "Message sent!", description: "We'll get back to you within the hour." });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-2">Get In Touch</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
                Request a Free Quote
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Fill out the form and one of our friendly engineers will call you back — usually within the hour. No obligation, no fuss.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <a href="tel:+441234567890" className="flex items-center gap-4 group">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call us anytime</p>
                  <p className="font-semibold text-foreground">01234 567 890</p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email us</p>
                  <p className="font-semibold text-foreground">info@rapidflowplumbing.co.uk</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Based in</p>
                  <p className="font-semibold text-foreground">Crawley, West Sussex</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="rounded-xl bg-card border border-border p-8 shadow-sm space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-1.5">Full Name *</label>
                <input
                  id="name"
                  type="text"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-card-foreground mb-1.5">Phone Number *</label>
                <input
                  id="phone"
                  type="tel"
                  required
                  maxLength={20}
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="07123 456 789"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-1.5">Email (optional)</label>
              <input
                id="email"
                type="email"
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="john@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-1.5">How can we help?</label>
              <textarea
                id="message"
                rows={4}
                maxLength={1000}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                placeholder="Tell us about your plumbing issue..."
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-accent px-6 py-4 text-base font-bold text-accent-foreground shadow-md hover:brightness-110 transition-all"
            >
              Send Message — Get a Free Quote
            </button>
            <p className="text-xs text-center text-muted-foreground">We typically respond within 1 hour during business hours.</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
