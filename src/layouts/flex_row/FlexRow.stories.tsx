import type { Meta, StoryObj } from '@storybook/react';
import FlexRow from './FlexRow';

const meta = {
  title: 'Layouts/FlexRow',
  component: FlexRow,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FlexRow>;

export default meta;

const Child = ({ index }: { index: number }) => (
  <div
    style={{
      width: '50px',
      height: '50px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'var(--accent)',
    }}
  >
    {index}
  </div>
);

const FlexRowTemplate: StoryObj<
  React.ComponentProps<typeof FlexRow> & { numberOfChildren: number }
> = {
  render: ({ numberOfChildren, ...args }) => (
    <FlexRow {...args}>
      {Array.from({ length: numberOfChildren }, (_, i) => (
        <Child index={i + 1} />
      ))}
    </FlexRow>
  ),
};

export const Default = {
  ...FlexRowTemplate,
  args: {
    Tag: 'div',
    numberOfChildren: 3,
  },
};
