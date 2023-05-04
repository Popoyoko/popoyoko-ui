import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ButtonPrimary } from "./ButtonPrimary";

const meta: Meta<typeof ButtonPrimary> = {
  title: "Design System/Button Primary",
  component: ButtonPrimary,
  argTypes: {
    label: { control: "text" },
    typeSvg: {
      options: ["none", "left", "right", "only"],
      control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonPrimary>;

export const Button: Story = {
  render: (args) => <ButtonPrimary {...args} />,
  args: {
    typeSvg: "none",
    label: "label",
  },
};
