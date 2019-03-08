import React from 'react';
import { shallow } from 'enzyme';
import { GreetingList } from '../GreetingList';
import GreetingItem from '../GreetingItem';

describe('Component GreetingList ', () => {
    const list = [
        'First greeting',
        'Second greeting'
    ]
    const component = shallow(<GreetingList greetings={list} />);

    describe('WHEN is initialized ', () => {
        it('SHOULD render correctly ', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('WHEN receive a list of greetings ', () => {
        it('SHOULD render all the greetings ', () => {
            expect(component.find(GreetingItem)).toHaveLength(2);
        });
    });
});
