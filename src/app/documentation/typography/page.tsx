import { Text } from '~/components/Typography'
import { DocumentationSection } from '../components/DocumentationSection'
import { Tab, TabList, TabPanel, Tabs } from '~/components/Tabs'

const CODE_TYPOGRAPHY_STLYES = `import React from 'react'

import { twMerge } from 'tailwind-merge'
import { VariantProps, cva } from 'class-variance-authority'

const textStyles = cva('font-sans text-contrast', {
  variants: {
    tag: {
      h1: 'text-3xl lg:text-4xl font-bold',
      h2: 'text-2xl lg:text-3xl font-bold',
      h3: 'text-xl lg:text-2xl font-bold',
      h4: 'text-lg lg:text-xl font-bold',
      h5: 'text-base lg:text-lg font-bold',
      h6: 'text-sm lg:text-base font-bold',
      p: 'text-sm lg:text-base font-normal',
      span: 'text-sm lg:text-base font-normal'
    }
  }
})
`

const CODE_TYPOGRAPHY_COMPONENT = `
type TextProps = {
  children: React.ReactNode
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  className?: string
} & VariantProps<typeof textStyles>

export const Text = ({ tag = 'p', children, className }: TextProps) =>
  React.createElement(
    tag,
    { className: twMerge(textStyles({ className, tag })) },
    children
  )
`

const CODE_TYPOGRAPHY_VIEW = `<Text tag="h1">This is a heading 1</Text>
<Text tag="h2">This is a heading 2</Text>
<Text tag="h3">This is a heading 3</Text>
<Text tag="h4">This is a heading 4</Text>
<Text tag="h5">This is a heading 5</Text>
<Text tag="h6">This is a heading 6</Text>
<Text tag="p">This is a paragraph</Text>
<Text tag="span">This is a span</Text>
`

export default function DocumentationTypographyPage() {
  return (
    <section>
      <div className="space-y-3">
        <Text tag="h1">Typography</Text>

        <Text tag="h2">
          Typography is a set of components made to help you style your text
        </Text>

        <Text>
          The table is composed by using the createElement function from React.
          This way we can render the component with the tag that we want.
        </Text>
      </div>

      <DocumentationSection
        title="Typography"
        codeStyle={CODE_TYPOGRAPHY_STLYES}
        codeComponent={CODE_TYPOGRAPHY_COMPONENT}
      >
        <Tabs defaultValue="view" className="mt-5">
          <TabList>
            <Tab id="view">View</Tab>
            <Tab id="code">Code</Tab>
          </TabList>

          <TabPanel id="view" className="px-0">
            <Text tag="h1">This is a heading 1</Text>
            <Text tag="h2">This is a heading 2</Text>
            <Text tag="h3">This is a heading 3</Text>
            <Text tag="h4">This is a heading 4</Text>
            <Text tag="h5">This is a heading 5</Text>
            <Text tag="h6">This is a heading 6</Text>
            <Text tag="p">This is a paragraph</Text>
            <Text tag="span">This is a span</Text>
          </TabPanel>
          <TabPanel id="code" className="overflow-x-auto">
            <code className="whitespace-pre">{CODE_TYPOGRAPHY_VIEW}</code>
          </TabPanel>
        </Tabs>
      </DocumentationSection>
    </section>
  )
}
