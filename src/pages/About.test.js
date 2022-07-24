import { render } from '@testing-library/react';
import About from './About';

test('renders About page without crashing', () => {
    render(<About />);
});