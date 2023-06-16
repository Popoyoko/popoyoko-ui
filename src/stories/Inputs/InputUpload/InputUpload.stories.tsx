import React from 'react';
import { Story, Meta } from '@storybook/react';
import InputUpload from './InputUpload'; // Importez votre composant UploadButton

export default {
  title: 'Components/Inputs/Upload',
  component: InputUpload,
} as Meta;

const Template: Story = (args) => (
  <InputUpload {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'label',
  onChange: (file) => {
    console.log('File uploaded:', file);
  },
};