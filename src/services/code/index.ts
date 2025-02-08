import { CodeResponse } from '~/app/api/get-code/route'

async function getCode(componentName: string): Promise<CodeResponse> {
  const baseUrl = process.env.API_BASE_URL

  const response = await fetch(
    `${baseUrl}/api/get-code?component=${componentName}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )

  return await response.json()
}

export { getCode }
