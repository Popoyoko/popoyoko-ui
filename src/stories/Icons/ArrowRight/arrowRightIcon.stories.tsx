import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ArrowRightIcon } from './arrowRightIcon'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof ArrowRightIcon> = {
  title: 'Icons/ArrowRight',
  component: ArrowRightIcon,
} 

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export default meta;
type Story = StoryObj<typeof ArrowRightIcon>

export const Flat: Story = {
  render: () => <ArrowRightIcon />,
};
