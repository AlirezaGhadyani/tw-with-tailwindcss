import React, { ReactNode, useMemo } from "react";
import Image from "../image";
import ConditionWrap from "../conditionWrap";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  cover?: string;
  coverAlt?: string;
  coverTitle?: string;
  coverRatio?: "horizontal" | "vertical";
  landscape?: boolean;
  fallbackComponent?: React.ReactNode;
  overlayComponent?: React.ReactNode;
  hoverComponent?: React.ReactNode;
  gradient?: boolean;
  borderRadius?: string;
  [key: string]: any;
}

const RATIO = {
  HORIZONTAL: 16 / 9,
  VERTICAL: 0.665,
};

function WrapComponent(children: ReactNode) {
  return <div className="w-full flex-none max-w-[10.375rem]">{children}</div>;
}

export default function Card({
  children,
  className,
  style,
  cover,
  coverAlt,
  coverTitle,
  coverRatio = "horizontal",
  landscape = false,
  fallbackComponent,
  overlayComponent,
  hoverComponent,
  gradient,
  borderRadius,
  ...rest
}: CardProps) {
  const ratio = useMemo(
    () =>
      coverRatio === "vertical"
        ? RATIO.VERTICAL
        : coverRatio === "horizontal"
          ? RATIO.HORIZONTAL
          : coverRatio,
    [coverRatio]
  );

  return (
    <div
      className={`w-full ${landscape ? "flex" : ""} ${className}`}
      style={{ borderRadius, ...style }}
      {...rest}
    >
      <ConditionWrap condition={landscape} wrap={WrapComponent}>
        <div
          className={`relative overflow-hidden ${gradient ? "bg-gradient-to-b from-transparent to-black" : ""}`}
          style={{ aspectRatio: ratio }}
        >
          <div className="absolute top-0 left-0 right-0 bottom-0 z-0">
            {fallbackComponent}
          </div>
          {cover && (
            <Image
              className="absolute top-0 left-0 right-0 bottom-0 z-1 object-cover"
              dataSrc={cover}
              alt={coverAlt}
              title={coverTitle}
              cover
            />
          )}
          <div className="absolute top-0 left-0 right-0 bottom-0 z-2">
            {overlayComponent}
          </div>
          <div className="absolute top-0 left-0 right-0 bottom-0 z-3">
            {hoverComponent}
          </div>
        </div>
      </ConditionWrap>
      {landscape ? <div className="flex-1 min-w-0">{children}</div> : children}
    </div>
  );
}
