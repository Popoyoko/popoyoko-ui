import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Button from "./index";
import { Icon, IconMap } from "../Icon";

type CustomButtonProps = React.ComponentProps<typeof Button> & { iconPosition: string, icon?: string, label: string, isLabel: boolean }

const meta: Meta<CustomButtonProps> = {
    title: "Components/Button",
    component: Button,
    argTypes: {
        variant: {
            control: {
                type: "select",
            },
        },
        type: {
            control: {
                type: "select",
            },
        },
        label: {
            control: "text",
            if: { arg: 'iconPosition', neq: "only" },
        },
        icon: {
            options: Object.keys(IconMap) as (keyof typeof IconMap)[],
            control: {
                type: "select",
            },
        },
        iconPosition: {
            options: ["before", "after", "only"],
            control: {
                type: "radio",
            },
            if: { arg: 'icon', eq: undefined },
        }
    },
};

export default meta;

type Story = StoryObj<CustomButtonProps>;

export const Default: Story = (props: CustomButtonProps) => {

    const { variant, icon, iconPosition, label, action, children } = props

    if (!icon) {
        return (
            <Button variant={variant} action={action}>
                {label}
            </Button>
        )
    }
    else {
        switch (iconPosition) {
            case "before":
                return (
                    <Button variant={variant} action={action}>
                        <Icon icon={icon} />{label}
                    </Button>
                )
            case "after":
                return (
                    <Button variant={variant} action={action}>
                        {label}<Icon icon={icon} />
                    </Button>
                )
            case "only":
                return (
                    <Button variant={variant} action={action}>
                        <Icon icon={icon} />
                    </Button>
                )
            default:
                return (
                    <Button variant={variant} action={action} children={label} />
                )
        }
    }

};

Default.args = {
    variant: "primary",
    label: "Label",
    icon: undefined,
    iconPosition: "before"
};