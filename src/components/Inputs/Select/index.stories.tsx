import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { InputSelect } from "./index";

const meta: Meta<typeof InputSelect> = {
    title: "Components/Inputs/Select",
  component: InputSelect,
  argTypes: {
    label: { control: "text" },
    href: { control: "text" },
    options: { control: "array" },
    anchorElement: { control: "object" },
  },
};

export default meta;
type Story = StoryObj<typeof InputSelect>;

export const Input_Select: Story = {
    render: (args) => <InputSelect {...args} />,
    args: {
        label: "label",
        href: "#",
        options: ["Option 1", "Option 2", "Option 3"],
        anchorElement: <a href="#">Custom Anchor Element</a>,
      },
};