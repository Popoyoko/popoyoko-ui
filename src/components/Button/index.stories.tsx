import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonProps } from "./index";
import { Icon, IconMap } from "../Icon";

type CustomButtonProps = React.ComponentProps<typeof Button> & { iconPosition: string, icon?: string, label: string, isLabel: boolean }

const meta: Meta<CustomButtonProps> = {
    title: "Components/Button",
    component: Button,
    argTypes: {
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
        },
    },
};

export default meta;

type Story = StoryObj<CustomButtonProps>;

export const Default: Story = (props: CustomButtonProps) => {

    const { variant, icon, iconPosition, label } = props

    const BChildren = () => {
        if (!icon) {
            return label
        } else {
            switch (iconPosition) {
                case "before":
                    return [<Icon icon={icon} />, label]
                case "after":
                    return [label, <Icon icon={icon} />]
                case "only":
                    return <Icon icon={icon} />
                default:
                    break;
            }
        }
    }

    return (
        <Button variant={variant}>
            <BChildren />
        </Button>
    )

};

Default.args = {
    variant: "primary",
    action: () => alert("Button clicked"),
    actionType: "button",
    value: "your_value_here",
    label: "Label",
    icon: undefined,
    iconPosition: "before"
};