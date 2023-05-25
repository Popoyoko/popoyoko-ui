import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ArrowTopIcon } from './arrowTopIcon'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof ArrowTopIcon> = {
  title: 'Icons/ArrowTop',
  component: ArrowTopIcon,
} 

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export default meta;
type Story = StoryObj<typeof ArrowTopIcon>

export const Flat: Story = {
  render: () => <ArrowTopIcon />,
};
