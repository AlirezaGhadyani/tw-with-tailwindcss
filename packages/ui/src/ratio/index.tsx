import type { HTMLAttributes } from "react";

interface RatioProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  contentClassName?: string;
  ratio?: number | string;
  borderRadius?: string;
}

export default function Ratio(props: RatioProps) {
  const {
    children,
    className = "",
    style,
    contentClassName = "ratio-content",
    ratio = 1,
    borderRadius,
    ...rest
  } = props;

  const extraStyle: React.CSSProperties = {
    paddingTop: `${ratio === 0 ? 100 : 100 / Number(ratio)}%`,
    borderRadius,
  };

  return (
    <div
      className={`relative w-full h-0 ${className}`}
      style={{ ...extraStyle, ...style }}
      {...rest}
    >
      <div className={`absolute inset-0 w-full h-full ${contentClassName}`}>
        {children}
      </div>
    </div>
  );
}
