import { useEffect, useRef } from "react";

export function Image({ src, alt, className, width, height }) {
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const handleError = () => {
      const w = width || img.clientWidth || 300;
      const h = height || img.clientHeight || 200;
      img.src = `https://placehold.co/${w}x${h}/DEDEDE/555555?text=Image+Unavailable`;
      img.alt = "Image unavailable";
      img.classList.remove("opacity-0");
      img.classList.add("opacity-100", "error-image");
    };

    img.addEventListener("error", handleError);
    return () => img.removeEventListener("error", handleError);
  }, [width, height]);

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className={`transition-opacity duration-300 ${className || ""}`}
      loading="lazy"
      width={width}
      height={height}
    />
  );
}
