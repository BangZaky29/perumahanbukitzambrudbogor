import React from "react";
import { cn } from "../../lib/utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  asLink?: boolean;
  href?: string;
}

const variantClasses = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  outline: "btn-outline",
  ghost: "btn-ghost",
};

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  className,
  asLink,
  href,
  ...props
}) => {
  const classes = cn(variantClasses[variant], sizeClasses[size], className);

  if (asLink && href) {
    return (
      <a href={href} className={classes} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
