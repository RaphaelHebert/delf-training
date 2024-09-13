import * as React from 'react'
import { Slot } from '@radix-ui/react-slot' // Import Slot from Radix
import './styles.css' // Import your CSS file

type PropsWithMandatoryChildren<P = unknown> = P & { children: React.ReactNode }

const ResponsiveContainer: React.FC<PropsWithMandatoryChildren> = ({
  children,
}) => {
  return (
    <Slot className='responsive-container'>
      <div>{children}</div>
    </Slot>
  )
}

export default ResponsiveContainer
