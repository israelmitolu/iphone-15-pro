import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScrolling({ children }) {
  return (
    <ReactLenis root options={{ duration: 3, syncTouch: true }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
