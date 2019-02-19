import React from 'react';
import Login from './Login';
import { configure, shallow } from 'enzyme';
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';
 
const adapter = ReactSixteenAdapter;
configure({ adapter: new adapter.default() });

describe('Login', () => {
    const historyMock = { push: jest.fn() }; 
    window.confirm = jest.fn(() => true) // always click 'yes'
    const login = shallow(<Login history={historyMock} />);
    it('Login Page render', () => {
        expect(login).toMatchSnapshot();
    });

    
  
});