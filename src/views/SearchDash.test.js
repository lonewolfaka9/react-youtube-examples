import React from 'react';
import SearchDash from './SearchDash';
import AppHeader from '../components/AppHeader'

import { configure, shallow, mount } from 'enzyme';
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';
import cookie from 'react-cookies'


const adapter = ReactSixteenAdapter;
configure({ adapter: new adapter.default() });
describe('Loading search View', () => {
    const historyMock = { push: jest.fn() };
    cookie.load = jest.fn(() => true)
    const searchdash = mount(<SearchDash history={historyMock} />);

    const searchdashSnap = shallow(<SearchDash history={historyMock} />);

    it('Search Page render', () => {
        expect(searchdashSnap).toMatchSnapshot();
    });



    it('initializes default `state`', () => {


        expect(searchdash.state()).toEqual({
            userAuth: true,
            query: '',
            nextPageToken: '',
            videoData: [],
            searchData: [],
            loading: "Search Something"
        });
    });

    it('Input value in AppHeader search input', () => {

        var query = "keyword";
        var appheader = searchdash.find(AppHeader)
        var searchInput = appheader.find("#search");
        searchInput.simulate('change', { target: { id: "search", name: 'search', value: query } });

        searchInput.simulate('keypress', { key: 'Enter', keyCode: 13, which: 13 });

        expect(appheader.state().query).toEqual(query); // query updated in app header

        expect(searchdash.state().query).toEqual(query);

    });


});
