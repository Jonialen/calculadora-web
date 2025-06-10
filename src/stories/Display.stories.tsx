import { Meta, Story } from "@storybook/react";
import Display, { DisplayProps } from "../components/Display";

export default {
  title: "Components/Display",
  component: Display,
} as Meta;

const Template: Story<DisplayProps> = (args) => <Display {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: "123",
};

export const Error = Template.bind({});
Error.args = {
  value: "ERROR",
};
