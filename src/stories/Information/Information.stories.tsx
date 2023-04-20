import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Information } from './Information'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Information',
  component: Information,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Information>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Information> = (args) => <Information {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Exemple of really long texte that can be fit there',
  background: '#FFFFFF'
};
