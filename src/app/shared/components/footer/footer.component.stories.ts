import type { Meta, StoryObj } from '@storybook/angular';
import { FooterComponent } from './footer.component';
import { applicationConfig } from '@storybook/angular';
import { provideRouter } from '@angular/router';

const meta: Meta<FooterComponent> = {
  component: FooterComponent,
  title: 'Components/Footer',
  decorators: [
    applicationConfig({
      providers: [provideRouter([])],
    }),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<FooterComponent>;

export const Default: Story = {
  args: {},
};
