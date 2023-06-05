import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Cover } from "./Cover";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Cover> = {
  title: "Components/Avatar/Cover",
  component: Cover,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    showedit: {
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
    showedit: true,
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export default meta;
type Story = StoryObj<typeof Cover>;

export const cover: Story = {
  render: (args) => <Cover {...args} />,
};
