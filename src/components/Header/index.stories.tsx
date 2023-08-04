import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Header } from "./index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export default meta;
type Story = StoryObj<typeof Header>;

export const Primary: Story = {
  render: () => <Header />,
};
