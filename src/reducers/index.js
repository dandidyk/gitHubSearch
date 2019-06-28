const initialState = {
    orgs: [],
    selectedOrg: null,
    searchInput: ''
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ORGS_LOADED':
            return {
                ...state,
                orgs: action.payload,
            };
        case 'SELECT_ORG':
            return {
                ...state,
                selectedOrg: action.payload,
            };
        // case 'SEARCH_ORG':
        //     return {
        //         ...state,
        //         newPost: {
        //             ...state.newPost,
        //             [action.payload.field]: action.payload.text
        //         }
        //     };
        case 'INPUT_ORG':
            return {
                ...state,
                searchInput: action.payload,
            };
        default:
            return state;
    }
};


export default reducer