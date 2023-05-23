import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { AddPictureIcon } from './addPictureIcon'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof AddPictureIcon> = {
  title: 'Icons/AddPicture',
  component: AddPictureIcon,
} 

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export default meta;
type Story = StoryObj<typeof AddPictureIcon>

export const Flat: Story = {
  render: () => <AddPictureIcon />,
};
