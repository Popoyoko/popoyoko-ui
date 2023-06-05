import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Primary } from "./Primary";

const meta: Meta<typeof Primary> = {
  title: "Components/Buttons/Primary",
  component: Primary,
  argTypes: {
    label: { control: "text" },
    typeSvg: {
      options: ["none", "left", "right", "only"],
      control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Primary>;

export const primary: Story = {
  render: (args) => <Primary {...args} />,
  args: {
    typeSvg: "none",
    label: "label",
  },
};
