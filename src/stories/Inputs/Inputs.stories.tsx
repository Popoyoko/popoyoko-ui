import React from "react";
import { Meta, Story } from '@storybook/react';
import { Input, InputProps } from './Inputs';

export default {
    component: Input,
    title: 'Inputs',
    argTypes: {
        label: {control: 'text'},
        srcIcon: {control: 'text'},
        href: {control: 'text'},
        typeInput: { options: ['selector', 'upload', 'picture', 'scrolling', 'calendar', 'placeholder', 'research'], control: {type: 'radio'},},
    },
}as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />

export const Inputs = Template.bind([]);
Input.args = {
    label: 'label',
    href: '',
    srcIcon: '',
    typeInputs: 'upload',
    onclick:'',
}


