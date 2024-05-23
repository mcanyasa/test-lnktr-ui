import { MyAvatar, MyAvatarFallback, MyAvatarImage } from "../../../index";
import type { Meta } from "@storybook/react";
import { fn } from "@storybook/test";

const meta = {
  title: "Example/Avatar",
  component: MyAvatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
  },
  args: { onClick: fn() },
} satisfies Meta<typeof MyAvatar>;
export default meta;

export function Default() {
  return (
    <MyAvatar>
    <MyAvatarImage src="https://github.com/shadcn.png" />
    <MyAvatarFallback>CN</MyAvatarFallback>
  </MyAvatar>
  )
}

