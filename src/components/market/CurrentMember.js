import React from "react";
import {connect} from "react-redux";
import Actions from "../../redux/Actions";

function CurrentMember({member, logout}) {
    return (
        <div className="uk-panel uk-panel-box uk-panel-box-primary">
            <div className="uk-flex uk-flex-space-between uk-flex-middle">
                <div>
                    <span className="uk-text-bold">{member.name}</span>
                    <span> | {Math.round(member.money)}</span>
                </div>
                <button className="uk-button uk-button-primary" onClick={logout}>Выйти</button>
            </div>
        </div>
    );
}

export default connect(
    state => ({member: state.members.member}),
    {
        logout: function () {
            return {
                type: Actions.SelectMember,
                member: null,
            }
        }
    }
)(CurrentMember)