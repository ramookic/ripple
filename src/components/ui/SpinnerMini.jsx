import { ring2 } from "ldrs";

function SpinnerMini({ color, size }) {
  ring2.register();

  return (
    <l-ring-2
      size={size || 16}
      stroke="2"
      stroke-length="0.25"
      bg-opacity="0.1"
      speed="0.8"
      color={color || "var(--color-grey-0)"}
    ></l-ring-2>
  );
}

export default SpinnerMini;
