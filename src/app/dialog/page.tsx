"use client";

import useConfirm from "~/components/Dialog";
import { Button } from "~/components/Layout";

export default function DialogPage() {
  const { getConfirmation, Dialog } = useConfirm();

  async function callmyDialog() {
    const res = await getConfirmation({
      title: "Boa noite?",
      description: "Boaa, noitee, caralho!",
      confirmText: "Confirma ae, porra!",
      cancelText: "Cancela, porra!",
      variant: "destructive",
    });

    console.log(res);
  }

  return (
    <section>
      <Button onClick={() => callmyDialog()}>Call dialog</Button>

      <Dialog />
    </section>
  );
}
