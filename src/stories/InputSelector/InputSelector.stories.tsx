import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { InputSelector } from "./InputSelector";

const meta: Meta<typeof InputSelector> = {
    title: "Design System/Input Selector component",
    component: InputSelector,
    argTypes: {
        label: { control: "text" },
        hover: { control: "boolean"},
    },
};

export default meta;
type Story = StoryObj<typeof InputSelector>;

export const InputSelectorComponent: Story = {
    render: (args) => <InputSelector {...args} />,
    args: {
      label: "label",
      hover: true,
    },
  };