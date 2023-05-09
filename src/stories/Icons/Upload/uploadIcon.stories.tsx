import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { UploadIcon } from './uploadIcon'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof UploadIcon> = {
  title: 'Icons/Upload',
  component: UploadIcon,
} 

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export default meta;
type Story = StoryObj<typeof UploadIcon>

export const Flat: Story = {
  render: () => <UploadIcon />,
};

