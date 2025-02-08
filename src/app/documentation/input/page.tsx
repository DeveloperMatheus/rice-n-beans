import { getCode } from '~/services/code'
import { Text } from '~/components/Typography'
import { DocumentationSection } from '../components/DocumentationSection'
import { Tab, TabList, TabPanel, Tabs } from '~/components/Tabs'
import Link from 'next/link'
import { Input } from '~/components/Input'
import { getBaseUrl } from '~/utils/getBaseUrl'

export default async function DocumentationInputPage() {
  const baseUrl = await getBaseUrl()
  const codeResponse = await getCode(baseUrl, 'Input')

  const CODE_INPUT_VIEW = `<div className="space-y-3">
  <Input placeholder="This is an input, type something!" />
  <Input placeholder="Oops! I have an error!" isInvalid />
</div>
`

  return (
    <section>
      <div className="space-y-3">
        <Text tag="h1">Input</Text>

        <Text tag="h2">
          Input is a component made with the {'<input> HTML5 tag'}
        </Text>

        <Text tag="h3">
          See the api reference here:{' '}
          <Link
            target="_blank"
            href="https://developer.mozilla.org/es/docs/Web/HTML/Element/input"
          >
            https://developer.mozilla.org/es/docs/Web/HTML/Element/input
          </Link>
        </Text>
      </div>

      <DocumentationSection title="Input" code={codeResponse.code}>
        <Tabs defaultValue="view" className="mt-3">
          <TabList>
            <Tab id="view">View</Tab>
            <Tab id="code">Code</Tab>
          </TabList>
          <TabPanel id="view">
            <div className="space-y-3">
              <Input placeholder="This is an input, type something!" />
              <Input placeholder="Oops! I have an error!" isInvalid />
            </div>
          </TabPanel>
          <TabPanel id="code" className="overflow-x-auto">
            <code>{CODE_INPUT_VIEW}</code>
          </TabPanel>
        </Tabs>
      </DocumentationSection>
    </section>
  )
}
