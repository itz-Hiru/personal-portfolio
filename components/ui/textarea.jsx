import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded border-2 border-white/10 bg-transparent px-4 py-5 text-base placeholder:text-white/45 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00aaff] focus-visible:ring-offset-0",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
