import React from "react";
import {connect} from "react-redux";
import {MarketState} from "../../redux/Market";

function MarketInfo({market}) {
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
        </div>
    )
}

export default connect(
    state => ({market: state.market.market})
)(MarketInfo);