import { Meta, Story } from "@storybook/react";
import Calculator from "../components/Calculator";

export default {
  title: "Components/Calculator",
  component: Calculator,
} as Meta;

const Template: Story = () => <Calculator />;

export const Default = Template.bind({});
