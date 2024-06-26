import { Text } from "~/components/Typography";
import { DocumentationSection } from "../components/DocumentationSection";
import { Badge, Button, Card } from "~/components/Layout";
import {
  Table,
  TableBody,
  TableData,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/Table";

import { Mail } from "lucide-react";
import { Tab, TabList, TabPanel, Tabs } from "~/components/Tabs";

const CODE_TABLE_STLYES = `
import { ComponentProps, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const tableStyles = "border-collapse text-black dark:text-zinc-200";
const tableDataStyles = "px-2 py-1 text-center";
const tableRowStyles =
  "[&:not(:last-child)]:border-b border-zinc-200 dark:border-zinc-800";
const tableHeadStyles = "px-2 py-1 text-center";
const tableHeaderStyles =
  "border-b border-zinc-200 dark:border-zinc-800 text-center";
const tableFooterStyles =
  "border-t border-zinc-200 dark:border-zinc-800 font-bold";
`;

const CODE_TABLE_COMPONENT = `
export const Table = forwardRef<HTMLTableElement, ComponentProps<"table">>(
  ({ children, className, ...props }, ref) => (
    <table className={twMerge(tableStyles, className)} ref={ref} {...props}>
      {children}
    </table>
  )
);

Table.displayName = "Table";

export const TableBody = forwardRef<
  HTMLTableSectionElement,
  ComponentProps<"tbody">
>(({ children, className, ...props }, ref) => (
  <tbody className={twMerge(className)} ref={ref} {...props}>
    {children}
  </tbody>
));

TableBody.displayName = "TableBody";

export const TableData = forwardRef<HTMLTableCellElement, ComponentProps<"td">>(
  ({ children, className, ...props }, ref) => (
    <td className={twMerge(tableDataStyles, className)} ref={ref} {...props}>
      {children}
    </td>
  )
);

TableData.displayName = "TableData";

export const TableRow = forwardRef<HTMLTableRowElement, ComponentProps<"tr">>(
  ({ children, className, ...props }, ref) => (
    <tr className={twMerge(tableRowStyles, className)} ref={ref} {...props}>
      {children}
    </tr>
  )
);

TableRow.displayName = "TableRow";

export const TableHead = forwardRef<HTMLTableCellElement, ComponentProps<"th">>(
  ({ children, className, ...props }, ref) => (
    <th className={twMerge(tableHeadStyles, className)} ref={ref} {...props}>
      {children}
    </th>
  )
);

TableHead.displayName = "TableHead";

export const TableHeader = forwardRef<
  HTMLTableSectionElement,
  ComponentProps<"thead">
>(({ children, className, ...props }, ref) => (
  <thead className={twMerge(tableHeaderStyles, className)} ref={ref} {...props}>
    {children}
  </thead>
));

TableHeader.displayName = "TableHeader";

export const TableFooter = forwardRef<
  HTMLTableSectionElement,
  ComponentProps<"tfoot">
>(({ children, className, ...props }, ref) => (
  <tfoot className={twMerge(tableFooterStyles, className)} ref={ref} {...props}>
    {children}
  </tfoot>
));

TableFooter.displayName = "TableFooter";
`;

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
`;
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
          The table is composed by the following components: {`<Table>`},{" "}
          {`<TableHeader>`}, {`<TableHead>`}, {`<TableBody>`}, {`<TableRow>`}{" "}
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

          <TabPanel id="view" className="px-0">
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
            </Card>
          </TabPanel>
          <TabPanel id="code" className="whitespace-pre">
            <code>{CODE_TABLE_VIEW}</code>
          </TabPanel>
        </Tabs>
      </DocumentationSection>
    </section>
  );
}
