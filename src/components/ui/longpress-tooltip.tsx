import type {TriggerProps, TriggerRef} from "@rn-primitives/tooltip";
import * as TooltipPrimitive from "@rn-primitives/tooltip";
import * as React from "react";

type LongPressTriggerProps = TriggerProps & {delayLongPress?: number};

const TooltipLongPressTrigger = React.forwardRef(
  (
    {
      children,
      delayLongPress = 300,
      onPress,
      onLongPress,
      ...props
    }: LongPressTriggerProps,
    ref: React.Ref<TriggerRef>,
  ) => {
    const triggerRef = React.useRef<TriggerRef>(null);

    React.useImperativeHandle(ref, () => triggerRef.current as TriggerRef);

    return (
      <TooltipPrimitive.Trigger
        ref={triggerRef}
        {...props}
        onPress={(e) => {
          triggerRef.current?.close();
          onPress?.(e);
        }}
        onLongPress={(e) => {
          triggerRef.current?.open();
          onLongPress?.(e);
        }}
        delayLongPress={delayLongPress}
      >
        {children}
      </TooltipPrimitive.Trigger>
    );
  },
);

// @ts-ignore — displayName is valid on forwardRef result at runtime
TooltipLongPressTrigger.displayName = "TooltipLongPressTrigger";

export {TooltipLongPressTrigger};
export type {LongPressTriggerProps};
