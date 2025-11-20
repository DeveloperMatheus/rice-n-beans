import { Text } from '~/components/typography'
import { Tab, TabList, TabPanel, Tabs } from '~/components/tabs'
import { DocumentationSection } from '~/app/documentation/components/DocumentationSection'
import { getComponentSource } from '~/services/file-service'
import { notFound } from 'next/navigation'
import { ComponentPreview } from '~/services/preview'

interface PageProps {
  params: Promise<{
    component: string
  }>
}

export default async function ComponentDocumentationPage({
  params
}: PageProps) {
  const { component } = await params

  const componentInfo = await getComponentSource(component)

  if (!componentInfo) {
    notFound()
  }

  const { source, example } = componentInfo

  return (
    <section>
      <div className="space-y-3">
        <Text tag="h1">{example.title}</Text>

        <Text tag="h2">{example.description}</Text>
      </div>

      <DocumentationSection title={example.title} code={source}>
        <Tabs defaultValue="view" className="mt-3">
          <TabList className="p-0">
            <Tab id="view">View</Tab>
            <Tab id="code">Code</Tab>
          </TabList>
          <TabPanel id="view">
            <ComponentPreview componentName={component} />
          </TabPanel>
          <TabPanel id="code" className="overflow-x-auto">
            <code className="whitespace-pre">{example.codeExample}</code>
          </TabPanel>
        </Tabs>
      </DocumentationSection>
    </section>
  )
}
