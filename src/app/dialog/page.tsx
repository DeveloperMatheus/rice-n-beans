"use client";

import { useModal } from "~/components/Dialog";
import { Button } from "~/components/Layout";

export default function DialogPage() {
  const { open } = useModal();

  async function callmyDialog() {
    const res = await open({
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
