import { Base, BaseDrawer, BaseHeader } from "~/components/Base";

export default function Home() {
  return (
    <Base>
      <BaseDrawer>Test</BaseDrawer>
      <div className="h-screen w-full">
        <BaseHeader>Header</BaseHeader>
      </div>
    </Base>
  );
}
