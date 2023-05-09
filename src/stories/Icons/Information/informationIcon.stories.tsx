import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { InformationIcon } from './informationIcon'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof InformationIcon> = {
  title: 'Icons/Information',
  component: InformationIcon,
} 

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export default meta;
type Story = StoryObj<typeof InformationIcon>

export const Flat: Story = {
  render: () => <InformationIcon />,
};
