import React from "react";
import {connect} from "react-redux";
import {MarketState} from "../../redux/Market";
import {socket, SocketEvents} from '../../socket';

function reloadMarket() {
    socket.emit(SocketEvents.RefreshMarket);
}

function AdminMarketInfo({market}) {
    if (!market)
        return (
            <div className="uk-panel uk-panel-box uk-panel-box-secondary">
                Ожидание данных
            </div>
        );

    return (
        <div className="uk-panel uk-panel-box uk-panel-box-secondary">
            <p>Время начала: {market.start.toLocaleString()}</p>
            <p>Время окончания: {market.end.toLocaleString()}</p>
            <p>Скорость обновления цены акций: {market.recomputeDuration} секунд</p>
            <p>Состояние: {
            market.state === MarketState.Wait
                ? "Ожидание начала"
                : market.state === MarketState.Finished ? "Окончен" : "Активен" }</p>
            <p><button className="uk-button" onClick={() => reloadMarket()}>Перезапустить</button> </p>
        </div>
    )
}

export default connect(
    state => ({market: state.market.market})
)(AdminMarketInfo);