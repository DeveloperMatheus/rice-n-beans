import { CodeResponse } from '~/app/api/get-code/route'

async function getCode(componentName: string): Promise<CodeResponse> {
  const response = await fetch(`/api/get-code?component=${componentName}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  return await response.json()
}

export { getCode }
