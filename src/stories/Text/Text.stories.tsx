import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Text } from './Text'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Text> = {
  title: 'Design System/Text',
  component: Text,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} 

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export default meta;
type Story = StoryObj<typeof Text>

export const Primary: Story = {
  render: () => <Text title='title' description='description'/>,
};

