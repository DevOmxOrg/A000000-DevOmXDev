const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container text-center space-y-4">
        <p className="text-2xl font-extrabold text-primary-foreground tracking-tight">
          Rapid<span className="text-gradient">Flow</span> Plumbing
        </p>
        <p className="text-primary-foreground/60 text-sm max-w-md mx-auto">
          Professional plumbing services in Crawley and surrounding areas. Gas Safe registered. Available 24/7 for emergencies.
        </p>
        <p className="text-primary-foreground/40 text-xs pt-4">
          © {new Date().getFullYear()} Rapid Flow Plumbing. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
