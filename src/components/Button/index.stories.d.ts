import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Button from "./index";
type CustomButtonProps = React.ComponentProps<typeof Button> & {
    iconPosition: string;
    icon?: string;
    label: string;
    isLabel: boolean;
};
declare const meta: Meta<CustomButtonProps>;
export default meta;
type Story = StoryObj<CustomButtonProps>;
export declare const Default: Story;
