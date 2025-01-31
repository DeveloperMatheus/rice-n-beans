'use client'

import { LaptopMinimal, MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useRef } from 'react'
import { Button } from '~/components/Button'

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme()
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([])

  const mapThemeIcons: Record<string, React.ReactNode> = {
    dark: <MoonIcon size={16} />,
    light: <SunIcon size={16} />,
    system: <LaptopMinimal size={16} />
  }

  useEffect(() => {
    const selectedIndex = Object.keys(mapThemeIcons).indexOf(theme || 'system')
    if (buttonRefs.current[selectedIndex]) {
      buttonRefs.current[selectedIndex]?.focus()
    }
  }, [theme])

  function handleKeyDown(event: React.KeyboardEvent, index: number) {
    const totalButtons = Object.keys(mapThemeIcons).length

    switch (event.key) {
      case 'ArrowRight':
        const nextIndex = (index + 1) % totalButtons
        buttonRefs.current[nextIndex]?.focus()
        break

      case 'ArrowLeft':
        const prevIndex = (index - 1 + totalButtons) % totalButtons
        buttonRefs.current[prevIndex]?.focus()
        break

      default:
        break
    }
  }

  function renderThemeButtons(): React.ReactNode {
    return Object.entries(mapThemeIcons).map(([key, value], index) => (
      <Button
        className="capitalize min-h-9 min-w-9"
        variant={applyActiveClass(key)}
        key={`theme--${key}--${index}`}
        onClick={() => setTheme(key)}
        aria-selected={isThemeSelected(key)}
        role="radio"
        tabIndex={applyTabIndex(key)}
        onKeyDown={e => handleKeyDown(e, index)}
        ref={el => {
          buttonRefs.current[index] = el
        }}
      >
        {value}
      </Button>
    ))
  }

  function applyActiveClass(selectedTheme: string) {
    if (isThemeSelected(selectedTheme)) return 'default'
    return 'ghost'
  }

  function isThemeSelected(selectedTheme: string) {
    if (selectedTheme === theme) return true
    return false
  }

  function applyTabIndex(buttonKey: string) {
    if (!isThemeSelected(buttonKey)) return -1
    return 0
  }

  return (
    <div
      role="radiogroup"
      className="flex items-center justify-center gap-1 text-center"
    >
      {renderThemeButtons()}
    </div>
  )
}

export { ThemeSwitch }
