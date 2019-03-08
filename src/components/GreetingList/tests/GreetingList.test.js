import React from 'react';
import { shallow } from 'enzyme';
import GreetingList from '../GreetingList';

describe('Component GreetingList ', () => {
    describe('WHEN is initialized ', () => {
        it('SHOULD render correctly ', () => {
            const component = shallow(<GreetingList />);
            expect(component).toMatchSnapshot();
        });
    });
});