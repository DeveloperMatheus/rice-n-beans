import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

const tableStyles = tv({
  slots: {
    wrapper: 'text-scaffold-contrast border-collapse',
    body: 'w-auto',
    data: 'px-2 py-1 text-center',
    row: 'border-default not-last:border-b',
    head: 'px-2 py-1 text-center',
    header: 'border-default border-b text-center',
    footer: 'border-default border-t font-bold'
  }
})

const { wrapper, body, data, row, head, header, footer } = tableStyles()

/* --- Table --- */
const Table = ({ children, className, ...props }: ComponentProps<'table'>) => (
  <table className={wrapper({ className })} {...props}>
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
  <tbody className={body({ className })} {...props}>
    {children}
  </tbody>
)

TableBody.displayName = 'TableBody'

/* --- TableData --- */
const TableData = ({ children, className, ...props }: ComponentProps<'td'>) => (
  <td className={data({ className })} {...props}>
    {children}
  </td>
)

TableData.displayName = 'TableData'

/* --- TableRow --- */
const TableRow = ({ children, className, ...props }: ComponentProps<'tr'>) => (
  <tr className={row({ className })} {...props}>
    {children}
  </tr>
)

TableRow.displayName = 'TableRow'

/* --- TableHead --- */
const TableHead = ({ children, className, ...props }: ComponentProps<'th'>) => (
  <th className={head({ className })} {...props}>
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
  <thead className={header({ className })} {...props}>
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
  <tfoot className={footer({ className })} {...props}>
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
