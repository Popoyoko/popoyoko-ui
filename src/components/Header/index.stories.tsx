import { Meta, StoryObj } from '@storybook/react';

import { Header } from './index'


const meta : Meta<typeof Header> = {
    title: 'Components/Header',
    component: Header,
}

export default meta;
type Story = StoryObj<typeof Header>

export const header: Story = {
    parameters: {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/5020yqM4matOAaZM3e1ZNP/POPOYOKO-UI?node-id=369%3A506&mode=dev'
    }
}
}