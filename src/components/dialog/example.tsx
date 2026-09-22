'use client'

import { Button } from '~/components/button'
import { useConfirm } from '~/components/dialog'

const Example = () => {
  const { getConfirmation } = useConfirm()

  async function callDialog() {
    const res = await getConfirmation({
      header: 'This is a dialog!',
      content:
        'Are you sure you sure you want to see this dialog? Take a look at the console on developer tools to see the result.',
      confirmText: 'Of Course :)',
      rejectText: 'No :('
    })

    console.log('res => ', res)
  }

  return <Button onClick={() => callDialog()}>Call dialog</Button>
}

export { Example }
