import React from "react";
import { Meta, Story } from '@storybook/react'
import { ButtonPrimary, ButtonPrimaryProps } from './ButtonPrimary'

export default {
    component: ButtonPrimary,
    title: 'Button-component',
    argTypes: {
        label: {control: 'text' },
        typeSvg: { options: ['none', 'left', 'right', 'only'], control: {type: 'radio'},},
        
    },
}as Meta;

const Template: Story<ButtonPrimaryProps> = (args) => <ButtonPrimary {...args} />

export const Button = Template.bind({});
Button.args = {
    typeSvg: 'none',
    label: 'label',
}

