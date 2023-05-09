import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Icon } from "./Icon";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Icon> = {
  title: "Components/Icon",
  component: Icon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: { control: 'radio',parametre:["small", "medium", "large"]},
    small: {
      table: {
        category: "Sizes",
      },
    },
    medium: {
      table: {
        category: "Sizes",
      },
    },
    large: {
      table: {
        category: "Sizes",
      },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export default meta;
type Story = StoryObj<typeof Icon>;

export const Small: Story = {
  render: () => <Icon small />,
};

export const Medium: Story = {
  render: () => <Icon medium />,
};

export const large: Story = {
  render: () => <Icon large />,
};
