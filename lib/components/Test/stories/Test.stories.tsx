import { Meta, StoryObj } from "@storybook/react";

import { MyTest } from "../Test";

const meta: Meta<typeof MyTest> = {
    title: "Components/MyTest",
    component: MyTest,
    argTypes: {
        role: {
            control: { type: "text" },
        }
    }
}

export default meta;
type Story = StoryObj<typeof  MyTest>;

export const Default: Story = {
    args: {
        role: "test"
    }
};