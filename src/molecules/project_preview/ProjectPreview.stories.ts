import type { Meta, StoryObj } from '@storybook/react';
import ProjectPreview from './ProjectPreview';

const meta = {
  title: 'Molecules/ProjectPreview',
  component: ProjectPreview,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProjectPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Porfolio: Story = {
  args: {
    imageName: 'portfolio',
  },
};
