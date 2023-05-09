import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { RatioRectangle } from "./RatioRectangle";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof RatioRectangle> = {
  title: "Components/Ratios/Ratio 2:3",
  component: RatioRectangle,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export default meta;
type Story = StoryObj<typeof RatioRectangle>;

export const Ratio2_3: Story = {
  render: () => <RatioRectangle />,
};
