import Actions from '../Actions';
import {Share} from "../Share";
import {socket, SocketEvents} from '../../socket';

const initialState = {
  shares: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case Actions.SetShares: {
            return {
                ...state,
                shares: action.shares.map(share => new Share(share))
            }
        }
        case Actions.BuyShares: {
            socket.emit(SocketEvents.BuyShares, action);
            return state;
        }
        default: {
            return state;
        }
    }
}