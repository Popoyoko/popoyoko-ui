import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Section } from "./Section";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Section> = {
  title: "Components/Section",
  component: Section,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  args: {
    title: "Section name",
    label: "Swap me",
  }
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export default meta;
type Story = StoryObj<typeof Section>;

export const Primary: Story = {
  render: (args) => <Section {...args} />,
  // args: {
  //   label: "Exemple of really long texte that can be fit there",
  // },
};
