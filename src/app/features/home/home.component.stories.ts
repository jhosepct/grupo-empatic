import type { Meta, StoryObj } from '@storybook/angular';
import { HomeComponent } from './home.component';
import { applicationConfig } from '@storybook/angular';
import { provideRouter } from '@angular/router';

const meta: Meta<HomeComponent> = {
  component: HomeComponent,
  title: 'Features/Home',
  decorators: [
    applicationConfig({
      providers: [provideRouter([])],
    }),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<HomeComponent>;

export const Default: Story = {
  args: {},
};
