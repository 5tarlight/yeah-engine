import { FC, MutableRefObject } from "react";

interface PhysicsCanvasProps {
  ref: MutableRefObject<HTMLCanvasElement>;
}

/**
 * yeah-engine base canvas. Please make ref of this canvas
 * @param param0 useRef<HTMLCanvasElement>() value. You can get canvas context from ref.getContext()
 * @returns HTML canvas Element
 */
const PhysicsCanvas: FC<PhysicsCanvasProps> = ({ ref }) => {
  return <canvas ref={ref}></canvas>;
};

export default PhysicsCanvas;
