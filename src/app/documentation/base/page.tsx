import { Text } from "~/components/Typography";
import { DocumentationSection } from "../components/DocumentationSection";
import { Tab, TabList, TabPanel, Tabs } from "~/components/Tabs";
import { DocumentationBaseExample } from "./components/DocumentationBaseExample";

const BASE_CODE_STLYE = `"use client";

import { ComponentProps, forwardRef } from "react";

import { VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { Menu } from "lucide-react";

import { Button } from "~/components/Layout";

const baseStyles = cva("flex", {
  variants: {
    orientation: {
      left: "flex-row",
      right: "flex-row-reverse",
    },
  },
});
const baseContainerStyles = cva("h-screen w-full");
const baseContentStyles = cva(
  "bg-white dark:bg-zinc-900 px-3 py-2 overflow-y-auto h-screen h-[calc(100vh-4.5625rem)] border-t lg:border-y border-zinc-200 dark:border-zinc-800"
);
const baseDrawerStyles = cva(
  "p-3 bg-white dark:bg-zinc-900 fixed top-0 left-0 right-0 lg:sticky h-screen transition-all z-10 border border-zinc-200 dark:border-zinc-800 overflow-x-hidden overflow-y-auto lg:overflow-y-auto lg:overflow-x-hidden",
  {
    variants: {
      isOpen: {
        true: "w-full lg:w-72 lg:p-5",
        false: "hidden lg:block lg:w-14",
      },
    },
  }
);
const baseHeaderStyles = cva(
  "bg-white dark:bg-zinc-900 w-full sticky top-0 shadow-md p-3 lg:border-t border-zinc-200 dark:border-zinc-800"
);
const baseCloseDrawerStyles = cva("text-black dark:text-white text-2xl");
`;

const BASE_CODE_COMPONENT = `
export const Base = forwardRef<
  HTMLDivElement,
  ComponentProps<"div"> & VariantProps<typeof baseStyles>
>(({ children, className, orientation = "left", ...props }, ref) => {
  return (
    <div
      className={twMerge(baseStyles({ className, orientation }))}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
});

Base.displayName = "Base";

export const BaseContainer = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ children, className, ...props }, ref) => (
    <div
      className={twMerge(baseContainerStyles({ className }))}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
);

BaseContainer.displayName = "BaseContainer";

export const BaseContent = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ children, className, ...props }, ref) => (
    <div
      className={twMerge(baseContentStyles({ className }))}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
);

BaseContent.displayName = "BaseContent";

export const BaseDrawer = forwardRef<
  HTMLElement,
  ComponentProps<"nav"> & VariantProps<typeof baseDrawerStyles>
>(({ children, className, isOpen, ...props }, ref) => {
  return (
    <nav
      className={twMerge(baseDrawerStyles({ className, isOpen }))}
      ref={ref}
      {...props}
    >
      {children}
    </nav>
  );
});

BaseDrawer.displayName = "BaseDrawer";

export const BaseHeader = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        className={twMerge(baseHeaderStyles({ className }))}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

BaseHeader.displayName = "BaseHeader";

export const BaseToggleDrawer = forwardRef<
  HTMLButtonElement,
  ComponentProps<"button">
>(({ className, ...props }, ref) => {
  return (
    <Button
      variant="ghost"
      className={twMerge(baseCloseDrawerStyles({ className }))}
      ref={ref}
      {...props}
    >
      <Menu size={32} />
    </Button>
  );
});

BaseToggleDrawer.displayName = "BaseToggleDrawer";
`;

const BASE_CODE_VIEW = `"use client";

import { useState } from "react";
import {
  Base,
  BaseContainer,
  BaseContent,
  BaseDrawer,
  BaseHeader,
  BaseToggleDrawer,
} from "~/components/Base";

import { Text } from "~/components/Typography";

export const DocumentationBaseExample = () => {
  const [isOpen, setOpen] = useState(false);

  function toggleDrawer() {
    setOpen(!isOpen);
  }

  return (
    <Base>
      <BaseDrawer isOpen={isOpen}>
        <BaseToggleDrawer
          className="lg:hidden"
          onClick={() => toggleDrawer()}
        />
      </BaseDrawer>
      <BaseContainer>
        <BaseHeader>
          <BaseToggleDrawer onClick={() => toggleDrawer()} />
        </BaseHeader>
        <BaseContent>
          <Text>Your content here</Text>
        </BaseContent>
      </BaseContainer>
    </Base>
  );
};
`;

export default function DocumentationBasePage() {
  return (
    <section>
      <div className="space-y-3">
        <Text tag="h1">Base</Text>

        <Text tag="h2">
          Base is a group of components made to compose your scaffolding layout
          with a side navigation drawer.
        </Text>

        <Text>
          The base is composed by the following components: {`<Base>`},{" "}
          {`<BaseContainer>`}, {`<BaseContent>`}, {`<BaseDrawer>`},{" "}
          {`<BaseHeader>`}, {`<BaseToggleDrawer>`}.
        </Text>
        <Text>
          The {`<Base>`} has a prop called <strong>orientation</strong>. This
          prop is meant to control the the position of the {`<BaseDrawer>`}, vs
          the other components (container, content). This prop value can be:{" "}
          <strong>{'"left" | "right"'}</strong>.
        </Text>
        <Text>
          The {`<BaseDrawer>`} has a prop called <strong>isOpen</strong>, which
          is a <strong>boolean</strong>. This prop is meant to control the
          drawer state. How you will control it is up to you.
        </Text>
        <Text>
          The {`<BaseToggleDrawer>`} is just a button that has an icon inside,
          and it is meant to be used to toggle the drawer.
        </Text>
      </div>

      <DocumentationSection
        title="Base"
        codeStyle={BASE_CODE_STLYE}
        codeComponent={BASE_CODE_COMPONENT}
      >
        <Tabs defaultValue="view" className="mt-3">
          <TabList className="p-0">
            <Tab id="view">View</Tab>
            <Tab id="code">Code</Tab>
          </TabList>
          <TabPanel id="view" className="overflow-hidden">
            <DocumentationBaseExample />
          </TabPanel>
          <TabPanel id="code" className="overflow-x-auto">
            <code className="whitespace-pre">{BASE_CODE_VIEW}</code>
          </TabPanel>
        </Tabs>
      </DocumentationSection>
    </section>
  );
}
