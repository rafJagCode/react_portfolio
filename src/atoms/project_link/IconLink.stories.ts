import type { Meta, StoryObj } from '@storybook/react';
import { IconType, Allocation } from './types';
import IconLink from './IconLink';

const meta = {
  title: 'Atoms/IconLink',
  component: IconLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof IconLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GithubProject: Story = {
  args: {
    iconType: IconType.Github,
    link: 'https://example.com',
    allocation: Allocation.Project,
  },
};

export const DemoProject: Story = {
  args: {
    iconType: IconType.Demo,
    link: 'https://example.com',
    allocation: Allocation.Project,
  },
};

export const GithubNavbar: Story = {
  args: {
    iconType: IconType.Github,
    link: 'https://example.com',
    allocation: Allocation.Navbar,
  },
};

export const LeetcodeNavbar: Story = {
  args: {
    iconType: IconType.Leetcode,
    link: 'https://example.com',
    allocation: Allocation.Navbar,
  },
};

export const FreeCodeCampNavbar: Story = {
  args: {
    iconType: IconType.FreeCodeCamp,
    link: 'https://example.com',
    allocation: Allocation.Navbar,
  },
};
