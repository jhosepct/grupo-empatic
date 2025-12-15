import type { Meta, StoryObj } from '@storybook/angular';
import { EmpatheticActionsComponent } from './empathetic-actions.component';
import { applicationConfig } from '@storybook/angular';
import { provideRouter } from '@angular/router';

const meta: Meta<EmpatheticActionsComponent> = {
  component: EmpatheticActionsComponent,
  title: 'Features/EmpatheticActions',
  decorators: [
    applicationConfig({
      providers: [provideRouter([])],
    }),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<EmpatheticActionsComponent>;

export const Default: Story = {
  args: {},
};
