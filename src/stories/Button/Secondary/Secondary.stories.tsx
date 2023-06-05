import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Secondary } from "./Secondary"

const meta: Meta<typeof Secondary> = {
  title: "Components/Buttons/Secondary",
  component: Secondary,
  argTypes: {
    label: { control: "text" },
    typeSvg: {
      options: ["none", "left", "right", "only"],
      control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Secondary>;

export const secondary: Story = {
  render: (args) => <Secondary {...args} />,
  args: {
    typeSvg: "none",
    label: "label",
    // onClick:'',
  },
};
