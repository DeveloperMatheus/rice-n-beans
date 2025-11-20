'use client'

import dynamic from 'next/dynamic'

const ComponentPreview = ({ componentName }: { componentName: string }) => {
  const DynamicComponent = dynamic(
    () =>
      import(`~/components/${componentName}/example`).then(
        mod => mod.Example || mod.default
      ),
    {
      loading: () => <div>Carregando...</div>,
      ssr: false
    }
  )

  return <DynamicComponent />
}

export { ComponentPreview }
