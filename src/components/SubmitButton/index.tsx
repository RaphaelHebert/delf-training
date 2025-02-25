import React, { PropsWithChildren } from 'react'
import { useFormStatus } from 'react-dom'
import { Button } from '@radix-ui/themes'

type SubmitButtonProps = PropsWithChildren<React.ComponentProps<typeof Button>>

const SubmitButton: React.FC<SubmitButtonProps> = ({ children, ...props }) => {
  const { pending } = useFormStatus()
  return (
    <Button
      autoFocus
      type='submit'
      disabled={pending}
      {...props}
    >
      {children}
    </Button>
  )
}

export default SubmitButton
