import { Card } from "~/components/Layout";
import { Text } from "~/components/Typography";
import { InstallationStep1 } from "./components/InstallationStep1";

const CODE_TAILWIND_VIEW = `import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", "[class~='dark']"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "select-arrow":
          "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
        modal: {
          "0%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.2s ease-in-out",
        modal: "modal 0.2s ease-in-out",
      },
    },
    content: {
      "checkmark-icon":
        "url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='%236b7280' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e\")",
    },
  },
  plugins: [],
};
export default config;
`;

export default function DocumentationInstallationPage() {
  return (
    <section>
      <div className="space-y-3">
        <Text tag="h1">Installation</Text>

        <Text tag="h2">This is the summary of the installation process:</Text>

        <div>
          <Text tag="h3">
            1) Install the packages from the node ecossystem (you can use{" "}
            <code>npm, yarn, or pnpm</code>):
          </Text>

          <InstallationStep1 />
        </div>

        <div>
          <Text tag="h3">
            2) Add the following lines to your <code>tailwind.config.js</code>:
          </Text>

          <div className="space-y-2">
            <Text>
              This is to reference the svg files for some components (Checkbox,
              Select, Accordion), setup the darkmode, and add some animations
              for the Modal/Dialog component.
            </Text>

            <Text>
              Keep in mind, this configuration is arbitrary and can be changed
              to fit your needs. For instance, since i&rsquo;m using{" "}
              <code>Next.js</code>, i have an specific place to reference the
              content array.
            </Text>
          </div>

          <Card className="overflow-x-auto" tabIndex={0}>
            <code className="whitespace-pre">{CODE_TAILWIND_VIEW}</code>
          </Card>
        </div>

        <Text tag="h3">
          3) It is over! Now you can start to use the components in your
          project. Happy coding!
        </Text>
      </div>
    </section>
  );
}
