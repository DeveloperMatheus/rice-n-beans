import { Braces, CodeXml } from 'lucide-react'
import Link from 'next/link'
import { Button } from '~/components/Button'
import { Card } from '~/components/Card'
import { Text } from '~/components/Typography'

const listDocOptions: { icon: React.ReactNode; title: string; url: string }[] =
  [
    {
      title: 'Installation',
      icon: <CodeXml size={26} />,
      url: '/documentation/installation'
    },
    {
      title: 'Examples',
      icon: <Braces size={26} />,
      url: '/documentation/examples'
    },
    {
      title: 'Github',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
          />
        </svg>
      ),
      url: 'https://github.com/DeveloperMatheus/rice-n-beans'
    }
  ]

export default function DocumentationPage() {
  return (
    <section className="flex flex-col items-center justify-center h-full">
      <div className="space-y-3 text-center">
        <Text tag="h1">Welcome to the Rice and Beans project!</Text>

        <Text tag="h2">
          Here you can check some examples, or continue to the docs.
        </Text>
      </div>

      <div className="flex items-center justify-center gap-3 mt-3 flex-wrap">
        {listDocOptions.map((docOption, index) => (
          <Link href={docOption.url} key={`${docOption.title}--${index}`}>
            <Card className="flex flex-col items-center justify-center gap-2 min-w-40">
              <div>{docOption.icon}</div>
              <Text tag="h3">{docOption.title}</Text>
            </Card>
          </Link>
        ))}
      </div>

      <Text tag="h2" className="text-center mt-3">
        Special thanks to:
      </Text>

      <div className="flex items-center justify-center gap-3 flex-wrap">
        <Link href="https://tailwindcss.com" target="_blank">
          <Button variant="link" className="text-2xl">
            TailwindCSS
          </Button>
        </Link>

        <Link href="https://cva.style" target="_blank">
          <Button variant="link" className="text-2xl">
            Class Variance Authority
          </Button>
        </Link>

        <Link href="https://github.com/dcastil/tailwind-merge" target="_blank">
          <Button variant="link" className="text-2xl">
            Tailwind Merge
          </Button>
        </Link>
      </div>
    </section>
  )
}
