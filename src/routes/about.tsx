import { createFileRoute } from "@tanstack/react-router";

import Popover from "@/components/popover/Popover";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="p-2">
      Hello from About!
      <Popover trigger="Hello">Hello world</Popover>
    </div>
  );
}
