import Link from 'next/link'
import { Card } from '~/components/Card'
import { Separator } from '~/components/Separator'
import { Text } from '~/components/Typography'

export default function DocumentationColorsPage() {
  return (
    <section>
      <Card className="space-y-3">
        <Text tag="h1">Themes:</Text>

        <Text tag="h2">
          There are a few ways to apply a theme to your project, and Rice n
          Beans uses the strategy of class in the HTML. Currently, we have two
          themes: a standard, and a dark one.
        </Text>

        <Separator />

        <Text tag="h3">
          In RnB, every theme that does not belong to a theme class, will fall
          to the :root selector in the css vars (see the globals.css file on
          installation section).
        </Text>

        <Text>
          You can grow this list of themes in your globals.css file. Just add a
          new theme class, place the same css var names, and tweak the color
          values! (Don't forget to align with your approach of the theme changer
          setup)
        </Text>

        <Separator />

        <Text>
          I can recommend a library called next-themes (
          <Link href="https://github.com/pacocoursey/next-themes">
            https://github.com/pacocoursey/next-themes
          </Link>
          )
        </Text>

        <Text>
          You can also see how i did the integration of this library in the Rice
          n Beans github repo as well:{' '}
          <Link href="https://github.com/DeveloperMatheus/rice-n-beans/tree/dev">
            https://github.com/DeveloperMatheus/rice-n-beans/tree/dev
          </Link>{' '}
          but somehow, the strategy must be done by you.
        </Text>
      </Card>
    </section>
  )
}
