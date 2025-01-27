import { CodeResponse } from '~/app/api/get-code/route'

async function getCode(componentName: string): Promise<CodeResponse> {
  const response = await fetch(
    `http://localhost:3000/api/get-code?component=${componentName}`,
    {
      method: 'GET',
      headers: {
        component: 'Accordion',
        'Content-Type': 'application/json'
      }
    }
  )

  return await response.json()
}

export { getCode }
