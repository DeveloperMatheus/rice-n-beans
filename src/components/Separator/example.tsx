import { Text } from '~/components/Typography'
import { Separator } from '.'

const Example = () => {
  return (
    <div className="flex h-9 items-center justify-start gap-5">
      <Text>Horizontal:</Text> <Separator className="w-9" />
      <Text>Vertical:</Text>
      <Separator orientation="vertical" />
    </div>
  )
}

export { Example }
