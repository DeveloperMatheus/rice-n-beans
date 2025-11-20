import { Label } from '~/components/label'
import { Range } from '.'

const Example = () => {
  return (
    <div>
      <Label htmlFor="input-range">Range</Label>
      <Range id="input-range" />
    </div>
  )
}

export { Example }
