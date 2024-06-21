import Link from "next/link";
import { Input } from "~/components/Form";

export default function DocumentationPage() {
  return (
    <section>
      <Link href="/base-test/base-nested">Go to nested base page</Link>

      <Input />
    </section>
  );
}
