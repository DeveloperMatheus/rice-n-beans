import { Label } from '~/components/label'
import { Radio } from '.'

const Example = () => {
  return (
    <div className="flex items-center justify-start gap-5">
      <div className="flex items-center justify-center">
        <Radio name="test-radio" id="test-radio1" />
        <Label className="ml-2" htmlFor="test-radio1">
          This is a Radio
        </Label>
      </div>
      <div className="flex items-center justify-center">
        <Radio name="test-radio" id="test-radio2" />
        <Label className="ml-2" htmlFor="test-radio2">
          Yes it is
        </Label>
      </div>
      <div className="flex items-center justify-center">
        <Radio name="test-radio" id="test-radio3" />
        <Label className="ml-2" htmlFor="test-radio3">
          Nahh it is not
        </Label>
      </div>
    </div>
  )
}

export { Example }
