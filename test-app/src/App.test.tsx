import { render, screen } from "@testing-library/react";
import { PhysicsCanvas } from "yeah-engine";

test("Physical Canvas rendered", () => {
  const { container } = render(<PhysicsCanvas ref={null} />);

  expect(container.querySelector("canvas")).toBeDefined();
});
