import Link from 'next/link'
import { Card } from '~/components/Card'
import { Text } from '~/components/Typography'
import {
  Accordion,
  AccordionContent,
  AccordionTrigger
} from '~/components/accordion'
import { CODE_TAILWIND_VIEW } from '../installation/mockTailwindGlobals'
import { Separator } from '~/components/Separator'

export default function DocumentationColorsPage() {
  return (
    <section>
      <div className="space-y-3">
        <Text tag="h1">Colors:</Text>
        <Text tag="h2">
          Rice n Beans uses a predefined set of colors for text, background,
          borders etc...
        </Text>
        <Text>
          These colors are referenced in the globals.css file (or your tailwind
          configuration css file). You can go to the{' '}
          <Link className="font-bold" href="/documentation/installation">
            installation page
          </Link>{' '}
          to see this file, or check the accordion bellow to see it.
        </Text>

        <Accordion>
          <AccordionTrigger id="globals-file">
            See Tailwind globals.css file
          </AccordionTrigger>
          <AccordionContent className="p-0" id="globals-file">
            <Card className="overflow-x-auto">
              <code className="whitespace-pre">{CODE_TAILWIND_VIEW}</code>
            </Card>
          </AccordionContent>
        </Accordion>

        <Text tag="h3">
          So, here&rsquo;s an explanation of the reason for each variable:
        </Text>

        <Card className="space-y-3">
          <div className="flex items-center justify-start gap-3">
            <div className="bg-primary min-h-9 min-w-9 rounded-lg"></div>
            <Text>--primary: The main color of your project.</Text>
          </div>
          <div className="flex items-center justify-start gap-3">
            <div className="bg-secondary min-h-9 min-w-9 rounded-lg"></div>
            <Text>--secondary: Your second color.</Text>
          </div>
          <div className="flex items-center justify-start gap-3">
            <div className="bg-success min-h-9 min-w-9 rounded-lg"></div>
            <Text>
              --success: Good for currencies and any other sucessful actions.
            </Text>
          </div>
          <div className="flex items-center justify-start gap-3">
            <div className="bg-error min-h-9 min-w-9 rounded-lg"></div>
            <Text>--error: Main color for error states.</Text>
          </div>
          <div className="flex items-center justify-start gap-3">
            <div className="bg-border-default min-h-9 min-w-9 rounded-lg"></div>
            <Text>--border: The color of the borders.</Text>
          </div>
          <div className="flex items-center justify-start gap-3">
            <div className="bg-muted min-h-9 min-w-9 rounded-lg"></div>
            <Text>--muted: Mostly used for placeholders.</Text>
          </div>
          <div className="flex items-center justify-start gap-3">
            <div className="bg-scaffold border-default min-h-9 min-w-9 rounded-lg border"></div>
            <Text>
              --scaffold: Main background color for the pages and components.
            </Text>
          </div>
          <Separator />

          <Text>
            The following colors are meant to be used along with the upper
            colors (mostly as text)
          </Text>
          <div className="flex items-center justify-start gap-3">
            <div className="bg-primary-contrast min-h-9 min-w-9 rounded-lg"></div>
            <Text>--primary-contrast</Text>
          </div>
          <div className="flex items-center justify-start gap-3">
            <div className="bg-secondary-contrast min-h-9 min-w-9 rounded-lg"></div>
            <Text>--secondary-contrast</Text>
          </div>
          <div className="flex items-center justify-start gap-3">
            <div className="bg-success-contrast border-default min-h-9 min-w-9 rounded-lg border"></div>
            <Text>--success-contrast</Text>
          </div>
          <div className="flex items-center justify-start gap-3">
            <div className="bg-error-contrast border-default min-h-9 min-w-9 rounded-lg border"></div>
            <Text>--error-contrast</Text>
          </div>
          <div className="flex items-center justify-start gap-3">
            <div className="bg-scaffold-contrast min-h-9 min-w-9 rounded-lg"></div>
            <Text>--scaffold-contrast</Text>
          </div>

          <Text>
            In my case, the contrast colors might seem the same, but i decided
            to create those variables so you can adjust better to your
            application.
          </Text>
        </Card>
      </div>
    </section>
  )
}
