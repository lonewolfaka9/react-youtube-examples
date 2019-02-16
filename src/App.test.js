import React from 'react';
import App from './App';
import { configure ,shallow } from 'enzyme';
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';
const adapter = ReactSixteenAdapter ;
configure({ adapter: new adapter.default() });

describe('App', () => {
  const app = shallow(<App />);
  it('render', () => {
    expect(app).toMatchSnapshot();
});
});