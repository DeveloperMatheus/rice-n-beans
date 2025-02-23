import { CodeXml, Paintbrush, PaintRoller } from 'lucide-react'
import Link from 'next/link'
import { Text } from '~/components/Typography'
import { MOCK_COMPONENTS } from '~/mocks/componentList'

export const DrawerItems = ({
  isOpen,
  onClickDrawerItem
}: {
  isOpen: boolean
  onClickDrawerItem: () => void
}) => {
  function renderOpenContent(element: React.ReactNode): React.ReactNode {
    if (!isOpen) return
    return element
  }

  function renderMockComponents() {
    return (
      <div className="flex flex-col items-start justify-center space-y-3">
        {MOCK_COMPONENTS.map((sidenavItem, index) => (
          <Link
            key={`${sidenavItem.title}--${index}`}
            className="flex items-center space-x-2"
            href={sidenavItem.url}
            onClick={() => onClickDrawerItem()}
          >
            {renderOpenContent(<Text>{sidenavItem.title}</Text>)}
          </Link>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-5">
      <div>
        {renderOpenContent(
          <Text tag="h2" className="mb-3">
            Setup
          </Text>
        )}

        <div className="space-y-2">
          <Link
            className="flex items-center space-x-2"
            href="/documentation/installation"
            onClick={() => onClickDrawerItem()}
          >
            <CodeXml size={26} />
            {renderOpenContent(<Text>Installation</Text>)}
          </Link>

          <Link
            className="flex items-center space-x-2"
            href="/documentation/colors"
            onClick={() => onClickDrawerItem()}
          >
            <Paintbrush size={26} />
            {renderOpenContent(<Text>Colors</Text>)}
          </Link>

          <Link
            className="flex items-center space-x-2"
            href="/documentation/themes"
            onClick={() => onClickDrawerItem()}
          >
            <PaintRoller size={26} />
            {renderOpenContent(<Text>Themes</Text>)}
          </Link>
        </div>
      </div>
      <div>
        {renderOpenContent(
          <Text tag="h2" className="mb-3">
            Components
          </Text>
        )}
        {renderMockComponents()}
      </div>
    </div>
  )
}
