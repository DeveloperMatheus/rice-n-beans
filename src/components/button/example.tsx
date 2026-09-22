import { Text } from '~/components/typography'
import { Button } from '.'
import { Search } from 'lucide-react'

const Example = () => {
  return (
    <div>
      <Text tag="h4">Variants</Text>
      <div className="flex flex-wrap items-center justify-start gap-5">
        <Button>Default</Button>
        <Button variant="success">Success</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
      </div>
      <Text tag="h4" className="mt-3">
        Size
      </Text>
      <div className="flex flex-wrap items-center justify-start gap-5">
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
        <Button>
          <Search size={22} />
        </Button>
      </div>
    </div>
  )
}

export { Example }
