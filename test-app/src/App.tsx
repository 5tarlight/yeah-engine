import React, { useRef } from "react";
import { PhysicsCanvas } from "yeah-engine";

function App() {
  const ref = useRef<HTMLCanvasElement>(null);

  return <PhysicsCanvas ref={ref} />;
}

export default App;
