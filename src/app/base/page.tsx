import { Base, BaseContainer, BaseDrawer, BaseHeader } from "~/components/Base";

export default function Home() {
  return (
    <Base>
      <BaseDrawer>Test</BaseDrawer>
      <BaseContainer>
        <BaseHeader>Header</BaseHeader>
      </BaseContainer>
    </Base>
  );
}
