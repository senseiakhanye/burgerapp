import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavigationsItems from './navigationitems';
import NavigationItem from './NavigationItem/navigationitem';

configure({ adapter: new Adapter() });

describe("<NavigationsItems />", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<NavigationsItems />);
    });

    it("Ul items should have two items in list", () => {
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });

    it("Ul items should have two items in list even with props", () => {
        wrapper.setProps({ auth: true });
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });
})