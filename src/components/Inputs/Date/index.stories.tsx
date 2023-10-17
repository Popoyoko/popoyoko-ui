import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { InputDate } from "./index"

const meta: Meta<typeof InputDate> = {
    title: "Components/Inputs/Date",
    component: InputDate,
    argTypes: {
      label: { control: "text" },
    },
};

export default meta;
type Story = StoryObj<typeof InputDate>;

export const Input_Date: Story = {
    render: (args) => <InputDate {...args} />,
    args: {
      label: "label",
      value: "aaaa-mm-jj",
    },
  };