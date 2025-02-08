import { Text } from '~/components/Typography'
import { DocumentationSection } from '../components/DocumentationSection'
import { Tab, TabList, TabPanel, Tabs } from '~/components/Tabs'
import { getCode } from '~/services/code'

const CODE_TYPOGRAPHY_VIEW = `<Text tag="h1">This is a heading 1</Text>
<Text tag="h2">This is a heading 2</Text>
<Text tag="h3">This is a heading 3</Text>
<Text tag="h4">This is a heading 4</Text>
<Text tag="h5">This is a heading 5</Text>
<Text tag="h6">This is a heading 6</Text>
<Text tag="p">This is a paragraph</Text>
<Text variant="muted">This is a paragraph (with muted styles)</Text>
<Text tag="span">This is a span</Text>
`

export default async function DocumentationTypographyPage() {
  const codeResponse = await getCode('Typography')

  return (
    <section>
      <div className="space-y-3">
        <Text tag="h1">Typography</Text>

        <Text tag="h2">
          Typography is a set of components made to help you style your text
        </Text>

        <Text tag="h3">
          It ranges between the {'<h1>'} to {'<h6>'}, also {'<p>'} and{' '}
          {'<span>'} tags.
        </Text>
      </div>

      <DocumentationSection title="Typography" code={codeResponse.code}>
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
            <Text variant="muted">This is a paragraph (with muted styles)</Text>
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
