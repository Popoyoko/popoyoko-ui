import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Media } from './Media'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Media> = {
  title: 'Components/Card/Media',
  component: Media,
} 

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export default meta;
type Story = StoryObj<typeof Media>

export const Media_Only: Story = {
  render: (args) => <Media {...args} />,
};
