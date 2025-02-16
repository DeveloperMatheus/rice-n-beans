import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

const tableStyles = 'text-contrast border-collapse'
const tableDataStyles = 'px-2 py-1 text-center'
const tableRowStyles = 'border-default not-last:border-b'
const tableHeadStyles = 'px-2 py-1 text-center'
const tableHeaderStyles = 'border-default border-b text-center'
const tableFooterStyles = 'border-default border-t font-bold'

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
