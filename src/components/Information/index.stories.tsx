import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Information } from "./index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Information> = {
  title: "Components/Information",
  component: Information,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  args: {
    label: "Exemple of really long texte that can be fit there"
  }
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export default meta;
type Story = StoryObj<typeof Information>;

export const Primary: Story = {
  render: (args) => <Information {...args} />,
};
