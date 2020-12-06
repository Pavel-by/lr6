import React from "react";
import {connect} from 'react-redux';
import AdminShare from "./AdminShare";
import {MarketState} from "../../redux/Market";

function AdminSharesList({shares, market}) {
    if (!shares || !market || market.state !== MarketState.Active)
        return (
            <div className="uk-panel uk-panel-box uk-panel-box-secondary">
                Ожидание данных
            </div>
        );

    return (
        <div>
            {shares.map(share => (
                <div className="uk-margin" key={share._id}>
                    <AdminShare share={share}/>
                </div>
            ))}
        </div>
    )
}

export default connect(
    state => ({shares: state.shares.shares, market: state.market.market})
)(AdminSharesList);