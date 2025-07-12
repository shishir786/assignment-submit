import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs transition duration-200 ease-in-out hover:bg-primary/90 hover:scale-105 hover:shadow-md",
        destructive:
          "bg-destructive text-white shadow-xs transition duration-200 ease-in-out hover:bg-destructive/90 hover:scale-105 hover:shadow-md focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs transition duration-200 ease-in-out hover:bg-accent hover:text-accent-foreground hover:scale-105 hover:shadow-md dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs transition duration-200 ease-in-out hover:bg-secondary/80 hover:scale-105 hover:shadow-md",
        ghost:
          "transition duration-200 ease-in-out hover:bg-accent hover:text-accent-foreground hover:scale-105 hover:shadow-md dark:hover:bg-accent/50",
        link:
          "text-primary underline-offset-4 transition duration-200 ease-in-out hover:underline hover:scale-105",

        success:
          "bg-green-600 text-white shadow-xs transition duration-200 ease-in-out hover:bg-green-700 hover:scale-105 hover:shadow-md focus-visible:ring-green-200 dark:focus-visible:ring-green-400",
        warning:
          "bg-yellow-500 text-black shadow-xs transition duration-200 ease-in-out hover:bg-yellow-600 hover:scale-105 hover:shadow-md focus-visible:ring-yellow-200 dark:focus-visible:ring-yellow-400",
        info:
          "bg-blue-500 text-white shadow-xs transition duration-200 ease-in-out hover:bg-blue-600 hover:scale-105 hover:shadow-md focus-visible:ring-blue-200 dark:focus-visible:ring-blue-400",
        disabled:
          "bg-gray-200 text-gray-400 shadow-none cursor-not-allowed opacity-60",
        subtle:
          "bg-transparent text-primary-foreground shadow-none transition duration-200 ease-in-out hover:bg-primary/5 hover:scale-105",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        xs: "h-7 px-2 text-xs rounded has-[>svg]:px-1.5",
        xl: "h-12 px-8 text-lg rounded-lg has-[>svg]:px-6",
        pill: "h-9 px-6 rounded-full",
        square: "h-9 w-9 flex items-center justify-center rounded",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
