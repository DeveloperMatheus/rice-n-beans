"use client";

import { useConfirm } from "~/components/Dialog";
import { Button } from "~/components/Layout";

export const DialogSection = () => {
  const { getConfirmation } = useConfirm();

  async function callDialog() {
    const res = await getConfirmation({
      header: "Commit Tax Fraud?",
      content:
        "Are you sure you wanna commit tax fraud? This action is irreversible. Take a look at the console on developer tools to see the result.",
      confirmText: "Of Course :)",
      rejectText: "No :(",
    });

    console.log("res => ", res);
  }

  return <Button onClick={() => callDialog()}>Call dialog</Button>;
};
