import { Base, BaseContainer, BaseDrawer, BaseHeader } from "~/components/Base";

export default function BaseTestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Base orientation="right">
      <BaseDrawer>Test</BaseDrawer>
      <BaseContainer>
        <BaseHeader>Header</BaseHeader>
        <div className="px-3 pb-3 pt-1 bg-blue-800">{children}</div>
      </BaseContainer>
    </Base>
  );
}
