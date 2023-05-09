import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Card> = {
  title: 'Design System/Card',
  component: Card,
  argTypes: {
    variant: {
      control: "select",
      table: {
        category: 'Variant',
        subcategory: 'Style'
      },
    },
    // Assigns the argTypes to the Colors category
    label: {
      table: {
        category: 'Text',
        subcategory: 'Title contents',
      },
    },
    mention: {
      table: {
        category: 'Text',
        subcategory: 'Mention contents',
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

export const Media_Only: Story = {
  render: (args) => <Card {...args} />,
  args: {
    variant: "simple"
  }
};

export const Default_Card: Story = {
  render: (args) => <Card {...args} />,
  args: {
    variant: "media",
    label: "Title",
    mention: "Mention",
    subTitle: "SubTitle",
    price: 246,
  }
};