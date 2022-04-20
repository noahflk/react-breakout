import { useEffect, useState } from "react";

const useViewport = (): number => {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    // call immediately on load so that we have an initial value
    onResize();
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return width;
};

export { useViewport };
