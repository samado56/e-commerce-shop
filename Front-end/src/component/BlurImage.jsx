import { useState } from "react";

export default function BlurImage({ src, className, onClick }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={`data:image/webp;base64,${src}`}
      onLoad={() => setLoaded(true)}
      className={`rounded-lg transition-all duration-500 ${
        loaded ? "blur-0 scale-100" : "blur-sm scale-105"
      } ${className}`}
      onClick={onClick}
    />
  );
}
