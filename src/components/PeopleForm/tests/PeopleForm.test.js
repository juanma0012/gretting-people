import React from 'react';
import { shallow } from 'enzyme';
import PeopleForm from '../PeopleForm';

describe('Component PeopleForm ', () => {
    describe('WHEN is initialized ', () => {
        it('SHOULD render correctly ', () => {
            const component = shallow(<PeopleForm onSetPeople={() => {}} />);
            expect(component).toMatchSnapshot();
        });
    });
});