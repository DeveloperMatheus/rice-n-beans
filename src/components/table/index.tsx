import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

const tableStyles = tv({
  slots: {
    wrapper: 'border-collapse text-canvas-fg',
    body: '',
    data: 'px-2 py-1 text-center',
    row: 'border-line not-last:border-b',
    head: 'px-2 py-1 text-center',
    header: 'border-b border-line text-center',
    footer: 'border-t border-line font-bold'
  }
})

const { wrapper, body, data, row, head, header, footer } = tableStyles()

/* --- Table --- */
const Table = ({ className, ...props }: ComponentProps<'table'>) => (
  <table className={wrapper({ className })} {...props} />
)

/* --- TableBody --- */
const TableBody = ({ className, ...props }: ComponentProps<'tbody'>) => (
  <tbody className={body({ className })} {...props} />
)

/* --- TableData --- */
const TableData = ({ className, ...props }: ComponentProps<'td'>) => (
  <td className={data({ className })} {...props} />
)

/* --- TableRow --- */
const TableRow = ({ className, ...props }: ComponentProps<'tr'>) => (
  <tr className={row({ className })} {...props} />
)

/* --- TableHead --- */
const TableHead = ({
  className,
  scope = 'col',
  ...props
}: ComponentProps<'th'>) => (
  <th className={head({ className })} scope={scope} {...props} />
)

/* --- TableHeader --- */
const TableHeader = ({ className, ...props }: ComponentProps<'thead'>) => (
  <thead className={header({ className })} {...props} />
)

/* --- TableFooter --- */
const TableFooter = ({ className, ...props }: ComponentProps<'tfoot'>) => (
  <tfoot className={footer({ className })} {...props} />
)

export {
  Table,
  TableBody,
  TableData,
  TableRow,
  TableHead,
  TableHeader,
  TableFooter
}
