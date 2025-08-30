import React from "react";
import { cn } from "@/lib/utils";

const Button = React.forwardRef(({ className, variant = "primary", size = "default", children, disabled = false, ...props }, ref) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

  const sizeVariants = {
    sm: "h-9 px-4 py-2 text-sm",
    default: "h-11 px-6 py-3 text-base",
    lg: "h-12 px-8 py-3 text-lg",
  };

  const variants = {
    // Background variants
    primary: "bg-coffee-dark text-white border-2 border-coffee-dark hover:bg-coffee-dark/90 hover:border-coffee-dark/90 focus-visible:ring-coffee-dark shadow-sm hover:shadow-md",

    secondary: "bg-gold text-coffee-dark border-2 border-gold hover:bg-gold/90 hover:border-gold/90 focus-visible:ring-gold shadow-sm hover:shadow-md",

    success: "bg-white text-white border-2 border-white hover:bg-white/90 hover:border-white/90 focus-visible:ring-white shadow-sm hover:shadow-md",

    // Outline variants (same height due to border-2)
    "outline-primary": "bg-transparent text-coffee-dark border-2 border-coffee-dark hover:bg-coffee-dark hover:text-white focus-visible:ring-coffee-dark",

    "outline-secondary": "bg-transparent text-gold border-2 border-gold hover:bg-gold hover:text-coffee-dark focus-visible:ring-gold",

    "outline-success": "bg-transparent text-white border-2 border-white hover:bg-white hover:text-coffee-dark focus-visible:ring-white",
  };

  return (
    <button className={cn(baseStyles, sizeVariants[size], variants[variant], className)} ref={ref} disabled={disabled} {...props}>
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;

// Example usage component to demonstrate all variants
export function ButtonShowcase() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-coffee-dark mb-8 text-center">Button Component Showcase</h1>

      {/* Size variants */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold text-coffee-dark mb-4">Size Variants</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button size="sm" variant="primary">
            Small Button
          </Button>
          <Button size="default" variant="primary">
            Default Button
          </Button>
          <Button size="lg" variant="primary">
            Large Button
          </Button>
        </div>
      </div>

      {/* Background variants */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-coffee-dark mb-4">Background Variants</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="success">Success Button</Button>
        </div>
      </div>

      {/* Outline variants */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-coffee-dark mb-4">Outline Variants</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="outline-primary">Outline Primary</Button>
          <Button variant="outline-secondary">Outline Secondary</Button>
          <Button variant="outline-success">Outline Success</Button>
        </div>
      </div>

      {/* Mixed variants on same line - Perfect alignment */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-coffee-dark mb-4">Mixed Variants (Same Line Alignment)</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button variant="primary">Get Started</Button>
          <Button variant="outline-primary">Learn More</Button>
        </div>
        <div className="flex flex-wrap gap-4 items-center mt-4">
          <Button variant="secondary">Order Now</Button>
          <Button variant="outline-secondary">View Catalog</Button>
        </div>
        <div className="flex flex-wrap gap-4 items-center mt-4">
          <Button variant="success">Confirm Order</Button>
          <Button variant="outline-success">Save Draft</Button>
        </div>
      </div>

      {/* Disabled states */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-coffee-dark mb-4">Disabled States</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" disabled>
            Disabled Primary
          </Button>
          <Button variant="outline-primary" disabled>
            Disabled Outline
          </Button>
          <Button variant="secondary" disabled>
            Disabled Secondary
          </Button>
          <Button variant="outline-secondary" disabled>
            Disabled Outline
          </Button>
        </div>
      </div>

      {/* With icons */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-coffee-dark mb-4">With Icons (if you have lucide-react)</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" className="gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add Item
          </Button>
          <Button variant="outline-primary" className="gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            View Details
          </Button>
        </div>
      </div>

      {/* Real-world usage examples */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-coffee-dark mb-4">Real-world Usage Examples</h2>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
          <h3 className="text-lg font-semibold text-coffee-dark mb-4">Hero Section CTA</h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" size="lg">
              Explore Products
            </Button>
            <Button variant="outline-primary" size="lg">
              Learn Process
            </Button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
          <h3 className="text-lg font-semibold text-coffee-dark mb-4">Product Cards</h3>
          <div className="flex gap-4">
            <Button variant="secondary">Order Now</Button>
            <Button variant="outline-secondary">View Details</Button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-coffee-dark mb-4">Contact Section</h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="success">Get Started Today</Button>
            <Button variant="outline-success">Request Samples</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
