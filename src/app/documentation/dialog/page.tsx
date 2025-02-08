import { Text } from '~/components/Typography'
import { DocumentationSection } from '../components/DocumentationSection'
import { Tab, TabList, TabPanel, Tabs } from '~/components/Tabs'
import { DialogSection } from './components/DialogSection'
import { getCode } from '~/services/code'
import { getBaseUrl } from '~/utils/getBaseUrl'

const DIALOG_CODE_VIEW = `"use client";

import { useConfirm } from "~/components/Dialog";
import { Button } from "~/components/Layout";

export const DialogSection = () => {
  const { getConfirmation } = useConfirm();

  async function callDialog() {
    const res = await getConfirmation({
      header: "Commit Tax Fraud?",
      content:
        "Are you sure you wanna commit tax fraud? This action is irreversible. Take a look at the console on developer tools to see the result. Are you sure you wanna commit tax fraud? This action is irreversible. Take a look at the console on developer tools to see the result.",
      confirmText: "Of Course :)",
      rejectText: "No :(",
    });

    console.log("res => ", res);
  }

  return <Button onClick={() => callDialog()}>Call dialog</Button>;
};
`

export default async function DocumentationDialogPage() {
  const baseUrl = await getBaseUrl()
  const codeResponse = await getCode(baseUrl, 'Dialog')

  return (
    <section>
      <div className="space-y-3">
        <Text tag="h1">Dialog</Text>

        <Text tag="h2">
          Dialog is a service that provides a way to create confirmation dialog
          through the use of a hook (therefore, it is a client side code), that
          calls an awaitable Modal component.
        </Text>

        <Text tag="h3">
          Depending on where you click (outside the dialog or on the buttons),
          the promise will resolve with a boolean value.
        </Text>
      </div>

      <DocumentationSection title="Dialog" code={codeResponse.code}>
        <Tabs defaultValue="view" className="mt-3">
          <TabList>
            <Tab id="view">View</Tab>
            <Tab id="code">Code</Tab>
          </TabList>
          <TabPanel id="view">
            <DialogSection />
          </TabPanel>
          <TabPanel id="code" className="overflow-auto">
            <code className="whitespace-pre">{DIALOG_CODE_VIEW}</code>
          </TabPanel>
        </Tabs>
      </DocumentationSection>
    </section>
  )
}
