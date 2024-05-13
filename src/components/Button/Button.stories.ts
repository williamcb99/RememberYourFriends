import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const AvailableCats: Story = {
  args: {
    children: "Available Cats",
  },
};

export const AdoptionInquiry: Story = {
  args: {
    children: "Adoption Inquiry",
  },
};

export const SendForm: Story = {
  args: {
    children: "Send",
  },
};

export const Ghost: Story = {
  args: {
    children: "Ghost Button",
    className: "button__ghost"
  },
};