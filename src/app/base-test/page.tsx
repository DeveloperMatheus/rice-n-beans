import Link from "next/link";
import { Input } from "~/components/Form";

export default function Home() {
  return (
    <section>
      <Link href="/base-test/desgraca">Go to desgraca</Link>

      <Input />
    </section>
  );
}
