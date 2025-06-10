import type { Meta, StoryFn } from "@storybook/react";
import Calculator from "../components/Calculator";

export default {
  title: "Components/Calculator",
  component: Calculator,
} as Meta;

const Template: StoryFn = () => <Calculator />;

export const Default = Template.bind({});
