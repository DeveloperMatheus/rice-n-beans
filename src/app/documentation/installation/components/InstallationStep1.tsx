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
      <div className="flex items-center justify-center xl:justify-start gap-3 my-3">
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
          <code>{renderCommandPrefix()} tailwindcss postcss autoprefixer</code>
        </div>
        <div>
          <code>{renderCommandPrefix()} class-variance-authority</code>
        </div>
      </Card>
    </div>
  )
}
