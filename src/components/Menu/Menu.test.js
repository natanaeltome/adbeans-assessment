import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import Menu from './Menu';

test('renders Menu without crashing', () => {
    render(
        <Router>
            <Menu />
        </Router>
    );
});