import React from "react";
import { Meta, StoryObj } from '@storybook/react'
import { ButtonSecondary } from './ButtonSecondary'

const meta: Meta<typeof ButtonSecondary> = {
    title: 'Design System/Button Secondary',
    component: ButtonSecondary,
    argTypes: {
        label: {control: 'text' },
        typeSvg: { options: ['none', 'left', 'right', 'only'], control: {type: 'radio'},},
    },
}

export default meta;
type Story = StoryObj<typeof ButtonSecondary>;


export const Primary: Story = {
    render: (args) => <ButtonSecondary {...args} />,
    args: {
        typeSvg: 'none',
    label: 'label',
    // onClick:'',
    },
  };