import { type ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "navbar" | "ghost";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-cream-100 text-primary-dark hover:bg-cream-200 shadow-md hover:shadow-lg",
  secondary:
    "bg-transparent text-cream-50 hover:text-white border-0 underline-offset-4 hover:underline",
  navbar:
    "bg-primary text-cream-50 hover:bg-primary-light shadow-sm",
  ghost:
    "bg-transparent text-primary border border-cream-200 hover:bg-cream-100",
};

export default function Button({
  children,
  variant = "primary",
  href,
  className = "",
  showArrow = false,
  target,
  rel,
  onClick,
}: {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  className?: string;
  showArrow?: boolean;
  target?: string;
  rel?: string;
  onClick?: () => void;
}) {
  const baseClasses =
    "inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 cursor-pointer";
  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} target={target} rel={rel}>
        {children}
        {showArrow && <ArrowRight className="w-4 h-4" />}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
      {showArrow && <ArrowRight className="w-4 h-4" />}
    </button>
  );
}
