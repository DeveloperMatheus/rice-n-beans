import { render, screen, fireEvent } from '@testing-library/react'
import { Tabs, TabList, Tab, TabPanel } from '..'

beforeAll(() => {
  window.HTMLElement.prototype.scrollIntoView = jest.fn()
})

describe('Tabs Component', () => {
  it('renders Tabs, TabList, Tab, and TabPanel correctly', () => {
    render(
      <Tabs defaultValue="tab1">
        <TabList>
          <Tab id="tab1">Tab 1</Tab>
          <Tab id="tab2">Tab 2</Tab>
        </TabList>
        <TabPanel id="tab1">Panel 1</TabPanel>
        <TabPanel id="tab2">Panel 2</TabPanel>
      </Tabs>
    )

    expect(screen.getByRole('tablist')).toBeInTheDocument()
    expect(screen.getByText('Tab 1')).toBeInTheDocument()
    expect(screen.getByText('Tab 2')).toBeInTheDocument()
    expect(screen.getByText('Panel 1')).toBeInTheDocument()
    expect(screen.queryByText('Panel 2')).not.toBeInTheDocument()
  })

  it('switches tabs on click', () => {
    render(
      <Tabs defaultValue="tab1">
        <TabList>
          <Tab id="tab1">Tab 1</Tab>
          <Tab id="tab2">Tab 2</Tab>
        </TabList>
        <TabPanel id="tab1">Panel 1</TabPanel>
        <TabPanel id="tab2">Panel 2</TabPanel>
      </Tabs>
    )

    fireEvent.click(screen.getByText('Tab 2'))
    expect(screen.getByText('Panel 2')).toBeInTheDocument()
    expect(screen.queryByText('Panel 1')).not.toBeInTheDocument()
  })

  it('navigates tabs using arrow keys', () => {
    render(
      <Tabs defaultValue="tab1">
        <TabList>
          <Tab id="tab1">Tab 1</Tab>
          <Tab id="tab2">Tab 2</Tab>
        </TabList>
        <TabPanel id="tab1">Panel 1</TabPanel>
        <TabPanel id="tab2">Panel 2</TabPanel>
      </Tabs>
    )

    const tab1 = screen.getByText('Tab 1')
    const tab2 = screen.getByText('Tab 2')

    tab1.focus()
    fireEvent.keyDown(tab1, { key: 'ArrowRight' })
    expect(tab2).toHaveFocus()

    fireEvent.keyDown(tab2, { key: 'ArrowLeft' })
    expect(tab1).toHaveFocus()
  })

  it('sets correct aria attributes based on active tab', () => {
    render(
      <Tabs defaultValue="tab1">
        <TabList>
          <Tab id="tab1">Tab 1</Tab>
          <Tab id="tab2">Tab 2</Tab>
        </TabList>
        <TabPanel id="tab1">Panel 1</TabPanel>
        <TabPanel id="tab2">Panel 2</TabPanel>
      </Tabs>
    )

    const tab1 = screen.getByText('Tab 1')
    const tab2 = screen.getByText('Tab 2')

    expect(tab1).toHaveAttribute('aria-selected', 'true')
    expect(tab2).toHaveAttribute('aria-selected', 'false')

    fireEvent.click(tab2)
    expect(tab1).toHaveAttribute('aria-selected', 'false')
    expect(tab2).toHaveAttribute('aria-selected', 'true')
  })
})
