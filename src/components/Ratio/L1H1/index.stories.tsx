import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { L1H1 } from "./index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof L1H1> = {
  title: "Components/Ratios/Ratio 1:1",
  component: L1H1,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export default meta;
type Story = StoryObj<typeof L1H1>;

export const Ratio1_1: Story = {
  render: () => <L1H1 />,
};
