import { readFile } from 'fs/promises'
import path from 'path'

interface ComponentMetaData {
  title: string
  description: string
}

export interface ComponentInfo {
  source: string
  example: ComponentMetaData & {
    codeExample: string
  }
}

const getComponentSource = async (
  componentName: string
): Promise<ComponentInfo | undefined> => {
  try {
    const componentDir = path.join(
      process.cwd(),
      'src/components',
      componentName
    )

    const [source, previewSource, exampleContent] = await Promise.all([
      readFile(path.join(componentDir, 'index.tsx'), 'utf-8'),
      readFile(path.join(componentDir, 'preview.tsx'), 'utf-8'),
      readFile(path.join(componentDir, 'metadata.json'), 'utf-8')
    ])

    const { title, description } = JSON.parse(
      exampleContent
    ) as ComponentMetaData

    return {
      source,
      example: {
        title,
        description,
        codeExample: previewSource
      }
    }
  } catch (error) {
    return undefined
  }
}

export { getComponentSource }
