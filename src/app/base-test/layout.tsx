import {
  Base,
  BaseToggleDrawer,
  BaseContainer,
  BaseDrawer,
  BaseHeader,
  BaseContent,
} from "~/components/Base";

export default function BaseTestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Base>
      <BaseDrawer>
        <BaseToggleDrawer className="block lg:hidden text-black" />
      </BaseDrawer>
      <BaseContainer>
        <BaseHeader className="text-black">
          <BaseToggleDrawer />
        </BaseHeader>
        <BaseContent>{children}</BaseContent>
      </BaseContainer>
    </Base>
  );
}
