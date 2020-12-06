import Actions from "../../redux/Actions";
import React from "react";
import {connect} from "react-redux";

function Member({member, onClick, selectMember}) {
    return (
        <div className="uk-panel uk-panel-box uk-panel-box-secondary uk-margin" key={member._id}>
            <div className="uk-flex uk-flex-space-between uk-flex-middle uk-margin-left uk-margin-right">
                <span className="uk-text-bold">{member.name}</span>
                <button className="uk-button" onClick={() => selectMember(member._id)}>Войти</button>
            </div>
        </div>
    );
}

export default connect(
    null,
    {
        selectMember: function (memberId) {
            return {
                type: Actions.SelectMember,
                memberId: memberId,
            };
        }
    }
)(Member)