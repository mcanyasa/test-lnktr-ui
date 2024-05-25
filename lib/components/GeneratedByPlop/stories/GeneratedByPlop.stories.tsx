import { Meta, StoryObj } from "@storybook/react";

import { GeneratedByPlop } from "../src/GeneratedByPlop";

const meta: Meta<typeof GeneratedByPlop> = {
    title: "Components/GeneratedByPlop",
    component: GeneratedByPlop,
    argTypes: {
        role: {
            control: { type: "text" },
        }
    }
}

export default meta;
type Story = StoryObj<typeof  GeneratedByPlop>;

export const Default: Story = {
    args: {
        role: "test"
    }
};