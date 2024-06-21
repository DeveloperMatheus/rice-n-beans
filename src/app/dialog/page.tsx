"use client";

import { useConfirm } from "~/components/Dialog";
import { Button } from "~/components/Layout";

export default function DialogPage() {
  // const { open } = useModal();
  const { getConfirmation } = useConfirm();

  async function callmyDialog() {
    const res = await getConfirmation({
      header: "oi",
      content: "contentete",
      confirmText: "Of Course :)",
      rejectText: "No :(",
    });

    console.log(res);
  }

  return (
    <section>
      <Button onClick={() => callmyDialog()}>Call dialog</Button>
    </section>
  );
}
