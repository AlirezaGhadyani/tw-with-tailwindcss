import React from "react";

interface TypographyProps {
  component?: React.ElementType;
  className?: string;
  size?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "xl"
    | "l"
    | "m"
    | "xm"
    | "s"
    | "xs"
    | "xxs";
  bold?: boolean;
  "aria-label"?: string;
  children: React.ReactNode;
  [key: string]: any;
}

const Typography: React.FC<TypographyProps> = ({
  component = "article",
  className,
  size = "m",
  bold = false,
  "aria-label": ariaLabel,
  children,
  ...rest
}) => {
  const TagNode = component || "div";

  // Tailwind font-size and line-height classes
  const sizeClasses = {
    xl: "text-xl leading-[1.379em]",
    l: "text-lg leading-[1.333em]",
    m: "text-base leading-[1.5em]",
    xm: "text-sm leading-[1.408em]",
    s: "text-xs leading-[1.587em]",
    xs: "text-[0.75rem] leading-[1.428em]",
    xxs: "text-[0.625rem] leading-[1.2em]",
    h1: "text-[2.25rem] leading-[1.754em]",
    h2: "text-[1.875rem] leading-[1.875em]",
    h3: "text-[1.5rem] leading-[1.944em]",
    h4: "text-[1.25rem] leading-[1.944em]",
    h5: "text-[1.125rem] leading-[1.753em]",
    h6: "text-[1rem] leading-[1.561em]",
  };

  const fontWeightClass = bold ? "font-bold" : "font-medium";

  return (
    <TagNode
      aria-label={ariaLabel}
      className={`${sizeClasses[size]} ${fontWeightClass} ${className}`}
      {...rest}
    >
      {children}
    </TagNode>
  );
};

export default Typography;
