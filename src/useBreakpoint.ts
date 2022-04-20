import { useViewport } from "./useViewport";

type Breakpoints = {
  sm: number;
  md: number;
  lg: number;
  xl: number;
};

const breakpoints: Breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

const useBreakpoint = (breakpoint: keyof Breakpoints | number): boolean => {
  const width = useViewport();

  if (typeof breakpoint === "number") {
    return width > breakpoint;
  }

  const minWidth = breakpoints[breakpoint];
  return width > minWidth;
};

export { useBreakpoint };
