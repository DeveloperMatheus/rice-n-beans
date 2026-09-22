import { Badge } from '.'

const Example = () => {
  return (
    <div className="flex items-center justify-start gap-3">
      <Badge>Default</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="secondary">Secondary</Badge>
    </div>
  )
}

export { Example }
