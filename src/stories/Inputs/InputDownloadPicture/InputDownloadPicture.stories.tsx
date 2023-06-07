import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { InputDownloadPicture } from "./InputDownloadPicture";

const meta: Meta<typeof InputDownloadPicture> = {
    title: "Components/Inputs/Download Picture component",
    component: InputDownloadPicture,
    argTypes: {
        label: { control: "text" },
        hover: { control: "boolean"},
    },
};

export default meta;
type Story = StoryObj<typeof InputDownloadPicture>;

export const InputDownloadPictureComponent: Story = {
render: (args) => <InputDownloadPicture {...args} />,
args: {
    label: "label",
    hover: true,
},
};