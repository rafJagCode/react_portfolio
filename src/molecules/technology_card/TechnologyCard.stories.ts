import type { Meta, StoryObj } from '@storybook/react';
import TechnologyCard from './TechnologyCard';

const meta = {
  title: 'Atoms/TechnologyCard',
  component: TechnologyCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TechnologyCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Javascript: Story = {
  args: {
    imageName: 'javascript',
    text: 'Javascript',
  },
};
