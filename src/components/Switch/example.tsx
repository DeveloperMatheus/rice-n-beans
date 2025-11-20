import { Label } from '~/components/label'
import { Switch } from '.'

const Example = () => {
  return (
    <div className="flex items-center justify-start">
      <Label htmlFor="test-switch" className="mr-2">
        This is a switch
      </Label>
      <Switch id="test-switch" />
    </div>
  )
}

export { Example }
