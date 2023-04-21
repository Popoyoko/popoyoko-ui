import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Card> = {
  title: 'Design System/Card',
  component: Card,
  argTypes: {
    variant: {
      table: {
        category: 'Variant',
        subcategory: 'Style',
      },
    },
    // Assigns the argTypes to the Colors category
    background: {
      control: 'color',
      table: {
        category: 'Colors',
        // Assigns the argTypes to a specific subcategory
        subcategory: 'Button colors',
      },
    },
    mention: {
      control: {
        type: 'text'
      },
      table: {
        category: 'Text',
        subcategory: 'Mention contents',
      },
    },
    label: {
      table: {
        category: 'Text',
        subcategory: 'Title contents',
      },
    },
    subTitle: {
      table: {
        category: 'Text',
        subcategory: 'Subtitle contents',
      },
    },
    price: {
      table: {
        category: 'Text',
        subcategory: 'Price contents',
      },
    },
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