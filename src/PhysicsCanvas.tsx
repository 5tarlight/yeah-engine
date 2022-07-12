import { FC, LegacyRef, MutableRefObject } from "react";

interface PhysicsCanvasProps {
  ref: LegacyRef<HTMLCanvasElement> | undefined;
}

/**
 * yeah-engine base canvas. Please make ref of this canvas
 * @param ref useRef<HTMLCanvasElement>() value. You can get canvas context from ref.getContext()
 * @returns HTML canvas Element
 */
const PhysicsCanvas: FC<PhysicsCanvasProps> = ({ ref }) => {
  return <canvas ref={ref}></canvas>;
};

export default PhysicsCanvas;
