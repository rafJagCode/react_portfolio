import type { Meta, StoryObj } from '@storybook/react';
import Navlink from './Navlink';

const meta = {
  title: 'Molecules/Navlink',
  component: Navlink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Navlink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    link: '#projects',
    text: 'Projects',
  },
};
