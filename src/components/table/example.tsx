import { Mail } from 'lucide-react'
import { Badge } from '~/components/badge'
import { Button } from '~/components/button'

import {
  Table,
  TableBody,
  TableData,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from '.'

const Example = () => {
  return (
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
  )
}

export { Example }
