import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta = {
  title: 'Atoms/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  decorators: [
    (Story) => (
      <div>
        <style>{'.card{width:500px; height: 200px}'}</style>
        <Story />
      </div>
    ),
  ],
};

export const Vertical: Story = {
  decorators: [
    (Story) => (
      <div>
        <style>{'.card{width:300px; height: 400px}'}</style>
        <Story />
      </div>
    ),
  ],
};
