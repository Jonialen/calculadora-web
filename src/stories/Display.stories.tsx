import type { Meta, StoryFn } from "@storybook/react";
import Display from "../components/Display";

export default {
  title: "Components/Display",
  component: Display,
} as Meta;

const Template: StoryFn<DisplayProps> = (args) => <Display {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: "123",
};

export const Error = Template.bind({});
Error.args = {
  value: "ERROR",
};
