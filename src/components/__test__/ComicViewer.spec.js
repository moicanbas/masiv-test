import { render, screen } from '@testing-library/vue'; // Importa la función render de @testing-library/vue
import { createPinia, PiniaVuePlugin } from 'pinia';
import ComicViewer from '@/components/ComicViewer.vue';
import { describe, it } from 'vitest';

const pinia = createPinia();
pinia.use(PiniaVuePlugin);

const renderWithPinia = (component, options = {}) => {
  return render(component, {
    global: {
      plugins: [pinia],
      ...options,
    },
  });
};

describe('ComicViewer', () => {
  it('renders the component correctly', async () => {
    renderWithPinia(ComicViewer);

    await screen.findByTestId('confetti-explosion');
    await screen.findByTestId('comic-content');
    await screen.findByTestId('comic-rating');
    await screen.findByTestId('buttons-area');

    expect(screen.getByTestId('confetti-explosion')).toBeInTheDocument();
    expect(screen.getByTestId('comic-content')).toBeInTheDocument();
    expect(screen.getByTestId('comic-rating')).toBeInTheDocument();
    expect(screen.getByTestId('buttons-area')).toBeInTheDocument();
  });
});
