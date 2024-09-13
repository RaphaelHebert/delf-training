import { forwardRef } from 'react'
import * as Select from '@radix-ui/react-select'
import classnames from 'classnames'
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@radix-ui/react-icons'
import './styles.css'

type Props = {
  placeholder: string
  choice: Record<string, string>
}

const SelectDemo: React.FC<Props> = ({ placeholder, choice }) => (
  <Select.Root
  // value={Object.values(choice)[0]}
  // onValueChange={setValue}
  >
    <Select.Trigger
      className='SelectTrigger'
      aria-label='Food'
    >
      <Select.Value placeholder={placeholder} />
      <Select.Icon className='SelectIcon'>
        <ChevronDownIcon />
      </Select.Icon>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content className='SelectContent'>
        <Select.ScrollUpButton className='SelectScrollButton'>
          <ChevronUpIcon />
        </Select.ScrollUpButton>
        <Select.Viewport className='SelectViewport'>
          <Select.Group>
            <Select.Label className='SelectLabel'>Level</Select.Label>
            {Object.entries(choice).map(([key, value]) => (
              <SelectItem value={key}>{value}</SelectItem>
            ))}
          </Select.Group>
        </Select.Viewport>
        <Select.ScrollDownButton className='SelectScrollButton'>
          <ChevronDownIcon />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
)

const SelectItem = forwardRef<
  HTMLDivElement,
  {
    value: string
    placeholder?: string
    className?: string
    children: React.ReactNode
  }
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <Select.Item
      className={classnames('SelectItem', className)}
      {...props}
      ref={forwardedRef}
    >
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className='SelectItemIndicator'>
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  )
})

export default SelectDemo
