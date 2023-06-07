import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { DateFlatIcon } from './dateFlatIcon'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof DateFlatIcon> = {
  title: 'Icons/Date/DateFlat',
  component: DateFlatIcon,
} 

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export default meta;
type Story = StoryObj<typeof DateFlatIcon>

export const Flat: Story = {
  render: () => <DateFlatIcon />,
};
