import { Text } from '~/components/Typography'
import { DocumentationSection } from '../components/DocumentationSection'
import { Badge, Button, Card } from '~/components/Layout'
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

const CODE_TABLE_STLYES = `import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

const tableStyles = 'border-collapse text-contrast'
const tableDataStyles = 'px-2 py-1 text-center'
const tableRowStyles = '[&:not(:last-child)]:border-b border-default'
const tableHeadStyles = 'px-2 py-1 text-center'
const tableHeaderStyles = 'border-b border-default text-center'
const tableFooterStyles = 'border-t border-default font-bold'
`

const CODE_TABLE_COMPONENT = `
/* --- Table --- */
const Table = ({ children, className, ...props }: ComponentProps<'table'>) => (
  <table className={twMerge(tableStyles, className)} {...props}>
    {children}
  </table>
)

Table.displayName = 'Table'

/* --- TableBody --- */
const TableBody = ({
  children,
  className,
  ...props
}: ComponentProps<'tbody'>) => (
  <tbody className={twMerge(className)} {...props}>
    {children}
  </tbody>
)

TableBody.displayName = 'TableBody'

/* --- TableData --- */
const TableData = ({ children, className, ...props }: ComponentProps<'td'>) => (
  <td className={twMerge(tableDataStyles, className)} {...props}>
    {children}
  </td>
)

TableData.displayName = 'TableData'

/* --- TableRow --- */
const TableRow = ({ children, className, ...props }: ComponentProps<'tr'>) => (
  <tr className={twMerge(tableRowStyles, className)} {...props}>
    {children}
  </tr>
)

TableRow.displayName = 'TableRow'

/* --- TableHead --- */
const TableHead = ({ children, className, ...props }: ComponentProps<'th'>) => (
  <th className={twMerge(tableHeadStyles, className)} {...props}>
    {children}
  </th>
)

TableHead.displayName = 'TableHead'

/* --- TableHeader --- */
const TableHeader = ({
  children,
  className,
  ...props
}: ComponentProps<'thead'>) => (
  <thead className={twMerge(tableHeaderStyles, className)} {...props}>
    {children}
  </thead>
)

TableHeader.displayName = 'TableHeader'

/* --- TableFooter --- */
const TableFooter = ({
  children,
  className,
  ...props
}: ComponentProps<'tfoot'>) => (
  <tfoot className={twMerge(tableFooterStyles, className)} {...props}>
    {children}
  </tfoot>
)

TableFooter.displayName = 'TableFooter'

export {
  Table,
  TableBody,
  TableData,
  TableRow,
  TableHead,
  TableHeader,
  TableFooter
}
`

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
export default function DocumentationTablePage() {
  return (
    <section>
      <div className="space-y-3">
        <Text tag="h1">Table</Text>

        <Text tag="h2">
          Table is a component that allows you to display data in a structured
          way.
        </Text>

        <Text>
          The table is composed by the following components: {`<Table>`},{' '}
          {`<TableHeader>`}, {`<TableHead>`}, {`<TableBody>`}, {`<TableRow>`}{' '}
          {`<TableData>`}, and {`<TableFooter>`}.
        </Text>
      </div>

      <DocumentationSection
        title="Table"
        codeStyle={CODE_TABLE_STLYES}
        codeComponent={CODE_TABLE_COMPONENT}
      >
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
