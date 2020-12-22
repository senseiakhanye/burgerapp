const updateState = (state, updatedState) => {
    return {
        ...state,
        ...updatedState
    }
}

export default updateState;