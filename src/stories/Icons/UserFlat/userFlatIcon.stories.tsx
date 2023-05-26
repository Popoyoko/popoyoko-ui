import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { UserFlatIcon } from './userFlatIcon'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof UserFlatIcon> = {
  title: 'Icons/UserFlat',
  component: UserFlatIcon,
} 

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export default meta;
type Story = StoryObj<typeof UserFlatIcon>

export const Flat: Story = {
  render: () => <UserFlatIcon />,
};

