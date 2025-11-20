import { Input } from '.'

const Example = () => {
  return (
    <div>
      <Input placeholder="This is an input, type something!" />
      <Input placeholder="Oops! I have an error!" isInvalid />
    </div>
  )
}

export { Example }
