import type { Meta, StoryObj } from '@storybook/react-vite'
import KeyButton from './KeyButton'

const meta: Meta<typeof KeyButton> = {
    component: KeyButton,
    title: 'Calculator/KeyButton',
    argTypes: { onClick: { action: 'clicked' } }
}
export default meta

type Story = StoryObj<typeof KeyButton>

export const Number: Story = {
    args: { label: '7' }
}

export const Operator: Story = {
    args: { label: '+' }
}