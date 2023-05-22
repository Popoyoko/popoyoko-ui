import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { SearchIcon } from './searchIcon'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof SearchIcon> = {
  title: 'Icons/Search',
  component: SearchIcon,
} 

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export default meta;
type Story = StoryObj<typeof SearchIcon>

export const Flat: Story = {
  render: () => <SearchIcon />,
};

