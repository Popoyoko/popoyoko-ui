import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { UserLineIcon } from './userLineIcon'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof UserLineIcon> = {
  title: 'Icons/UserLine',
  component: UserLineIcon,
} 

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export default meta;
type Story = StoryObj<typeof UserLineIcon>

export const Line: Story = {
  render: () => <UserLineIcon />,
};

