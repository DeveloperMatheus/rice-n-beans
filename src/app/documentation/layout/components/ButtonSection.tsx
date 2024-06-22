"use client";

import { Button, Card } from "~/components/Layout";
import { Text } from "~/components/Typography";

export const ButtonSection = () => {
  return (
    <section className="space-y-3 mt-5 lg:mt-8">
      <div className="flex items-center justify-start gap-3">
        <Text tag="h3">Button</Text>
        <Button>See the code</Button>
      </div>
      <Card className="block xl:inline-block space-x-5">
        <Button>Default</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
      </Card>
    </section>
  );
};
