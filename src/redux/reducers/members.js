import Actions from '../Actions';
import {Member} from "../Member";

const initialState = {
    member: null,
    members: null,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case Actions.SetMembers: {
            let members = action.members.map(member => new Member(member));
            return {
                ...state,
                members: members,
                member: members.find(member => member._id === state.member?._id)
            };
        }
        case Actions.SelectMember: {
            return {
                ...state,
                member: state.members?.find(member => member._id === action.memberId)
            };
        }
        default: {
            return state;
        }
    }
}