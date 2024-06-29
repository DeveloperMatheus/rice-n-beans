import { Card } from "~/components/Layout";
import { Tab, TabList, TabPanel, Tabs } from "~/components/Tabs";
import { Text } from "~/components/Typography";

const CODE_ARROW_VIEW = `<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 20 20"
  fill="none"
  stroke="#aaa"
  stroke-width="4"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <polyline points="17 7 10 15 2 7"></polyline>
</svg>
`;

const CODE_CHECK_VIEW = `<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="none"
  stroke="#aaa"
  stroke-width="4"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M20 6L9 17L4 12"></path>
</svg>
`;

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
      checkIcon: 'url("/icon/check.svg")',
      arrowIcon: 'url("/icon/arrow.svg")',
    },
  },
  plugins: [],
};
export default config;
`;

export default function DocumentationPage() {
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

          <Card>
            <div>
              <code>$ typescript</code>
            </div>
            <div>
              <code>$ tailwindcss postcss autoprefixer</code>
            </div>
            <div>
              <code>$ class-variance-authority</code>
            </div>
          </Card>
        </div>

        <div>
          <Text tag="h3">
            2) Place two svg files in the folder of your project responsible to
            store this type of asset:
          </Text>
          <Text>
            This is important if you&rsquo;re using the{" "}
            <strong>
              <code>Select and Checkbox</code>
            </strong>
            , because the icons for two form components are injected using a
            pseudo elements. So you can skip this step if you&rsquo;re not going
            to use those two inputs.
          </Text>
          <Tabs defaultValue="arrow" className="mt-3">
            <TabList>
              <Tab id="arrow">Arrow Icon</Tab>
              <Tab id="check">Check Icon</Tab>
            </TabList>
            <TabPanel id="arrow" className="overflow-x-auto">
              <div className="w-fit">
                <code className="whitespace-pre">{CODE_ARROW_VIEW}</code>
              </div>
            </TabPanel>
            <TabPanel id="check" className="overflow-x-auto">
              <code className="whitespace-pre">{CODE_CHECK_VIEW}</code>
            </TabPanel>
          </Tabs>
        </div>

        <div>
          <Text tag="h3">
            3) Add the following lines to your <code>tailwind.config.js</code>:
          </Text>

          <div className="space-y-2">
            <Text>
              This is to reference the svg files from step 2, setup the
              darkmode, and add some animations for the Modal/Dialog component.
            </Text>

            <Text>
              Some of this configuration is arbitrary and can be changed to fit
              your needs. For instance, since i&rsquo;m using{" "}
              <code>Next.js</code>, i have an specific place to reference the
              content array, and the icons (i placed the check and the arrow
              icons, in a folder called <code>icon</code> inside the{" "}
              <code>public</code> folder).
            </Text>
          </div>

          <Card>
            <code className="whitespace-pre">{CODE_TAILWIND_VIEW}</code>
          </Card>
        </div>

        <Text tag="h3">
          4) It is over! Now you can start to use the components in your
          project. Happy coding!
        </Text>
      </div>
    </section>
  );
}
