import {
    useSelector as originalUseSelector,
    useDispatch as originalUseDispatch
} from "react-redux";

export const useSelector = state => originalUseSelector(state.auth);
export const useDispatch = () => originalUseDispatch();