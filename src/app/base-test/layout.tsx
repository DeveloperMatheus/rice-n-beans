import { Base, BaseContainer, BaseDrawer, BaseHeader } from "~/components/Base";

export default function BaseTestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Base>
      <BaseDrawer>Test</BaseDrawer>
      <BaseContainer>
        <BaseHeader>Header</BaseHeader>
        <div className="px-3 pb-3 pt-1">{children}</div>
      </BaseContainer>
    </Base>
  );
}
