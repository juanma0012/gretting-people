import React from 'react';
import { shallow } from 'enzyme';
import LanguageDropdown from '../LanguageDropdown';

describe('Component LanguageDropdown ', () => {
    describe('WHEN is initialized ', () => {
        it('SHOULD render correctly ', () => {
            const component = shallow(<LanguageDropdown onSetLanguage={() => { }} />);
            expect(component).toMatchSnapshot();
        });
    });
});