import { render } from '@testing-library/react';
import Button from './Button';

test('renders Button without crashing', () => {
    render(<Button />);
});