import React from "react";
import {connect} from 'react-redux';
import {MarketState} from "../../redux/Market";

function AdminMembersList({member, members, market}) {
    if (!members || !market || market.state !== MarketState.Active)
        return (
            <div className="uk-panel uk-panel-box uk-panel-box-secondary">
                Ожидание данных
            </div>
        );

    return (
        <div>
            {members.map(member => (
                <div className="uk-panel uk-panel-box uk-panel-box-secondary uk-margin" key={member._id}>
                    <p>
                        <span className="uk-text-bold">{member.name}</span>
                        <span> | {Math.round(member.money)}</span>
                    </p>
                </div>
            ))}
        </div>
    );
}

export default connect(
    state => ({members: state.members.members, member: state.members.member, market: state.market.market})
)(AdminMembersList)