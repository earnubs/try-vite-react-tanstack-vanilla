import { Popover } from "radix-ui";

import classes from "./popover.module.css";
import { container } from "./popover.css.ts";

type Props = {
  trigger: React.ReactNode;
  children: React.ReactNode;
};

export default function MyPopover(props: Props) {
  return (
    <Popover.Root>
      <Popover.Trigger className={container}>
        {props.trigger}
        <div className={classes.foo}>Boo</div>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content>
          {props.children}
          <Popover.Arrow />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
