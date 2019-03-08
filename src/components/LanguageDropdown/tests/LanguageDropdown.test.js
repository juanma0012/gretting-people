import React from 'react';
import { shallow } from 'enzyme';
import { LanguageDropdown } from '../LanguageDropdown';

describe('Component LanguageDropdown ', () => {
    describe('WHEN is initialized ', () => {
        it('SHOULD render correctly ', () => {
            const component = shallow(<LanguageDropdown onSetLanguage={() => { }} />);
            expect(component).toMatchSnapshot();
        });
    });

    describe('WHEN a language is changed in the dropdown ', () => {
        const changeFn = jest.fn();
        it('SHOULD calls the method  onSetLanguage', () => {
            const component = shallow(<LanguageDropdown onSetLanguage={changeFn} />);
            component.find('select').simulate('change', { target: { value: "spanish" } });
            expect(changeFn).toHaveBeenCalled();
        });
    });
});
