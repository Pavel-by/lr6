import React from "react";
import {connect} from 'react-redux';

function MembersList({member, members}) {
    if (!members)
        return (
            <div className="uk-panel uk-panel-box uk-panel-box-secondary">
                Ожидание данных
            </div>
        );

    return (
        <div>
            {members.filter(other => other._id !== member._id).map(member => (
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
    state => state.members
)(MembersList)