import { Text } from '~/components/Typography'
import Link from 'next/link'
import { Button } from '~/components/Button'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-3 lg:p-5">
      <div className="space-y-3 text-center">
        <Text tag="h1" className="border-zinc-200 lg:text-5xl">
          Rice and Beans
        </Text>
      </div>

      <div className="mt-5 text-center">
        <Text tag="h2">
          Rice and beans is a list of React components,{' '}
          <br className="hidden lg:inline" /> built with a careful combination
          of tools, <br className="hidden lg:inline" /> in order to give you
          more control over the components you use.{' '}
        </Text>

        <div className="mt-5 flex flex-col items-center justify-center gap-3 lg:flex-row lg:gap-10">
          <div>
            <Text tag="h2">Rice and Beans uses:</Text>
          </div>
          <div className="flex flex-col items-center justify-center">
            <ul className="list-inside list-disc text-left text-xl">
              <li>React</li>
              <li>Typescript</li>
              <li>Tailwind CSS</li>
              <li>CVA</li>
              <li>Tailwind Merge</li>
              <li>Lucide React</li>
            </ul>
          </div>
        </div>
        <Link href="/documentation">
          <Button className="mt-5">Documentation</Button>
        </Link>
      </div>
    </main>
  )
}
