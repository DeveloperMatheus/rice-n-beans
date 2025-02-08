import fs from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'

export type CodeResponse = { code: string }

export async function GET(req: Request) {
  // Extract the component name from the query parameters
  const url = new URL(req.url)
  const componentName = url.searchParams.get('component')

  // If no component name is provided, return an error
  if (!componentName) {
    return NextResponse.json(
      { error: 'Component name is required' },
      { status: 400 }
    )
  }

  // If component name is 'CodeCopy', return an error
  if (componentName === 'CodeCopy') {
    return NextResponse.json({ error: 'Wrong component' }, { status: 500 })
  }

  // Dynamically build the path to the component file
  const filePath = path.resolve(
    process.cwd(),
    `src/components/${componentName}/index.tsx`
  )

  try {
    // Read the file content as a string
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    console.log('fileContent => ', fileContent)

    // Return the content as JSON response
    return NextResponse.json({ code: fileContent })
  } catch (error) {
    console.log('error => ', error)
    // If file reading fails, return an error
    return NextResponse.json(
      { error: `Failed to read the file: ${componentName}` },
      { status: 500 }
    )
  }
}
