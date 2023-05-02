import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Logo } from './Logo'

export default {
  title: 'Design System/Logo',
  component: Logo,
} as Meta;

const Template: Story<LogoProps> = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {
};