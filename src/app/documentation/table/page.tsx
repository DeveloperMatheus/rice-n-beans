import { Text } from '~/components/Typography'
import { DocumentationSection } from '../components/DocumentationSection'
import { Badge } from '~/components/Badge'
import { Button } from '~/components/Button'
import { Card } from '~/components/Card'
import {
  Table,
  TableBody,
  TableData,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from '~/components/Table'

import { Mail } from 'lucide-react'
import { Tab, TabList, TabPanel, Tabs } from '~/components/Tabs'
import { getCode } from '~/services/code'
import Link from 'next/link'
import { getBaseUrl } from '~/utils/getBaseUrl'

const CODE_TABLE_VIEW = `<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Action</TableHead>
      <TableHead>Agiota</TableHead>
      <TableHead>Estelionatario</TableHead>
      <TableHead>Piramideiro Tiger Fortune</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableData className="flex items-center justify-center gap-3">
        <Button size="sm">Collect Debt</Button>
        <Button size="sm">
          <Mail size={26} />
        </Button>
      </TableData>
      <TableData>R$ 100,00</TableData>
      <TableData>
        <Badge variant="destructive">Dead</Badge>
      </TableData>
      <TableData>
        <Badge>Alive</Badge>
      </TableData>
    </TableRow>
    <TableRow>
      <TableData className="flex items-center justify-center gap-3">
        <Button size="sm">Collect Debt</Button>
        <Button size="sm">
          <Mail size={26} />
        </Button>
      </TableData>
      <TableData>R$ 100,00</TableData>
      <TableData>
        <Badge variant="destructive">Dead</Badge>
      </TableData>
      <TableData>
        <Badge>Alive</Badge>
      </TableData>
    </TableRow>
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableData>Total</TableData>
      <TableData>R$ 200,00</TableData>
      <TableData>2 Dead</TableData>
      <TableData>2 Alive</TableData>
    </TableRow>
  </TableFooter>
</Table>
`
export default async function DocumentationTablePage() {
  const baseUrl = await getBaseUrl()
  const codeResponse = await getCode(baseUrl, 'Table')

  return (
    <section>
      <div className="space-y-3">
        <Text tag="h1">Table</Text>

        <Text tag="h2">
          Table is a component that allows you to display data in a structured
          way.
        </Text>

        <Text tag="h3">
          See the api reference here:{' '}
          <Link
            target="_blank"
            href="https://developer.mozilla.org/es/docs/Web/HTML/Element/table"
          >
            https://developer.mozilla.org/es/docs/Web/HTML/Element/table
          </Link>
        </Text>

        <Text>
          The table is composed by the following components: {`<Table>`},{' '}
          {`<TableHeader>`}, {`<TableHead>`}, {`<TableBody>`}, {`<TableRow>`}{' '}
          {`<TableData>`}, and {`<TableFooter>`}.
        </Text>
      </div>

      <DocumentationSection title="Table" code={codeResponse.code}>
        <Tabs defaultValue="view" className="mt-5">
          <TabList>
            <Tab id="view">View</Tab>
            <Tab id="code">Code</Tab>
          </TabList>

          <TabPanel id="view" className="px-0 overflow-x-auto">
            <Card className="w-fit">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Action</TableHead>
                    <TableHead>Agiota</TableHead>
                    <TableHead>Estelionatario</TableHead>
                    <TableHead>Piramideiro Tiger Fortune</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableData className="flex items-center justify-center gap-3">
                      <Button size="sm">Collect Debt</Button>
                      <Button aria-label="button-message" size="sm">
                        <Mail size={26} />
                      </Button>
                    </TableData>
                    <TableData>R$ 100,00</TableData>
                    <TableData>
                      <Badge variant="destructive">Dead</Badge>
                    </TableData>
                    <TableData>
                      <Badge>Alive</Badge>
                    </TableData>
                  </TableRow>
                  <TableRow>
                    <TableData className="flex items-center justify-center gap-3">
                      <Button size="sm">Collect Debt</Button>
                      <Button aria-label="button-message" size="sm">
                        <Mail size={26} />
                      </Button>
                    </TableData>
                    <TableData>R$ 100,00</TableData>
                    <TableData>
                      <Badge variant="destructive">Dead</Badge>
                    </TableData>
                    <TableData>
                      <Badge>Alive</Badge>
                    </TableData>
                  </TableRow>
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableData>Total</TableData>
                    <TableData>R$ 200,00</TableData>
                    <TableData>2 Dead</TableData>
                    <TableData>2 Alive</TableData>
                  </TableRow>
                </TableFooter>
              </Table>
            </Card>
          </TabPanel>
          <TabPanel id="code" className="overflow-x-auto">
            <code className="whitespace-pre">{CODE_TABLE_VIEW}</code>
          </TabPanel>
        </Tabs>
      </DocumentationSection>
    </section>
  )
}
