import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { InputRadio } from "./index";

const meta: Meta<typeof InputRadio> = {
    title: "Components/Inputs/Radio component",
    component: InputRadio,
    argTypes: {
        label: { control: "text" },
    },
};

export default meta;
type Story = StoryObj<typeof InputRadio>;

export const InputSelectorComponent: Story = {
    render: (args) => <InputRadio {...args} />,
    args: {
      label: "label",
    },
  };