import type { Meta, StoryObj } from '@storybook/angular';
import { HeaderComponent } from './header.component';
import { applicationConfig } from '@storybook/angular';
import { provideRouter } from '@angular/router';

const meta: Meta<HeaderComponent> = {
  component: HeaderComponent,
  title: 'Components/Header',
  decorators: [
    applicationConfig({
      providers: [provideRouter([])],
    }),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<HeaderComponent>;

export const Default: Story = {
  args: {},
};
