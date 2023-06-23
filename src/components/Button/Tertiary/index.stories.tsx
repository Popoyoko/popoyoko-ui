import React from "react";
import { Meta, StoryObj } from '@storybook/react'
import { Tertiary } from './index'

const meta: Meta<typeof Tertiary> = {
    title: 'Components/Buttons/Tertiary',
    component: Tertiary,
    argTypes: {
        label: {control: 'text' },
        typeSvg: { options: ['none', 'left', 'right', 'only'], control: {type: 'radio'},},
    },
}

export default meta;
type Story = StoryObj<typeof Tertiary>;

export const tertiary: Story = {
    render: (args) => <Tertiary {...args} />,
    args: {
        typeSvg: 'none',
        label: 'label',
    },
  };