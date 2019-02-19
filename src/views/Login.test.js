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

    it(' default `state` test', () => {
        expect(login).toEqual({  username: '', password: '' });
    });


    describe('invalid username and password test', () => {
        const username = 'admin1';
        const password = 'password1';


        it('updates the person in `state`', () => {
            const usernameInput = login.find("#username");
            const passwordInput = login.find("#password");
    
            usernameInput.simulate('change', { target: { id:"username",name: 'username', value: username } });
            passwordInput.simulate('change', { target: { id:"password",name: 'password', value: password } });

          //  console.log(login.state().username);
            expect(login.this.username).toEqual(username);
            expect(login.this.password).toEqual(password);
            login.find('#submit').simulate('click');
            expect(window.confirm).toHaveBeenLastCalledWith("Invalid Credentials");
           


         });
   
    
    });

    describe('valid username and password test', () => {
        const username = 'admin';
        const password = 'password';


        it('updates the person in `state`', () => {
            const usernameInput = login.find("#username");
            const passwordInput = login.find("#password");
    
            usernameInput.simulate('change', { target: { id:"username",name: 'username', value: username } });
            passwordInput.simulate('change', { target: { id:"password",name: 'password', value: password } });

           // console.log(login.state().username);
            expect(login.this.username).toEqual(username);
            expect(login.this.password).toEqual(password);
            login.find('#submit').simulate('click');
            expect(historyMock.push).toHaveBeenLastCalledWith('/search');           


         });
   
    
    });
  
});