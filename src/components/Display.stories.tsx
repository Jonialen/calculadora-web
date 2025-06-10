import type { Meta, StoryObj } from '@storybook/react-vite'
import Display from './Display'

const meta: Meta<typeof Display> = {
    component: Display,
    title: 'Calculator/Display'
}
export default meta

type Story = StoryObj<typeof Display>

export const Default: Story = {
    args: { value: '0' }
}

export const Error: Story = {
    args: { value: 'ERROR' }
}

export const MaxDigits: Story = {
    args: { value: '123456789' }
}