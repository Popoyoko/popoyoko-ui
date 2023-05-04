import React from "react";
import { Meta, Story } from '@storybook/react'
import { ButtonSecondary, ButtonSecondaryProps } from './ButtonSecondary'

export default {
    component: ButtonSecondary,
    title: 'Button-secondary-component',
    argTypes: {
        label: {control: 'text' },
        typeSvg: { options: ['none', 'left', 'right', 'only'], control: {type: 'radio'},},
    },
}as Meta;

const Template: Story<ButtonSecondaryProps> = (args) => <ButtonSecondary {...args} />

export const Button = Template.bind({});
Button.args = {
    typeSvg: 'none',
    label: 'label',
    onClick:'',
}