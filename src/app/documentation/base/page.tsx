import { Text } from '~/components/Typography'
import { DocumentationSection } from '../components/DocumentationSection'
import { Tab, TabList, TabPanel, Tabs } from '~/components/Tabs'
import { DocumentationBaseExample } from './components/DocumentationBaseExample'

const BASE_CODE_STLYE = `'use client'

import { ComponentProps } from 'react'

import { VariantProps, cva } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'
import { Menu } from 'lucide-react'

import { Button } from '~/components/Layout'

const baseStyles = cva('flex', {
  variants: {
    orientation: {
      left: 'flex-row',
      right: 'flex-row-reverse'
    }
  }
})
const baseContainerStyles = 'h-screen w-full overflow-hidden'
const baseContentStyles =
  'bg-scaffold p-3 overflow-auto h-[calc(100vh-4.1875rem)] border-t lg:border-y border-muted'

const baseDrawerStyles = cva(
  'bg-scaffold p-3 fixed top-0 left-0 right-0 lg:sticky h-screen transition-all z-10 border border-muted overflow-x-hidden overflow-y-auto lg:overflow-y-auto lg:overflow-x-hidden',
  {
    variants: {
      isOpen: {
        true: 'w-full lg:w-72 lg:p-5',
        false: 'hidden lg:block lg:w-14'
      }
    }
  }
)
const baseHeaderStyles =
  'bg-scaffold w-full sticky top-0 shadow-md p-3 lg:border-t border-muted'

const baseToggleDrawerStyles = 'text-contrast text-2xl'
`

const BASE_CODE_COMPONENT = `
/* --- Base --- */
const Base = ({
  children,
  className,
  orientation = 'left',
  ...props
}: ComponentProps<'div'> & VariantProps<typeof baseStyles>) => {
  return (
    <div className={twMerge(baseStyles({ className, orientation }))} {...props}>
      {children}
    </div>
  )
}

Base.displayName = 'Base'

/* --- BaseContainer --- */
const BaseContainer = ({
  children,
  className,
  ...props
}: ComponentProps<'div'>) => (
  <div className={twMerge(baseContainerStyles, className)} {...props}>
    {children}
  </div>
)

BaseContainer.displayName = 'BaseContainer'

/* --- BaseContent --- */
const BaseContent = ({
  children,
  className,
  ...props
}: ComponentProps<'main'>) => (
  <main className={twMerge(baseContentStyles, className)} {...props}>
    {children}
  </main>
)

BaseContent.displayName = 'BaseContent'

/* --- BaseDrawer --- */
const BaseDrawer = ({
  children,
  className,
  isOpen,
  ...props
}: ComponentProps<'nav'> & VariantProps<typeof baseDrawerStyles>) => {
  return (
    <nav
      className={twMerge(baseDrawerStyles({ className, isOpen }))}
      {...props}
    >
      {children}
    </nav>
  )
}

BaseDrawer.displayName = 'BaseDrawer'

/* --- BaseHeader --- */
const BaseHeader = ({
  children,
  className,
  ...props
}: ComponentProps<'div'>) => {
  return (
    <div className={twMerge(baseHeaderStyles, className)} {...props}>
      {children}
    </div>
  )
}

BaseHeader.displayName = 'BaseHeader'

/* --- BaseToggleDrawer --- */
const BaseToggleDrawer = ({
  className,
  ...props
}: ComponentProps<'button'>) => {
  return (
    <Button
      variant="ghost"
      className={twMerge(baseToggleDrawerStyles, className)}
      {...props}
    >
      <Menu size={26} />
    </Button>
  )
}

BaseToggleDrawer.displayName = 'BaseToggleDrawer'

export {
  Base,
  BaseContainer,
  BaseContent,
  BaseDrawer,
  BaseHeader,
  BaseToggleDrawer
}
`

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
`

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
          The base is composed by the following components: {`<Base>`},{' '}
          {`<BaseContainer>`}, {`<BaseContent>`}, {`<BaseDrawer>`},{' '}
          {`<BaseHeader>`}, {`<BaseToggleDrawer>`}.
        </Text>
        <Text>
          The {`<Base>`} has a prop called <strong>orientation</strong>. This
          prop is meant to control the the position of the {`<BaseDrawer>`}, vs
          the other components (container, content). This prop value can be:{' '}
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
  )
}
