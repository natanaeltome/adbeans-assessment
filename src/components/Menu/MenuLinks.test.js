import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import MenuLinks from './MenuLinks';

test('renders MenuLinks without crashing', () => {
    render(
        <Router>
            <MenuLinks />
        </Router>
    );
});