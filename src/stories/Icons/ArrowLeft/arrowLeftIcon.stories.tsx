import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ArrowLeftIcon } from './arrowLeftIcon'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof ArrowLeftIcon> = {
  title: 'Icons/ArrowLeft',
  component: ArrowLeftIcon,
} 

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export default meta;
type Story = StoryObj<typeof ArrowLeftIcon>

export const Flat: Story = {
  render: () => <ArrowLeftIcon />,
};
