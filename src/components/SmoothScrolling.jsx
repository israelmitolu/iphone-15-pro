import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScrolling({ children }) {
  return (
    <ReactLenis root options={{ duration: 1, syncTouch: true }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
