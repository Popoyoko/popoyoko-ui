import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Card> = {
  title: 'Design System/Card',
  component: Card,
  argTypes: {
    background: { control: 'color' },
  },
} 

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export default meta;
type Story = StoryObj<typeof Card>

export const simple: Story = {
  render: () => <Card variant='simple' label="label" />,
};

export const media: Story = {
  render: () => <Card variant='media' label="label" mention='mention' subTitle='subTitle' price={246} />,
};