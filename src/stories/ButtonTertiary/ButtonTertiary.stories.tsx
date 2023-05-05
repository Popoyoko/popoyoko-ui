import React from "react";
import { Meta, StoryObj } from '@storybook/react'
import { ButtonTertiary } from './ButtonTertiary'

const meta: Meta<typeof ButtonTertiary> = {
    title: 'Design System/Buttons/Button Tertiary',
    component: ButtonTertiary,
    argTypes: {
        label: {control: 'text' },
        typeSvg: { options: ['none', 'left', 'right', 'only'], control: {type: 'radio'},},
    },
}

export default meta;
type Story = StoryObj<typeof ButtonTertiary>;

export const Button_Tertiary: Story = {
    render: (args) => <ButtonTertiary {...args} />,
    args: {
        typeSvg: 'none',
        label: 'label',
    },
  };