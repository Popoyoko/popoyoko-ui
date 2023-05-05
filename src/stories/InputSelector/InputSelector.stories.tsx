import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { InputSelector } from "./InputSelector";

const meta: Meta<typeof InputSelector> = {
    title: "Design System/Button Primary",
    component: InputSelector,
    argTypes: {
        label: {control: "text"},
        active: { control: {type: "radio"},},
        hover: { control: {type: "radio"},},
    },
};

export default meta;
type Story = StoryObj<typeof InputSelector>;

export const InputSelector: Story = {
    render: (args) => <InputSelector {...args} />,
    args: {
        label: "label",
        hover: '',
        active: '',
    },
};