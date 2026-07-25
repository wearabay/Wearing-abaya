"use client";

import * as React from "react";
import { Command as CommandPrimitive } from "cmdk";
import { CheckIcon, SearchIcon } from "lucide-react";

import { cn } from "@/lib/utils";


const Command = ({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive>) => {
  return (
    <CommandPrimitive
      className={cn(
        "flex w-full flex-col overflow-hidden rounded-xl bg-white text-neutral-900",
        className
      )}
      {...props}
    />
  );
};


const CommandInput = ({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Input>) => {
  return (
    <div className="flex items-center gap-2 border-b px-3 py-2">
      <SearchIcon className="h-4 w-4 text-neutral-400" />

      <CommandPrimitive.Input
        className={cn(
          "w-full bg-transparent text-sm outline-none placeholder:text-neutral-400",
          className
        )}
        {...props}
      />
    </div>
  );
};


const CommandList = ({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.List>) => {
  return (
    <CommandPrimitive.List
      className={cn(
        "max-h-72 overflow-y-auto p-2",
        className
      )}
      {...props}
    />
  );
};


const CommandEmpty = ({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Empty>) => {
  return (
    <CommandPrimitive.Empty
      className={cn(
        "py-6 text-center text-sm text-neutral-500",
        className
      )}
      {...props}
    />
  );
};


const CommandGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Group>) => {
  return (
    <CommandPrimitive.Group
      className={cn("p-1", className)}
      {...props}
    />
  );
};


const CommandItem = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Item>) => {
  return (
    <CommandPrimitive.Item
      className={cn(
        "flex cursor-pointer items-center rounded-lg px-3 py-2 text-sm outline-none data-[selected=true]:bg-neutral-100",
        className
      )}
      {...props}
    >
      {children}

      <CheckIcon className="ml-auto h-4 w-4 opacity-0" />
    </CommandPrimitive.Item>
  );
};


const CommandSeparator = ({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Separator>) => {
  return (
    <CommandPrimitive.Separator
      className={cn("my-1 h-px bg-neutral-200", className)}
      {...props}
    />
  );
};


const CommandShortcut = ({
  className,
  ...props
}: React.ComponentProps<"span">) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs text-neutral-400",
        className
      )}
      {...props}
    />
  );
};


export {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
};