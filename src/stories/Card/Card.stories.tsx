import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from './Card'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Card',
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const simple = Template.bind({});
simple.args = {
  variant: 'simple',
  background: '#000000'
};

export const media = Template.bind({});
media.args = {
  variant: 'media',
  label: 'label',
  mention: 'mention',
  subTitle: 'subtitle',
  price: '256',
  background: '#000000'
};
