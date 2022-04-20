<h2 align="center">
  React Breakout
</h2>

<p align="center">
  Lightweight hook for responsive breakpoints in your React components
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/react-breakout"><img src="https://img.shields.io/npm/v/react-breakout.svg?style=flat-square"></a>
  <a href="https://github.com/noahflk/react-breakout/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/react-breakout.svg?style=flat-square"></a>
</p>

---

## Installation

### NPM

```
npm install react-breakout
```

### Yarn

```
yarn add react-breakout
```

## Usage

The `useBreakpoint` hook returns `true` when the window width is higher than the selected width.

```jsx
import { useBreakpoint } from "react-breakout";

const App = () => {
  const isDesktop = useBreakpoint("md");

  return (
    <div>
      <p>{isDesktop ? "Yes" : "No"}</p>
    </div>
  );
};
```

The `useBreakpoint` hook accepts either a number as the pixel width threshold or on of the following predefined breakpoints:

```js
const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};
```

## API

### useBreakpoint

```js
const isAboveThreshold = useBreakpoint("lg");
// OR
const isAboveThreshold = useBreakpoint(1024);
```

#### Returns

- `isAboveThreshold: boolean`
  - True if the window width is above the selected width

#### Arguments

- `breakpoint: "sm" | "md" | "lg" | "xl" | number`
  - Threshold for window size breakpoint
