import { Meta, Story } from "@storybook/react";
import Keypad, { KeypadProps } from "../components/Keypad";

export default {
  title: "Components/Keypad",
  component: Keypad,
} as Meta;

const Template: Story<KeypadProps> = (args) => <Keypad {...args} />;

export const Default = Template.bind({});
Default.args = {
  onButtonClick: (value: string) => console.log(value),
};
