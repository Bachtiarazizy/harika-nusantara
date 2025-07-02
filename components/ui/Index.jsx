import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function Button({ children, variant = "primary", size = "md", className, ...props }) {
  const baseClasses = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-gold text-white hover:bg-coffee-medium focus:ring-gold",
    secondary: "bg-coffee-light text-coffee-dark hover:bg-coffee-medium hover:text-white focus:ring-coffee-light",
    outline: "border-2 border-gold text-gold hover:bg-gold hover:text-white focus:ring-gold",
    ghost: "text-coffee-dark hover:bg-coffee-light focus:ring-coffee-light",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button className={cn(baseClasses, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  );
}

export function Card({ children, className, ...props }) {
  return (
    <div className={cn("bg-white rounded-xl shadow-lg border border-border overflow-hidden transition-all duration-200 hover:shadow-xl", className)} {...props}>
      {children}
    </div>
  );
}

export function Section({ children, className, ...props }) {
  return (
    <section className={cn("py-16 lg:py-24", className)} {...props}>
      <div className="container mx-auto px-4">{children}</div>
    </section>
  );
}

export function SectionHeader({ title, subtitle, description, centered = true }) {
  return (
    <div className={cn("mb-12", centered && "text-center")}>
      {subtitle && <p className="text-gold font-semibold text-sm uppercase tracking-wide mb-2">{subtitle}</p>}
      <h2 className="text-3xl lg:text-4xl font-bold text-coffee-dark mb-4">{title}</h2>
      {description && <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{description}</p>}
    </div>
  );
}
