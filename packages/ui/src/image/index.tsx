"use client";
import React, { useState, isValidElement, cloneElement } from "react";
import { clsx } from "clsx";

interface ImageProps {
  src?: string;
  dataSrc?: string;
  alt?: string;
  title?: string;
  cover?: boolean;
  contain?: boolean;
  fallback?: string;
  fallbackComponent?: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export default function Image({
  src,
  dataSrc,
  alt,
  title,
  cover,
  contain,
  fallback,
  fallbackComponent,
  className,
  ...rest
}: ImageProps) {
  const [status, setStatus] = useState<"normal" | "error">("normal");
  const isError = status === "error";
  const isServerSide = typeof window === "undefined";

  const onError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    if (!fallback) {
      e.currentTarget.style.opacity = "0";
    }
    setStatus("error");
  };

  const imageClassname = clsx(
    "w-full h-auto align-middle", // Default styles from the original CImageDefault
    {
      "object-cover h-full": cover, // If cover is true
      "object-contain h-full": contain, // If contain is true
    },
    className,
    "lazyload"
  );

  if (
    (!(dataSrc || src) || isError) &&
    fallbackComponent &&
    isValidElement(fallbackComponent)
  ) {
    return cloneElement(fallbackComponent as React.ReactElement, {
      className: clsx(imageClassname),
      alt: alt,
      title: title,
      ...rest,
    });
  }

  return (
    <img
      className={imageClassname}
      {...((isError && fallback) || !(dataSrc || src)
        ? { src: fallback }
        : { src: src })}
      {...(dataSrc
        ? isServerSide
          ? { src: dataSrc }
          : { "data-src": dataSrc }
        : {})}
      alt={alt}
      title={title}
      onError={onError}
      {...rest}
    />
  );
}
