import { Text } from '~/components/Typography'
import { DocumentationSection } from '../components/DocumentationSection'
import { Tab, TabList, TabPanel, Tabs } from '~/components/Tabs'
import Link from 'next/link'
import { Button } from '~/components/Button'
import { BUTTON_CODE } from '~/components/Button/mockCode'
import { Search } from 'lucide-react'

export default async function DocumentationButtonPage() {
  const CODE_BUTTON_VIEW = `<Text tag="h4">Variants</Text>
<div className="flex items-center justify-start flex-wrap gap-5">
  <Button>Default</Button>
  <Button variant="destructive">Destructive</Button>
  <Button variant="ghost">Ghost</Button>
  <Button variant="link">Link</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="secondary">Secondary</Button>
</div>
<Text tag="h4" className="mt-3">
  Size
</Text>
<div className="flex items-center justify-start flex-wrap gap-5">
  <Button size="sm">Small</Button>
  <Button size="default">Default</Button>
  <Button size="lg">Large</Button>
  <Button>
    <Search size={22} />
  </Button>
</div>
`
  return (
    <section>
      <div className="space-y-3">
        <Text tag="h1">Button</Text>

        <Text tag="h2">
          Button is a component made with the {'<button> HTML5 tag'}
        </Text>

        <Text tag="h3">
          See the api reference here:{' '}
          <Link
            target="_blank"
            href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button"
          >
            https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
          </Link>
        </Text>
      </div>

      <DocumentationSection title="Button" code={BUTTON_CODE}>
        <Tabs defaultValue="view" className="mt-3">
          <TabList>
            <Tab id="view">View</Tab>
            <Tab id="code">Code</Tab>
          </TabList>
          <TabPanel id="view">
            <Text tag="h4">Variants</Text>
            <div className="flex items-center justify-start flex-wrap gap-5">
              <Button>Default</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="secondary">Secondary</Button>
            </div>
            <Text tag="h4" className="mt-3">
              Size
            </Text>
            <div className="flex items-center justify-start flex-wrap gap-5">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button>
                <Search size={22} />
              </Button>
            </div>
          </TabPanel>
          <TabPanel id="code" className="overflow-x-auto">
            <code className="whitespace-pre">{CODE_BUTTON_VIEW}</code>
          </TabPanel>
        </Tabs>
      </DocumentationSection>
    </section>
  )
}
