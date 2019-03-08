import React from 'react';
import { shallow } from 'enzyme';
import { PeopleForm } from '../PeopleForm';

describe('Component PeopleForm ', () => {
    describe('WHEN is initialized ', () => {
        it('SHOULD render correctly ', () => {
            const component = shallow(<PeopleForm onSetPeople={() => { }} />);
            expect(component).toMatchSnapshot();
        });
    });

    describe('WHEN a name is written in the textarea input ', () => {
        const changeFn = jest.fn();
        it('SHOULD calls the onSetPeople method', () => {
            const component = shallow(<PeopleForm onSetPeople={changeFn} />);
            component.find('textarea').simulate('change', { target: { value: "Fake Event" } });
            expect(changeFn).toHaveBeenCalled();
        });
    });
});
