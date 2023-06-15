import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { L2H3 } from "./L2H3";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof L2H3> = {
  title: "Components/Ratios/Ratio 2:3",
  component: L2H3,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export default meta;
type Story = StoryObj<typeof L2H3>;

export const Ratio2_3: Story = {
  render: () => <L2H3 />,
};
