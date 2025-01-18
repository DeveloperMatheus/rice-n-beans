import { Text } from '~/components/Typography'
import { DocumentationSection } from '../components/DocumentationSection'
import { Tab, TabList, TabPanel, Tabs } from '~/components/Tabs'
import { Badge, Button, Card } from '~/components/Layout'
import { Search } from 'lucide-react'

const BUTTON_CODE_STYLE = `const buttonStyles = cva(
  'appearance-none font-sans rounded-lg disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-contrast hover:bg-primary/90 active:bg-primary/85',
        destructive:
          'bg-error text-white dark:text-contrast hover:bg-error/90 active:bg-error/85',
        outline:
          'border border-default text-contrast bg-accent hover:bg-accent/90 active:text-contrast/85',
        secondary:
          'bg-secondary text-contrast hover:bg-secondary/90 active:bg-secondary/80',
        ghost:
          'bg-transparent text-contrast hover:bg-secondary/90 active:bg-secondary/80',
        link: 'text-contrast underline-offset-4 hover:underline active:text-contrast/85'
      },
      size: {
        default: 'min-h-[2.625rem] px-3 py-2',
        sm: 'min-h-9 rounded-md px-3',
        lg: 'min-h-11 rounded-md px-8'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)`

const BADGE_CODE_STYLE = `const badgeStyles = cva(
  'px-2 py-1 inline-block text-center font-bold text-sm min-w-[3rem] min-h-[1.3rem] rounded-full select-none',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-contrast hover:bg-primary/90',
        destructive: 'bg-error text-white dark:text-contrast hover:bg-error/90',
        outline:
          'border border-default text-contrast bg-scaffold hover:bg-scaffold/90',
        secondary: 'bg-secondary text-contrast hover:bg-secondary/70'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)`

const CARD_CODE_STYLE = `const cardStyles = 'bg-accent border border-default rounded-lg p-3 shadow-sm'
`

const BUTTON_CODE_COMPONENT = `const Button = ({
  children,
  className,
  variant,
  size,
  ...props
}: ComponentProps<'button'> & VariantProps<typeof buttonStyles>) => (
  <button
    className={twMerge(buttonStyles({ className, variant, size }))}
    {...props}
  >
    {children}
  </button>
)

Button.displayName = 'Button'
`

const BADGE_CODE_COMPONENT = `const Badge = ({
  children,
  className,
  variant,
  ...props
}: ComponentProps<'span'> & VariantProps<typeof badgeStyles>) => (
  <span className={twMerge(badgeStyles({ className, variant }))} {...props}>
    {children}
  </span>
)

Badge.displayName = 'Badge'
`

const CARD_CODE_COMPONENT = `
const Card = ({ children, className, ...props }: ComponentProps<'div'>) => (
  <div className={twMerge(cardStyles, className)} {...props}>
    {children}
  </div>
)

Card.displayName = 'Card'
`

const BUTTON_CODE_VIEW = `<Text tag="h4">Variants</Text>
<div className="flex items-center justify-center flex-wrap gap-5">
  <Button>Default</Button>
  <Button variant="destructive">Destructive</Button>
  <Button variant="ghost">Ghost</Button>
  <Button variant="link">Link</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="secondary">Secondary</Button>
</div>
<Text tag="h4" className="mt-3">
  Size
</Text>
<div className="flex items-center justify-center flex-wrap gap-5">
  <Button size="sm">Small</Button>
  <Button size="default">Default</Button>
  <Button size="lg">Large</Button>
  <Button>
    <Search size={22} />
  </Button>
</div>
`

const BADGE_CODE_VIEW = `<Text tag="h4">Variants</Text>
<div className="flex items-center justify-center flex-wrap gap-5">
  <Badge>Defaut</Badge>
  <Badge variant="destructive">Destructive</Badge>
  <Badge variant="outline">Outline</Badge>
  <Badge variant="secondary">Secondary</Badge>
</div>
`

const CARD_CODE_VIEW = `<div className="w-fit">
  <Card>This is a card inside a tab</Card>
</div>
`

export default function DocumentationLayoutPage() {
  return (
    <section>
      <div className="space-y-3">
        <Text tag="h1">Layout</Text>

        <Text tag="h2">
          Layout is a group of components made to compose your... Layout
        </Text>
      </div>

      <DocumentationSection
        title="Button"
        codeStyle={BUTTON_CODE_STYLE}
        codeComponent={BUTTON_CODE_COMPONENT}
      >
        <Tabs defaultValue="view" className="mt-3">
          <TabList>
            <Tab id="view">View</Tab>
            <Tab id="code">Code</Tab>
          </TabList>
          <TabPanel id="view">
            <Text tag="h4">Variants</Text>
            <div className="flex items-center justify-center flex-wrap w-fit gap-5">
              <Button>Default</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="secondary">Secondary</Button>
            </div>

            <Text tag="h4" className="mt-3">
              Size
            </Text>
            <div className="flex items-center justify-center flex-wrap w-fit gap-5">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button aria-label="button-search">
                <Search size={22} />
              </Button>
            </div>
          </TabPanel>
          <TabPanel id="code" className="overflow-x-auto">
            <code className="whitespace-pre">{BUTTON_CODE_VIEW}</code>
          </TabPanel>
        </Tabs>
      </DocumentationSection>

      <DocumentationSection
        title="Badge"
        codeStyle={BADGE_CODE_STYLE}
        codeComponent={BADGE_CODE_COMPONENT}
      >
        <Tabs defaultValue="view" className="mt-3">
          <TabList>
            <Tab id="view">View</Tab>
            <Tab id="code">Code</Tab>
          </TabList>
          <TabPanel id="view">
            <Text tag="h4">Variants</Text>
            <div className="flex items-center justify-center flex-wrap w-fit gap-5">
              <Badge>Defaut</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="secondary">Secondary</Badge>
            </div>
          </TabPanel>
          <TabPanel id="code" className="overflow-x-auto">
            <code className="whitespace-pre">{BADGE_CODE_VIEW}</code>
          </TabPanel>
        </Tabs>
      </DocumentationSection>

      <DocumentationSection
        title="Card"
        codeStyle={CARD_CODE_STYLE}
        codeComponent={CARD_CODE_COMPONENT}
      >
        <Tabs defaultValue="view" className="mt-3">
          <TabList>
            <Tab id="view">View</Tab>
            <Tab id="code">Code</Tab>
          </TabList>
          <TabPanel id="view">
            <div className="w-fit">
              <Card>This is a card inside a tab</Card>
            </div>
          </TabPanel>
          <TabPanel id="code" className="overflow-x-auto">
            <code className="whitespace-pre">{CARD_CODE_VIEW}</code>
          </TabPanel>
        </Tabs>
      </DocumentationSection>
    </section>
  )
}
