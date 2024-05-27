import { Avatar, AvatarFallback, AvatarImage } from "../../Avatar/src/Avatar";
import type { Meta } from "@storybook/react";
import { fn } from "@storybook/test";

const meta = {
  title: "Example/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Avatar>;
export default meta;

export function Default() {
  return (
    <Avatar>
    <AvatarImage src="https://github.com/shadcn.png" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
  )
}

