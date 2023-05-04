import React from "react";
import { Meta, Story } from '@storybook/react'
import { ButtonTertiary, ButtonTertiaryProps } from './ButtonTertiary'

export default {
    component: ButtonTertiary,
    title: 'Button-tertiary-component',
    argTypes: {
        label: {control: 'text' },
        typeSvg: { options: ['none', 'left', 'right', 'only'], control: {type: 'radio'},},

    },
}as Meta;

const Template: Story<ButtonTertiaryProps> = (args) => <ButtonTertiary {...args} />

export const Button = Template.bind({});
Button.args = {
    typeSvg: 'none',
    label: 'label',
}

