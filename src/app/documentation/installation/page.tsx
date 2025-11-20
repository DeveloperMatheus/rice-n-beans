import { Card } from '~/components/card'
import { Text } from '~/components/typography'
import { InstallationStep1 } from './components/InstallationStep1'
import { CODE_TAILWIND_VIEW } from './mockTailwindGlobals'

export default function DocumentationInstallationPage() {
  return (
    <section>
      <div className="space-y-3">
        <Text tag="h1">Installation</Text>

        <Text tag="h2">This is the summary of the installation process:</Text>

        <div>
          <Text tag="h3">
            1) Install the packages from the node ecossystem (you can use{' '}
            <code>npm, yarn, or pnpm</code>):
          </Text>

          <InstallationStep1 />
        </div>

        <div>
          <Text tag="h3">
            2) Add the following lines to your <code>globals.css</code> or any
            central css file for the tailwind:
          </Text>

          <div className="space-y-2">
            <Text>
              This is to reference the css vars, the svg files for some
              components (Checkbox, Select, Accordion), add the colors, setup
              the darkmode, and add some animations for the Modal/Dialog
              component. Keep in mind, those numbers on the CSS vars are written
              in HSL!
            </Text>

            <Text>
              Keep in mind, this configuration is arbitrary and can be changed
              to fit your needs.
            </Text>
          </div>

          <Card className="mt-3 overflow-x-auto" tabIndex={0}>
            <code className="whitespace-pre">{CODE_TAILWIND_VIEW}</code>
          </Card>
        </div>

        <Text tag="h3">
          3) It is over! Now you can start to use the components in your
          project. Happy coding!
        </Text>
      </div>
    </section>
  )
}
