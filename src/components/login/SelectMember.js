import {connect} from 'react-redux';
import React from "react";
import Member from './Member';
import {Link} from "react-router-dom";

function SelectMember({members}) {
    if (members == null)
        return (
            <div className="uk-flex uk-flex-center" style={{marginTop: 100}}>
                <span className="uk-text-bold">Загрузка</span>
            </div>
        );

    return (
        <div className="uk-container uk-smal uk-container-center uk-margin-large" style={{marginTop: 100, maxWidth: 600}}>
            <h2>Войти на биржу</h2>
            {members.map(member => (<Member member={member} key={member._id}/>))}
            <div className="uk-flex uk-flex-center">
                <Link className="uk-button" to="/admin">Администратор</Link>
            </div>
        </div>
    );
}

export default connect(
    state => ({members: state.members.members})
)(SelectMember)