import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Information } from './Information'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Information> = {
  title: 'Design System/Information',
  component: Information,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    background: { control: 'color' },
  },
} 

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export default meta;
type Story = StoryObj<typeof Information>

export const Primary: Story = {
  render: () => <Information label='Exemple of really long texte that can be fit there' />,
};

