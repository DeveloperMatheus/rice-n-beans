import { headers } from 'next/headers'

async function getBaseUrl() {
  const headersList = await headers() // This returns a ReadonlyHeaders object
  const protocol = headersList.get('x-forwarded-proto') || 'http' // Default to 'http' if not provided
  const host = headersList.get('host') // Get the host (e.g., localhost:3000 or example.com)

  return `${protocol}://${host}`
}

export { getBaseUrl }
