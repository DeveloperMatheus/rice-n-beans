import { render, screen } from '@testing-library/react'
import {
  Table,
  TableBody,
  TableData,
  TableRow,
  TableHead,
  TableHeader,
  TableFooter
} from '..'

describe('Table Components', () => {
  // --- Table ---
  describe('Table Component', () => {
    it('should render the Table component with default styles', () => {
      render(
        <Table>
          <tbody />
        </Table>
      )
      const table = screen.getByRole('table')
      expect(table).toHaveClass('border-collapse')
      expect(table).toHaveClass('text-scaffold-contrast')
    })

    it('should merge custom class names', () => {
      render(
        <Table className="custom-table">
          <tbody />
        </Table>
      )
      const table = screen.getByRole('table')
      expect(table).toHaveClass('custom-table')
      expect(table).toHaveClass('border-collapse')
    })
  })

  // --- TableBody ---
  describe('TableBody Component', () => {
    it('should render the TableBody component', () => {
      render(
        <Table>
          <TableBody>
            <tr />
          </TableBody>
        </Table>
      )
      const tbody = document.querySelector('tbody')
      expect(tbody).toBeInTheDocument()
    })

    it('should merge custom class names', () => {
      render(
        <Table>
          <TableBody className="custom-body">
            <tr />
          </TableBody>
        </Table>
      )
      const tbody = document.querySelector('tbody')
      expect(tbody).toHaveClass('custom-body')
    })
  })

  // --- TableData ---
  describe('TableData Component', () => {
    it('should render the TableData component with default styles', () => {
      render(
        <Table>
          <tbody>
            <tr>
              <TableData>Test</TableData>
            </tr>
          </tbody>
        </Table>
      )
      const td = screen.getByRole('cell')
      expect(td).toHaveClass('px-2')
      expect(td).toHaveClass('py-1')
      expect(td).toHaveClass('text-center')
    })

    it('should merge custom class names', () => {
      render(
        <Table>
          <tbody>
            <tr>
              <TableData className="custom-data">Test</TableData>
            </tr>
          </tbody>
        </Table>
      )
      const td = screen.getByRole('cell')
      expect(td).toHaveClass('custom-data')
      expect(td).toHaveClass('px-2')
    })
  })

  // --- TableRow ---
  describe('TableRow Component', () => {
    it('should render the TableRow component with default styles', () => {
      render(
        <Table>
          <tbody>
            <TableRow>
              <td />
            </TableRow>
          </tbody>
        </Table>
      )
      const tr = screen.getByRole('row')
      expect(tr).toHaveClass('not-last:border-b')
      expect(tr).toHaveClass('border-default')
    })

    it('should merge custom class names', () => {
      render(
        <Table>
          <tbody>
            <TableRow className="custom-row">
              <td />
            </TableRow>
          </tbody>
        </Table>
      )
      const tr = screen.getByRole('row')
      expect(tr).toHaveClass('custom-row')
      expect(tr).toHaveClass('border-default')
    })
  })

  // --- TableHead ---
  describe('TableHead Component', () => {
    it('should render the TableHead component with default styles', () => {
      render(
        <Table>
          <thead>
            <tr>
              <TableHead>Header</TableHead>
            </tr>
          </thead>
        </Table>
      )
      const th = screen.getByRole('columnheader')
      expect(th).toHaveClass('px-2')
      expect(th).toHaveClass('py-1')
      expect(th).toHaveClass('text-center')
    })

    it('should merge custom class names', () => {
      render(
        <Table>
          <thead>
            <tr>
              <TableHead className="custom-head">Header</TableHead>
            </tr>
          </thead>
        </Table>
      )
      const th = screen.getByRole('columnheader')
      expect(th).toHaveClass('custom-head')
      expect(th).toHaveClass('text-center')
    })
  })

  // --- TableHeader ---
  describe('TableHeader Component', () => {
    it('should render the TableHeader component with default styles', () => {
      render(
        <Table>
          <TableHeader>
            <tr>
              <th />
            </tr>
          </TableHeader>
        </Table>
      )
      const thead = document.querySelector('thead')
      expect(thead).toHaveClass('border-b')
      expect(thead).toHaveClass('border-default')
      expect(thead).toHaveClass('text-center')
    })

    it('should merge custom class names', () => {
      render(
        <Table>
          <TableHeader className="custom-header">
            <tr>
              <th />
            </tr>
          </TableHeader>
        </Table>
      )
      const thead = document.querySelector('thead')
      expect(thead).toHaveClass('custom-header')
      expect(thead).toHaveClass('border-b')
    })
  })

  // --- TableFooter ---
  describe('TableFooter Component', () => {
    it('should render the TableFooter component with default styles', () => {
      render(
        <Table>
          <TableFooter>
            <tr>
              <td />
            </tr>
          </TableFooter>
        </Table>
      )
      const tfoot = document.querySelector('tfoot')
      expect(tfoot).toHaveClass('border-t')
      expect(tfoot).toHaveClass('border-default')
      expect(tfoot).toHaveClass('font-bold')
    })

    it('should merge custom class names', () => {
      render(
        <Table>
          <TableFooter className="custom-footer">
            <tr>
              <td />
            </tr>
          </TableFooter>
        </Table>
      )
      const tfoot = document.querySelector('tfoot')
      expect(tfoot).toHaveClass('custom-footer')
      expect(tfoot).toHaveClass('font-bold')
    })
  })
})
