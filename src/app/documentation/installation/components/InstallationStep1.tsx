'use client'

import { useState } from 'react'
import { Button } from '~/components/Button'
import { Card } from '~/components/Card'

type Command = 'npm' | 'yarn' | 'pnpm'

export const InstallationStep1 = () => {
  const [commandSelected, setCommandSelected] = useState<Command>('pnpm')

  function renderCommandPrefix() {
    const commands = {
      npm: '$ npm install',
      yarn: '$ yarn add',
      pnpm: '$ pnpm install'
    }

    return commands[commandSelected]
  }

  function handleSelectedCommand(buttonCommand: Command) {
    return commandSelected === buttonCommand ? 'default' : 'outline'
  }

  return (
    <div>
      <div className="my-3 flex items-center justify-center gap-3 xl:justify-start">
        <Button
          variant={handleSelectedCommand('yarn')}
          onClick={() => setCommandSelected('yarn')}
        >
          Yarn
        </Button>
        <Button
          variant={handleSelectedCommand('npm')}
          onClick={() => setCommandSelected('npm')}
        >
          NPM
        </Button>
        <Button
          variant={handleSelectedCommand('pnpm')}
          onClick={() => setCommandSelected('pnpm')}
        >
          PNPM
        </Button>
      </div>

      <Card>
        <div>
          <code>{renderCommandPrefix()} typescript</code>
        </div>
        <div>
          <code>
            {renderCommandPrefix()} tailwindcss @tailwindcss/postcss postcss
          </code>
        </div>
        <div>
          <code>{renderCommandPrefix()} class-variance-authority</code>
        </div>
      </Card>
    </div>
  )
}
