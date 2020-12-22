import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Spinner from '../UI/Spinner/spinner';
import Auth from './auth';
import { useSelector } from 'react-redux';
// import * as ReactReduxHooks from '../../Utilities/react-redux-hooks';


configure({ adapter: new Adapter() });

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: () => mockDispatch
}));

describe("<Auth />", () => {
    // const mockStore = configureStore();

    // const initialAuthorization = {
        
    // };

    beforeEach(() => {
        
    });

    it("Should show form when not loading", () => {
        const authData = {
            authorized: false,
            user: null,
            loading: false,
            username: "",
            password: "",
            token: "",
            hasError: false,
            error: ""
        }
        useSelector
            .mockReturnValueOnce(false)
            .mockReturnValueOnce(false)
            .mockReturnValueOnce("");
        const wrapper = shallow(<Auth />);
        expect(wrapper.find('form')).toHaveLength(1);
    });

    it("Should display spinner when loading", () => {
        const authData = {
            authorized: false,
            user: null,
            loading: true,
            username: "",
            password: "",
            token: "",
            hasError: false,
            error: ""
        }
        useSelector
            .mockReturnValueOnce(false)
            .mockReturnValueOnce(true)
            .mockReturnValueOnce("");
        const wrapper = shallow(<Auth />);
        expect(wrapper.find(Spinner)).toHaveLength(1);
    });

    it("Should show error if failed", () => {
        const authData = {
            authorized: false,
            user: null,
            loading: false,
            username: "",
            password: "",
            token: "",
            hasError: true,
            error: "Unable to login"
        }
        useSelector
            .mockReturnValueOnce(true)
            .mockReturnValueOnce(false)
            .mockReturnValueOnce("Unable to login")
        const wrapper = shallow(<Auth />);
        expect(wrapper.find('[className="error"]')).toHaveLength(1);
    });
});
