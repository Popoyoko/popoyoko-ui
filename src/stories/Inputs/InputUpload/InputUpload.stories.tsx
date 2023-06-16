import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import InputUpload from './InputUpload';

const meta: Meta<typeof InputUpload> = {
    title: 'Components/Inputs/Upload',
    component: InputUpload,
    argTypes: {
        label: { control: "text"},
    },
};




export default meta;
type Story = StoryObj<typeof InputUpload>;

export const upload: Story = {
render: (args) => <InputUpload {...args} />,
args:{
    label: 'label',
    onChange: (file) => {
        console.log('File uploaded:', file);
        },
    },
}