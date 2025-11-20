import { Input } from '.'

const Example = () => {
  return (
    <div className="space-y-2">
      <Input placeholder="This is an input, type something!" />
      <Input placeholder="Oops! I have an error!" isInvalid />
    </div>
  )
}

export { Example }
