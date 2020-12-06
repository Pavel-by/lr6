import Actions from "../Actions";

const initialState = {
  errors: []
};
let errorId = 0;

export default function (state = initialState, action) {
    switch (action.type) {
        case Actions.AddError: {
            let error = {id: errorId++, message: action.message};
            return {
                ...state,
                errors: [...state.errors, error]
            }
        }
        case Actions.RemoveError: {
            return {
                ...state,
                errors: state.errors.filter(error => error.id !== action.id)
            }
        }
        default: return state;
    }
}