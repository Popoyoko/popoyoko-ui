import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Cube } from "./Cube";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Cube> = {
  title: "Components/Ratios/Ratio 1:1",
  component: Cube,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export default meta;
type Story = StoryObj<typeof Cube>;

export const Ratio1_1: Story = {
  render: () => <Cube />,
};
