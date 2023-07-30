import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Logo } from "./index";

const meta: Meta<typeof Logo> = {
  title: "Components/Logo",
  component: Logo,
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  render: (args) => <Logo {...args} />,
  args: {},
};
