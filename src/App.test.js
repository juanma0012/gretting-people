import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('Component App ', () => {
    describe('WHEN is initialized ', () => {
        it('SHOULD render correctly ', () => {
            const component = shallow(<App />);
            expect(component).toMatchSnapshot();
        });
    });
});