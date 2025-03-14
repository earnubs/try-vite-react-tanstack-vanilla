import { Popover } from "radix-ui";

import { css } from "./../../../styled-system/css";
import classes from "./popover.module.css";

type Props = {
  trigger: React.ReactNode;
  children: React.ReactNode;
};

export default function MyPopover(props: Props) {
  return (
    <Popover.Root>
      <Popover.Trigger
        className={css({ fontSize: "2xl", fontWeight: "normal" })}
      >
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
