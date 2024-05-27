import { Button } from "../../Button/src/Button";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: [
        "primary",
        "secondary",
        "destructive",
        "outline",
        "ghost",
        "link",
      ],
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    children: "Button",
    variant: "default",
  },
};
export const Secondary: Story = {
  args: {
    children: "Button",
    variant: "secondary",
  },
};
export const Destructive: Story = {
  args: {
    children: "Button",
    variant: "destructive",
  },
};
export const Outline: Story = {
  args: {
    children: "Button",
    variant: "outline",
  },
};
export const Ghost: Story = {
  args: {
    children: "Button",
    variant: "ghost",
  },
};
export const Link: Story = {
  args: {
    children: "Button",
    variant: "link",
  },
};
