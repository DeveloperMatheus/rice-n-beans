import { cva } from "class-variance-authority";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import {
  CheckboxProps,
  DatePickerProps,
  ErrorMessageProps,
  InputProps,
  LabelProps,
  RadioProps,
  RangeProps,
  SelectProps,
  SwitchProps,
} from "./types";

export const inputStyles = cva(
  "appearance-none font-sans w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 ring-offset-white file:border-0 file:bg-transparent file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300"
);

export const labelStyles = cva(
  "inline-block font-sans font-bold text-primary select-none"
);

export const checkboxStyles = cva(
  "relative bg-white dark:bg-zinc-950 rounded-md h-5 w-5 cursor-pointer appearance-none border border-zinc-200 dark:border-zinc-800 checked:before:absolute checked:before:top-1/2 checked:before:left-1/2 checked:before:w-[0.8rem] checked:before:h-[0.8rem] checked:before:leading-none checked:before:-translate-x-1/2 checked:before:-translate-y-1/2 checked:before:content-checkIcon checked:before:brightness-0 dark:checked:before:brightness-200 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:ring-offset-zinc-950 dark:focus:ring-zinc-300"
);

export const radioStyles = cva(
  "appearance-none cursor-pointer w-5 h-5 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-full relative checked:before:absolute checked:before:-translate-y-1/2 checked:before:-translate-x-1/2 checked:before:top-1/2 checked:before:left-1/2 checked:before:content-[''] checked:before:w-[0.6em] checked:before:h-[0.6em] checked:before:rounded-full checked:before:bg-black dark:checked:before:bg-white focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:ring-offset-zinc-950 dark:focus:ring-zinc-300 disabled:cursor-not-allowed disabled:opacity-50"
);

export const selectStyles = cva(
  "w-full font-sans appearance-none rounded-lg border border-zinc-200 bg-white bg-[url('/icon/arrow.svg')] bg-no-repeat bg-[position:center_right_0.75rem] bg-[length:0.8rem] pl-3 pr-8 py-2 ring-offset-white placeholder:text-zinc-500 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:ring-offset-zinc-950 dark:focus:ring-zinc-300 dark:placeholder:text-zinc-400"
);

export const switchStyles = cva(
  "appearance-none cursor-pointer w-12 h-6 dark:border-zinc-800 rounded-full relative bg-zinc-200 dark:bg-zinc-950 checked:bg-black checked:dark:bg-white before:w-[0.8rem] before:h-[0.8rem] before:bg-white dark:checked:before:bg-black before:rounded-full before:absolute before:top-1/2 before:-translate-y-1/2 before:translate-x-1 checked:before:translate-x-[1.95rem] before:transition-all focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:ring-offset-zinc-950 dark:focus:ring-zinc-300 disabled:opacity-30 disabled:cursor-not-allowed"
);

export const rangeStyles = cva(
  "appearance-none focus:outline-none cursor-pointer h-2 border border-zinc-200 dark:bg-zinc-950 dark:border-zinc-800 rounded-full disabled:cursor-not-allowed disabled:opacity-50 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:dark:bg-white [&::-webkit-slider-thumb]:border-0 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:focus:outline-none [&::-webkit-slider-thumb]:focus:ring-2 [&::-webkit-slider-thumb]:focus:ring-offset-2 [&::-webkit-slider-thumb]:focus:ring-black [&::-webkit-slider-thumb]:focus:dark:ring-zinc-300 [&::-webkit-slider-thumb]:focus:dark:ring-offset-zinc-800 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:bg-black [&::-moz-range-thumb]:dark:bg-white [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:focus:outline-none [&::-moz-range-thumb]:focus:ring-2 [&::-moz-range-thumb]:focus:ring-offset-2 [&::-moz-range-thumb]:focus:ring-black [&::-moz-range-thumb]:focus:dark:ring-zinc-300 [&::-moz-range-thumb]:focus:dark:ring-offset-zinc-800"
);

export const datePickerStyles = cva(
  "appearance-none font-sans w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 ring-offset-white file:border-0 file:bg-transparent file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300"
);

export const errorMessageStyles = cva("text-red-500 font-sans");

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <input
      className={twMerge(inputStyles({ className }))}
      ref={ref}
      {...props}
    />
  )
);

Input.displayName = "Input";

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ children, className, ...props }, ref) => (
    <label className={twMerge(labelStyles({ className }))} ref={ref} {...props}>
      {children}
    </label>
  )
);

Label.displayName = "Label";

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, ...props }, ref) => (
    <input
      type="checkbox"
      className={twMerge(checkboxStyles({ className }))}
      ref={ref}
      {...props}
    />
  )
);

Checkbox.displayName = "Checkbox";

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ className, ...props }, ref) => (
    <input
      type="radio"
      className={twMerge(radioStyles({ className }))}
      ref={ref}
      {...props}
    />
  )
);

Radio.displayName = "Radio";

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, ...props }, ref) => (
    <select
      className={twMerge(selectStyles({ className }))}
      ref={ref}
      {...props}
    >
      {props.children}
    </select>
  )
);

Select.displayName = "Select";

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, ...props }, ref) => (
    <input
      type="checkbox"
      role="switch"
      className={twMerge(switchStyles({ className }))}
      ref={ref}
      {...props}
    />
  )
);

Switch.displayName = "Switch";

export const Range = forwardRef<HTMLInputElement, RangeProps>(
  ({ className, ...props }, ref) => (
    <input
      type="range"
      className={twMerge(rangeStyles({ className }))}
      ref={ref}
      {...props}
    />
  )
);

Range.displayName = "Range";

/*
Possible values:
- type="date" -> 2024-02-06 (yyyy-mm-dd)
- type="datetime-local" -> 2024-02-06T02:36 (yyyy-mm-ddThh:mm)
- type="time" -> 02:36 (hh:mm)
*/
export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  ({ className, type = "date", ...props }, ref) => (
    <input
      type={type}
      pattern="\d{4}-\d{2}-\d{2}"
      className={twMerge(datePickerStyles({ className }))}
      ref={ref}
      {...props}
    />
  )
);

DatePicker.displayName = "DatePicker";

export const ErrorMessage = forwardRef<HTMLParagraphElement, ErrorMessageProps>(
  ({ children, className, ...props }, ref) => (
    <p
      className={twMerge(errorMessageStyles({ className }))}
      ref={ref}
      {...props}
    >
      {children}
    </p>
  )
);

ErrorMessage.displayName = "ErrorMessage";
