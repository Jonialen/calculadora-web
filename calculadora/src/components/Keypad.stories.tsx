import type { Meta, StoryObj } from '@storybook/react-vite'
import Keypad from './Keypad'

const meta: Meta<typeof Keypad> = {
    component: Keypad,
    title: 'Calculator/Keypad',
    argTypes: { onKey: { action: 'key pressed' } }
}
export default meta

type Story = StoryObj<typeof Keypad>

export const Default: Story = {}