import { getCode } from '~/services/code'
import { Text } from '~/components/Typography'
import { DocumentationSection } from '../../components/DocumentationSection'
import { Tab, TabList, TabPanel, Tabs } from '~/components/Tabs'
import { Label } from '~/components/Label'
import Link from 'next/link'
import { Radio } from '~/components/Radio'

const CODE_RADIO_VIEW = `<div className="flex items-center justify-start gap-5">
<div className="flex items-center justify-center">
  <Radio name="test-radio" id="test-radio1" />
  <Label className="ml-2" htmlFor="test-radio1">
    This is a Radio
  </Label>
</div>
<div className="flex items-center justify-center">
  <Radio name="test-radio" id="test-radio2" />
  <Label className="ml-2" htmlFor="test-radio2">
    Yes it is
  </Label>
</div>
<div className="flex items-center justify-center">
  <Radio name="test-radio" id="test-radio3" />
  <Label className="ml-2" htmlFor="test-radio3">
    Nahh it is not
  </Label>
</div>
</div>
`

export default async function DocumentationRadioPage() {
  const codeResponse = await getCode('Radio')

  return (
    <section>
      <div className="space-y-3">
        <Text tag="h1">Radio</Text>

        <Text tag="h2">
          Radio is a component made with the {'<input> HTML5 tag'}
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

      <DocumentationSection title="Radio" code={codeResponse.code}>
        <Tabs defaultValue="view" className="mt-3">
          <TabList>
            <Tab id="view">View</Tab>
            <Tab id="code">Code</Tab>
          </TabList>
          <TabPanel id="view">
            <div className="flex items-center justify-start gap-5">
              <div className="flex items-center justify-center">
                <Radio name="test-radio" id="test-radio1" />
                <Label className="ml-2" htmlFor="test-radio1">
                  This is a Radio
                </Label>
              </div>
              <div className="flex items-center justify-center">
                <Radio name="test-radio" id="test-radio2" />
                <Label className="ml-2" htmlFor="test-radio2">
                  Yes it is
                </Label>
              </div>
              <div className="flex items-center justify-center">
                <Radio name="test-radio" id="test-radio3" />
                <Label className="ml-2" htmlFor="test-radio3">
                  Nahh it is not
                </Label>
              </div>
            </div>
          </TabPanel>
          <TabPanel id="code" className="overflow-x-auto">
            <code className="whitespace-pre">{CODE_RADIO_VIEW}</code>
          </TabPanel>
        </Tabs>
      </DocumentationSection>
    </section>
  )
}
