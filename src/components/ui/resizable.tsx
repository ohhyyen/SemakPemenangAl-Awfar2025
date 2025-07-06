import React from "react"; // Added React import
import {
  Panel,
  PanelGroup,
  PanelProps,
  PanelResizeHandle,
} from "react-resizable-panels";

const ResizablePanelGroup = PanelGroup;

const ResizablePanel = Panel;

const ResizableHandle = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof PanelResizeHandle>
>(({ className, ...props }, ref) => (
  <PanelResizeHandle
    ref={ref}
    className={cn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:left-1/2 after:h-24 after:w-1 after:-translate-x-1/2 after:rounded-full after:bg-border after:transition-all after:hover:bg-primary [&[data-panel-group-direction=vertical]]:h-px [&[data-panel-group-direction=vertical]]:w-full [&[data-panel-group-direction=vertical]]:after:left-0 [&[data-panel-group-direction=vertical]]:after:h-1 [&[data-panel-group-direction=vertical]]:after:w-24 [&[data-panel-group-direction=vertical]]:after:-translate-y-1/2 [&[data-panel-group-direction=vertical]]:after:translate-x-0",
      className,
    )}
    {...props}
  />
));

ResizableHandle.displayName = "ResizableHandle";

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };