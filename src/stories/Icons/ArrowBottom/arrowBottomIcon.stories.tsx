import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ArrowBottomIcon } from './arrowBottomIcon'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof ArrowBottomIcon> = {
  title: 'Icons/ArrowBottom',
  component: ArrowBottomIcon,
} 

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export default meta;
type Story = StoryObj<typeof ArrowBottomIcon>

export const Flat: Story = {
  render: () => <ArrowBottomIcon />,
};
