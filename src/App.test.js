import App from './App';

test('renders App without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
