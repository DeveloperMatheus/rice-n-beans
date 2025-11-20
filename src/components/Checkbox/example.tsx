import { Label } from '~/components/Label'
import { Checkbox } from '.'

const Example = () => {
  return (
    <div className="flex items-center justify-start">
      <Label className="mr-3" htmlFor="test-check">
        This is a checkbox
      </Label>
      <Checkbox id="test-check" />
    </div>
  )
}

export { Example }
