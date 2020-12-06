import React from "react";
import {connect} from "react-redux";

class AdminShare extends React.Component {
    render() {
        let {share, members} = this.props;

        return (
            <div className="uk-panel uk-panel-box uk-panel-box-secondary">
                <h3 className="uk-panel-title">{share.name}</h3>
                <p>Цена одной акции: {Math.round(share.price)}</p>
                <p>Количество свободных акций: {share.availableCount}</p>
                <div>
                    {share.owners.map(owner => {
                        let member = members.find(member => member._id === owner._id);

                        return (
                            <div className="uk-panel uk-panel-box uk-panel-box-secondary uk-margin">
                                <p><span className="uk-text-bold">{member.name}</span> | {owner.sharesCount} акций</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({members: state.members.members})
)(AdminShare)