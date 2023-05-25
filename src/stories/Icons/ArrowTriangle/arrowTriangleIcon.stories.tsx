import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ArrowTriangleIcon } from './arrowTriangleIcon'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof ArrowTriangleIcon> = {
  title: 'Icons/ArrowTriangle',
  component: ArrowTriangleIcon,
} 

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export default meta;
type Story = StoryObj<typeof ArrowTriangleIcon>

export const Flat: Story = {
  render: () => <ArrowTriangleIcon />,
};
