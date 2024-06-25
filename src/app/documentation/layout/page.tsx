import { Text } from "~/components/Typography";
import { DocumentationSection } from "../components/DocumentationSection";
import { Tab, TabList, TabPanel, Tabs } from "~/components/Tabs";
import { Label } from "~/components/Form";
import { Button } from "~/components/Layout";
import { Search } from "lucide-react";

const BUTTON_CODE_STYLE = `const buttonStyles = cva(
  "appearance-none font-sans rounded-lg disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-zinc-900 text-zinc-50 hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:ring-offset-zinc-950 dark:focus:ring-zinc-300",
        destructive:
          "bg-red-500 text-zinc-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-zinc-50 dark:hover:bg-red-900/90 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:ring-offset-zinc-950 dark:focus:ring-red-900",
        outline:
          "border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:ring-offset-zinc-950 dark:focus:ring-zinc-300",
        secondary:
          "bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:ring-offset-zinc-950 dark:focus:ring-zinc-300",
        ghost:
          "text-black dark:text-white hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:ring-offset-zinc-950 dark:focus:ring-zinc-300",
        link: "text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50",
      },
      size: {
        default: "min-h-[2.625rem] px-3 py-2",
        sm: "min-h-9 rounded-md px-3",
        lg: "min-h-11 rounded-md px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
`;

const BUTTON_CODE_COMPONENT = `export const Button = forwardRef<
  HTMLButtonElement,
  ComponentProps<"button"> & VariantProps<typeof buttonStyles>
>(({ children, className, variant, size, ...props }, ref) => (
  <button
    className={twMerge(buttonStyles({ className, variant, size }))}
    ref={ref}
    {...props}
  >
    {children}
  </button>
));

Button.displayName = "Button";
`;

const BUTTON_CODE_VIEW = `<Text tag="h4">Variants</Text>
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
  <Button>
    <Search size={22} />
  </Button>
</div>
`;

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
              <Button>
                <Search size={22} />
              </Button>
            </div>
          </TabPanel>
          <TabPanel id="code">
            <code className="whitespace-pre">{BUTTON_CODE_VIEW}</code>
          </TabPanel>
        </Tabs>
      </DocumentationSection>
      {/* <ButtonSection />
      <BadgeSection />
      <CardSection /> */}
    </section>
  );
}
