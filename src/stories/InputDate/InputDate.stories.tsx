import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { InputDate } from "./InputDate"

const meta: Meta<typeof InputDate> = {
    title: "Design System/Input/Date-button",
    component: InputDate,
    argTypes: {
      placeholder: { control: "text" },
    },
};

export default meta;
type Story = StoryObj<typeof InputDate>;

export const Input_Date: Story = {
    render: (args) => <InputDate {...args} />,
    args: {
      placeholder: "jj/mm/aaaa",
      srcIcon: "",
    },
  };