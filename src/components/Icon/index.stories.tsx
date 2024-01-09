import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Icon } from './index';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    icon: {
      options: [
        'Add',
        'AddPicture',
        'ArrowBottom',
        'ArrowLeft',
        'ArrowRight',
        'ArrowTop',
        'ArrowTriangle',
        'DateFlat',
        'DateLine',
        'Information',
        'Search',
        'Upload',
        'UserFlat',
        'UserLine',
      ],
      control: { type: 'select' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const icon: Story = {
  render: (args) => <Icon {...args} />,
  args: {
    icon: 'Add',
    size: 'medium',
  },
};