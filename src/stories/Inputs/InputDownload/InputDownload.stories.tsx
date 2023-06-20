import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { InputDownload } from "./InputDownload";

const meta: Meta<typeof InputDownload> = {
    title: "Components/Inputs/Download",
    component: InputDownload,
    argTypes: {
        label: { control: "text" },
        icon: {
            options: ["left", "right"],
            control: { type: "radio" },
          },
    }
}

export default meta;
type Story = StoryObj<typeof InputDownload>;

export const Input_Download: Story = {
    render: (args) => <InputDownload {...args} />,
    args: {
      icon: "right",
      label: "label",
    },
  };