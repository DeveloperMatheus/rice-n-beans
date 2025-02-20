import { Card } from '~/components/Card'
import { Text } from '~/components/Typography'
import { InstallationStep1 } from './components/InstallationStep1'

export const CODE_TAILWIND_VIEW = `@import 'tailwindcss';

@custom-variant dark (&:is([class~='dark'] *));

/* CSS vars */
:root {
  --primary: 240 6% 10%;
  --secondary: 240 5% 96%;
  --success: 142 72% 29%;
  --error: 0 84% 60%;
  --accent: 0 0% 100%;
  --border: 240 6% 90%;
  --muted: 220 9% 46%;

  --primary-contrast: 240 6% 90%;
  --secondary-contrast: 0 0% 19%;
  --success-contrast: 240 6% 100%;
  --error-contrast: 240 6% 100%;

  --scaffold: 0 0% 100%;
  --contrast: 0 0% 19%;
  --placeholder: 240 4% 46%;
  --ring: 240 10% 4%;

  --checkmark-icon: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='%236b7280' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
  --arrow-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
}

.dark {
  --primary: 240 5% 84%;
  --secondary: 240 4% 16%;
  --success: 143 64% 24%;
  --error: 0 63% 31%;
  --accent: 240 10% 4%;
  --border: 240 4% 16%;
  --muted: 218 11% 65%;

  --primary-contrast: 0 0% 19%;
  --secondary-contrast: 0 0% 85%;
  --success-contrast: 0 0% 85%;
  --error-contrast: 0 0% 85%;

  --scaffold: 240 6% 10%;
  --contrast: 240 6% 90%;
  --placeholder: 240 5% 65%;
  --ring: 240 5% 84%;
}

@theme {
  --content-checkmark-icon: var(--checkmark-icon);

  --color-primary: hsl(var(--primary));
  --color-secondary: hsl(var(--secondary));
  --color-scaffold: hsl(var(--scaffold));
  --color-success: hsl(var(--success));
  --color-error: hsl(var(--error));
  --color-accent: hsl(var(--accent));
  --color-contrast: hsl(var(--contrast));
  --color-muted: hsl(var(--muted));

  --text-color-primary-contrast: hsl(var(--primary-contrast));
  --text-color-secondary-contrast: hsl(var(--secondary-contrast));
  --text-color-success-contrast: hsl(var(--success-contrast));
  --text-color-error-contrast: hsl(var(--error-contrast));
  --text-color-accent-contrast: hsl(var(--accent-contrast));

  --border-color-default: hsl(var(--border));

  --placeholder-color-default: hsl(var(--placeholder));

  --ring-color-default: hsl(var(--ring));

  --background-image-select-icon: var(--arrow-icon);

  --animate-fade-in: fade-in 0.2s ease-in-out;
  --animate-modal: modal 0.2s ease-in-out;

  @keyframes fade-in {
    0% {
      opacity: 0%;
    }
    100% {
      opacity: 100%;
    }
  }

  @keyframes modal {
    0% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
}
`

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
