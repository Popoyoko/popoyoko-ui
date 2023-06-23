import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { InputText } from "./index";

const meta: Meta<typeof InputText> = {
    title: "Components/Inputs/Text",
    component: InputText,
    argTypes: {
      placeholder: { control: "text" },
    },
};

export default meta;
type Story = StoryObj<typeof InputText>;

export const Input_Text: Story = {
    render: (args) => <InputText {...args} />,
    args: {
        placeholder: "placeholder",
    },
  };