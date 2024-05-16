import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    Title: "",
    Category: "",
    ImageURL: "",
    ImageAltText: ""
  },
};

export const DaveTheCheeseWizard: Story = {
  args: {
    Title: "Dave the Cheese Wizard",
    Category: "Bicolor Cat",
    ImageURL: "http://localhost:3000/img/davethecheesewizard.jpg",
    ImageAltText: `Image of a bicolor cat named Dave the Cheese Wizard`
  },
};