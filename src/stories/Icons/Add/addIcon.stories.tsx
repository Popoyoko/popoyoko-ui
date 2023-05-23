import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { AddIcon } from './addIcon'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof AddIcon> = {
  title: 'Icons/Add',
  component: AddIcon,
} 

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export default meta;
type Story = StoryObj<typeof AddIcon>

export const Flat: Story = {
  render: () => <AddIcon />,
};
