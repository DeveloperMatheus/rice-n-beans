"use client";

import Link from "next/link";
import useConfirm from "~/components/Dialog";
import { Button } from "~/components/Layout";

export default function DesgracaPage() {
  const { getConfirmation, Dialog } = useConfirm();

  async function triggerDialog() {
    const status = await getConfirmation({
      title: "Boa noite?",
      description: "Boaa, noitee, caralho!",
      confirmText: "Confirma ae, porra!",
      cancelText: "Cancela, porra!",
      variant: "destructive",
    });
    console.log("🚀 ~ triggerDialog ~ status:", status);
  }

  return (
    <section>
      <Link href="/base-test">Go back</Link>

      <h1>Nested page through base layout</h1>
      <h1>Nested page through base layout</h1>
      <h1>Nested page through base layout</h1>
      <h1>Nested page through base layout</h1>
      <h1>Nested page through base layout</h1>
      <h1>Nested page through base layout</h1>
      <h1>Nested page through base layout</h1>
      <h1>Nested page through base layout</h1>
      <h1>Nested page through base layout</h1>
      <h1>Nested page through base layout</h1>
      <h1>Nested page through base layout</h1>
      <h1>Nested page through base layout</h1>
      <h1>Nested page through base layout</h1>
      <h1>Nested page through base layout</h1>
      <h1>Nested page through base layout</h1>
      <h1>Nested page through base layout</h1>
      <h1>Nested page through base layout</h1>
      <h1>Nested page through base layout</h1>
      <h1>Nested page through base layout</h1>
      <h1>Nested page through base layout</h1>
      <h1>Nested page through base layout</h1>
      <h1>Nested page through base layout</h1>
      <h1>Nested page through base layout</h1>
      <h1>Nested page through base layout</h1>
      <h1>Nested page through base layout</h1>
      <h1>Nested page through base layout</h1>
      <h1>Nested page through base layout</h1>
      <h1>Nested page through base layout</h1>
      <h1>Nested page through base layout</h1>
      <h1>Nested page through base layout</h1>
      <h1>Nested page through base layout</h1>
      <h1>Nested page through base layout</h1>
      <h1>Nested page through base layout</h1>
      <h1>Nested page through base layout</h1>
      <h1>Nested page through base layout</h1>
      <h1>Nested page through base layout</h1>

      <Button onClick={() => triggerDialog()}>Click me</Button>
      <Dialog />
    </section>
  );
}
