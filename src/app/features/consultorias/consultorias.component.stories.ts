import type { Meta, StoryObj } from '@storybook/angular';
import { ConsultoriasComponent } from './consultorias.component';
import { applicationConfig } from '@storybook/angular';
import { provideRouter } from '@angular/router';

const meta: Meta<ConsultoriasComponent> = {
  component: ConsultoriasComponent,
  title: 'Features/Consultorias',
  decorators: [
    applicationConfig({
      providers: [provideRouter([])],
    }),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<ConsultoriasComponent>;

export const Default: Story = {
  args: {},
};
