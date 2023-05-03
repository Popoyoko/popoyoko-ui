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
  args: {
    background: "url(https://imgs.search.brave.com/KUc_Sjgkt3SuouS7E-9zbhV2YGG7MFpPmcNklJmJYu0/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9ib25q/b3VybmF0dXJlLmZy/L3dwLWNvbnRlbnQv/dXBsb2Fkcy9pbWFn/ZS1wYXlzYWdlLWdy/YXR1aXRlLWEtdGVs/ZWNoYXJnZXItNS5q/cGc)"
  }
} 

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export default meta;
type Story = StoryObj<typeof Card>

export const simple: Story = {
  render: (args) => <Card {...args} />,
  args: {
    variant: "simple"
  }
};

export const media: Story = {
  render: (args) => <Card {...args} />,
  args: {
    variant: "media",
    label: "Title",
    mention: "Mention",
    subTitle: "SubTitle",
    price: 246,
  }
};