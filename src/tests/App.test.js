import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('Component App ', () => {
    describe('WHEN is initialized ', () => {
        const component = shallow(<App />);
        it('SHOULD render correctly ', () => {
            expect(component).toMatchSnapshot();
        });
        it('SHOULD contains a title ', () => {
            expect(component.find('h1').text()).toEqual('Greeting people');
        });
        it('SHOULD contains the PeopleForm component', () => {
            expect(component.find('Connect(PeopleForm)')).toHaveLength(1);
        });
        it('SHOULD contains the LanguageDropdown component', () => {
            expect(component.find('Connect(LanguageDropdown)')).toHaveLength(1);
        });
        it('SHOULD contains the GreetingList component', () => {
            expect(component.find('Connect(GreetingList)')).toHaveLength(1);
        });
    });
});
