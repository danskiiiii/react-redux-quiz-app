import React from 'react';
import ReactDOM from 'react-dom';
import OptionButton from '../components/OptionButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<OptionButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});
