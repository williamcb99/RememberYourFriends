import type { Meta, StoryObj } from '@storybook/react';
import { NavBar } from './NavBar';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/NavBar',
  component: NavBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    Text1: "Home",
    Link1: "",
    Text2: "About",
    Link2: "",
    Text3: "Donation",
    Link3: "",
    Text4: "Contact us",
    Link4: "",
  },
};
