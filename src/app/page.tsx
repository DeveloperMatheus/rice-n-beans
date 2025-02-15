import { Text } from '~/components/Typography'
import Link from 'next/link'
import { Button } from '~/components/Button'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-3 lg:p-5 checked:before:content-">
      <div className="text-center space-y-3">
        <Text tag="h1" className="lg:text-5xl border-zinc-200">
          Rice and Beans
        </Text>
      </div>

      <div className="text-center  mt-5">
        <Text tag="h2">
          Rice and beans is a list of React components,{' '}
          <br className="hidden lg:inline" /> built with a careful combination
          of tools, <br className="hidden lg:inline" /> in order to give you
          more control over the components you use.{' '}
        </Text>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-10 mt-5">
          <div>
            <Text tag="h2">Rice and Beans uses:</Text>
          </div>
          <div className="flex flex-col items-center justify-center">
            <ul className="list-disc list-inside text-left text-xl">
              <li>React</li>
              <li>Typescript</li>
              <li>Tailwind CSS</li>
              <li>CVA</li>
              <li>Tailwind Merge</li>
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
