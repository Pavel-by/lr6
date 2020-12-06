import io from 'socket.io-client';
import store from './redux/store';
import Actions from './redux/Actions';

const socket = io("http://localhost:3000", {
    path: "/socket",
});

const SocketEvents = {
    Market: 'Market',
    Shares: 'Shares',
    Members: 'Members',
    Error: 'Error',

    BuyShares: 'BuyShares',
    RefreshMarket: 'RefreshMarket'
};

socket.on(SocketEvents.Market, (market) => {
    store.dispatch({
        type: Actions.SetMarket,
        market: market,
    });
});

socket.on(SocketEvents.Members, (members) => {
    store.dispatch({
        type: Actions.SetMembers,
        members: members
    });
});

socket.on(SocketEvents.Shares, (shares) => {
    store.dispatch({
        type: Actions.SetShares,
        shares: shares,
    });
});

socket.on(SocketEvents.Error, (message) => {
    store.dispatch({
        type: Actions.AddError,
        message: message,
    });
});

export default socket;
export {socket, SocketEvents};