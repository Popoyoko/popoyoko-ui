import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Default } from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Default> = {
  title: 'Components/Card/Default',
  component: Default,
  argTypes: {
    // Assigns the argTypes to the Colors category
    title: {
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
type Story = StoryObj<typeof Default>


export const default_card: Story = {
  render: (args) => <Default {...args} />,
  args: {
    title: "Title",
    mention: "Mention",
    subTitle: "SubTitle",
    price: 246,
  }
};