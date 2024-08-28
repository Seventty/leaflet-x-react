import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, expect } from '@storybook/test';

import LeafletXReact from './LeafletXReact';

const meta = {
  title: 'LeafletXReact/MapContainer',
  component: LeafletXReact,
} satisfies Meta<typeof LeafletXReact>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LeafletMap: Story = {
  args: {
    geoJson: {}
  },
};