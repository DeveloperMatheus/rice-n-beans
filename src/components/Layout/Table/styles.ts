import { cva } from "class-variance-authority";

export const tableStyles = cva("border-collapse");
export const tableHeaderStyles = cva("bg-slate-50 border-b text-center");
export const tableBodyStyles = cva("");
export const tableRowStyles = cva("[&:not(:last-child)]:border-b");
export const tableDataStyles = cva("px-2 py-1 text-center");
export const tableHeadStyles = cva("px-2 py-1 text-center");
export const tableFooterStyles = cva("bg-slate-50 border-t font-bold");