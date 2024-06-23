import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const badgeStyles =
  "inline-block text-center font-bold text-sm min-w-[3rem] min-h-[1.3rem] rounded-full select-none bg-zinc-900 text-zinc-50 hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900";
const buttonStyles = cva(
  "appearance-none font-sans rounded-lg disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-zinc-900 text-zinc-50 hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:ring-offset-zinc-950 dark:focus:ring-zinc-300",
        destructive:
          "bg-red-500 text-zinc-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-zinc-50 dark:hover:bg-red-900/90 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:ring-offset-zinc-950 dark:focus:ring-red-900",
        outline:
          "border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:ring-offset-zinc-950 dark:focus:ring-zinc-300",
        secondary:
          "bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:ring-offset-zinc-950 dark:focus:ring-zinc-300",
        ghost:
          "text-black dark:text-white hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:ring-offset-zinc-950 dark:focus:ring-zinc-300",
        link: "text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50",
      },
      size: {
        default: "min-h-[2.625rem] px-3 py-2",
        sm: "min-h-9 rounded-md px-3",
        lg: "min-h-11 rounded-md px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
const cardStyles =
  "bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg p-3 shadow-sm";

/* --- Badge --- */
export const Badge = forwardRef<HTMLSpanElement, ComponentProps<"span">>(
  ({ children, className, ...props }, ref) => (
    <span className={twMerge(badgeStyles, className)} ref={ref} {...props}>
      {children}
    </span>
  )
);

Badge.displayName = "Badge";

/* --- Button --- */
export const Button = forwardRef<
  HTMLButtonElement,
  ComponentProps<"button"> & VariantProps<typeof buttonStyles>
>(({ children, className, variant, size, ...props }, ref) => (
  <button
    className={twMerge(buttonStyles({ className, variant, size }))}
    ref={ref}
    {...props}
  >
    {children}
  </button>
));

Button.displayName = "Button";

/* --- Card --- */
export const Card = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ children, className, ...props }, ref) => (
    <div className={twMerge(cardStyles, className)} ref={ref} {...props}>
      {children}
    </div>
  )
);

Card.displayName = "Card";
