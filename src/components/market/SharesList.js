import Share from './Share';
import React from "react";
import {connect} from 'react-redux';

function SharesList({shares}) {
    if (!shares)
        return (
            <div className="uk-panel uk-panel-box uk-panel-box-secondary">
                Ожидание данных
            </div>
        );

    return (
        <div>
            {shares.map(share => (
                <div className="uk-margin" key={share._id}>
                    <Share share={share}/>
                </div>
            ))}
        </div>
    )
}

export default connect(
    state => ({shares: state.shares.shares})
)(SharesList);