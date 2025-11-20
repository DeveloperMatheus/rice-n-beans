import { Braces, CodeXml } from 'lucide-react'
import Link from 'next/link'
import { Card } from '~/components/card'
import { Text } from '~/components/Typography'

const listDocOptions: { icon: React.ReactNode; title: string; url: string }[] =
  [
    {
      title: 'Form',
      icon: <CodeXml size={26} />,
      url: '/documentation/examples/form'
    },
    {
      title: 'Layout',
      icon: <Braces size={26} />,
      url: '/documentation/examples/layout'
    }
  ]

export default function DocumentationExamplesPage() {
  return (
    <section className="flex h-full flex-col items-center justify-center">
      <div className="space-y-3 text-center">
        <Text tag="h1">Examples</Text>

        <Text tag="h2">Here you can check some examples:</Text>
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
        {listDocOptions.map((docOption, index) => (
          <Link href={docOption.url} key={`${docOption.title}--${index}`}>
            <Card className="flex min-w-40 flex-col items-center justify-center gap-2">
              <div>{docOption.icon}</div>
              <Text tag="h3">{docOption.title}</Text>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
