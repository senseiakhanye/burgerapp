import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Layout from './Components/Layout/Layout';
import Auth from './Components/Auth/auth';
import App from './App';
import { useSelector } from 'react-redux';
// import * as ReactReduxHooks from '../../Utilities/react-redux-hooks';


configure({ adapter: new Adapter() });

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: () => mockDispatch
}));

describe("<App />", () => {
    beforeEach(() => {
        
    });

    it("Should Load Auth when not authorized", () => {
        useSelector.mockReturnValue(false);
        const wrapper = shallow(<App />);
        expect(wrapper.find(Auth)).toHaveLength(1);
    });
    
    it("Should show Layout when authorized", () => {
      useSelector.mockReturnValue(true);
      const wrapper = shallow(<App />);
      expect(wrapper.find(Layout)).toHaveLength(1);
  });
});
