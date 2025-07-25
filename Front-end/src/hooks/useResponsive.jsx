import { useLayoutEffect, useState } from "react";

export default function useResopnsive() {
  const [size, setSize] = useState({ width: 0 });

  function handleResize() {
    const size = { width: window.innerWidth };
    setSize(size);
  }

  useLayoutEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return size;
}
