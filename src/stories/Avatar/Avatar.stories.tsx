import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "./Avatar";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    small: {
      control: "boolean",
      table: {
        category: "Variant",
      },
    },
    background: {
      control: "file",
      table: {
        category: "Background",
      },
    },
  },
  args: {
    background: "#808080",
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export default meta;
type Story = StoryObj<typeof Avatar>;

export const small: Story = {
    render: () => <Avatar small/>,
};

export const cover: Story = {
  render: () => <Avatar />,
};
