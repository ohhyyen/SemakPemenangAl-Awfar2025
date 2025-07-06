"use client"

import * as React from "react"
import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels"

import { cn } from "@/lib/utils"

const ResizablePanelGroup = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof PanelGroup>) => (
  <PanelGroup
    className={cn(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      className
    )}
    {...props}
  />
)

const ResizablePanel = React.forwardRef<
  React.ElementRef<typeof Panel>,
  React.ComponentPropsWithoutRef<typeof Panel>
>(({ className, ...props }, ref) => (
  <Panel
    ref={ref}
    className={cn(className)}
    {...props}
  />
))
ResizablePanel.displayName = "ResizablePanel"

interface ResizableHandleProps extends React.ComponentPropsWithoutRef<typeof PanelResizeHandle> {
  withHandle?: boolean;
}

const ResizableHandle = React.forwardRef<
  React.ElementRef<typeof PanelResizeHandle>,
  ResizableHandleProps
>(({ className, withHandle, ...props }, ref) => (
  <PanelResizeHandle
    {...({ ref, ...props } as React.ComponentProps<typeof PanelResizeHandle>)} // Membetulkan ralat jenis 'ref'
    className={cn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:h-24 after:w-1 after:bg-primary after:content-[''] data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-24 data-[panel-group-direction=vertical]:after:-translate-x-1/2 data-[panel-group-direction=vertical]:after:translate-y-1/2 data-[panel-group-direction=vertical]:after:rotate-90 data-[panel-group-direction=vertical]:after:bg-primary data-[panel-group-direction=vertical]:after:content-['']",
      withHandle
        ? "after:bg-primary after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:h-4 after:w-4 after:bg-background after:border after:border-border after:shadow-md"
        : "after:bg-transparent",
      className
    )}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-4 items-center justify-center rounded-full border bg-background">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-2.5 w-2.5"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </div>
    )}
  </PanelResizeHandle>
))
ResizableHandle.displayName = "ResizableHandle"

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }