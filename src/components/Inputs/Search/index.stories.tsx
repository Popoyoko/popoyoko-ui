import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { InputSearch } from "./index";

const meta: Meta<typeof InputSearch> = {
  title: "Components/Inputs/Search",
  component: InputSearch,
  argTypes: {
    placeholder: { control: "text" },
    srcIcon: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof InputSearch>;

export const primary: Story = {
  render: (args) => <InputSearch {...args} />,
  args: {
    placeholder: "Hypnose, massages, magnétiseur...",
    srcIcon: "",
  },
};