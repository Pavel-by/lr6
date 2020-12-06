import React from "react";
import {connect} from "react-redux";
import Actions from "../redux/Actions";

function Errors({errors, removeError}) {
    if (errors.length === 0)
        return (<div/>);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.1)',
            zIndex: 1000
        }}>
            <div className="uk-container uk-container-center" style={{maxWidth: 600, marginTop: 100}}>
                 {errors.map(error => (
                     <div className="uk-alert uk-alert-danger" key={error.id}>
                         <button className="uk-close" onClick={() => {
                             removeError(error.id)
                         }}/>
                         <p>{error.message}</p>
                     </div>
                 ))}
            </div>
        </div>
    )
}

export default connect(
    state => ({errors: state.errors.errors}),
    {
        removeError: function(id) {
            return {
                type: Actions.RemoveError,
                id: id
            }
        }
    }
)(Errors)