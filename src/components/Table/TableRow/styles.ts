import { cva } from "class-variance-authority";

export const tableRowStyles = cva("[&:not(:last-child)]:border-b");
