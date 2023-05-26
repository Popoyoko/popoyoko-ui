import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { DateLineIcon } from './dateLineIcon'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof DateLineIcon> = {
  title: 'Icons/DateLine',
  component: DateLineIcon,
} 

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export default meta;
type Story = StoryObj<typeof DateLineIcon>

export const Line: Story = {
  render: () => <DateLineIcon />,
};

