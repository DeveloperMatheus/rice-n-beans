import { Text } from '~/components/typography'

const Example = () => {
  return (
    <div>
      <Text tag="h1">This is a heading 1</Text>
      <Text tag="h2">This is a heading 2</Text>
      <Text tag="h3">This is a heading 3</Text>
      <Text tag="h4">This is a heading 4</Text>
      <Text tag="h5">This is a heading 5</Text>
      <Text tag="h6">This is a heading 6</Text>
      <Text tag="p">This is a paragraph</Text>
      <Text className="text-muted">
        This is a paragraph (with muted styles)
      </Text>
      <Text tag="span">This is a span</Text>
    </div>
  )
}

export { Example }
