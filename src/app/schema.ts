"use client";

import * as z from "zod";

export const testDateFormSchema = z.object({
  testDate: z.string().min(10, {
    message: "This field is required",
  }),
});
