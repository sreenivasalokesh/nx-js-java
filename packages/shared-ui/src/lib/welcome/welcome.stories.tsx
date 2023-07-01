import type { Meta } from '@storybook/react';
import { Welcome } from './welcome';

const Story: Meta<typeof Welcome> = {
  component: Welcome,
  title: 'Welcome',
};
export default Story;

export const Primary = {
  args: {},
};
