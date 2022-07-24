import { render } from '@testing-library/react';
import List from './List';

test('renders List page without crashing', () => {
    render(<List />);
});