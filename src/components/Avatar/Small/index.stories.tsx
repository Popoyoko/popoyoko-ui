import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Small } from "./index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Small> = {
  title: "Components/Avatar/Small",
  component: Small,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    showbadge: {
      control: "boolean",
      table: {
        category: "Variant",
      }
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
    showbadge: true,
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export default meta;
type Story = StoryObj<typeof Small>;

export const small: Story = {
    render: (args) => <Small {...args} />,
    args: {

    },
};

