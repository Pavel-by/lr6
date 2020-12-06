import Actions from '../Actions';
import {Market} from "../Market";

const initialState = {
    market: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case Actions.SetMarket: {
            return {
                ...state,
                market: new Market(action.market),
            };
        }
        default: {
            return state;
        }
    }
}