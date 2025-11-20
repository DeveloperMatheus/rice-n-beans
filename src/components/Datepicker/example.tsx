import { Label } from '~/components/Label'
import { DatePicker } from '.'

const Example = () => {
  return (
    <div>
      <Label htmlFor="input-date-picker">Date Picker</Label>
      <DatePicker id="input-date-picker" min="1991-01-01" className="w-fit" />
    </div>
  )
}

export { Example }
