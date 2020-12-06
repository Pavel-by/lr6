import React from "react";
import AdminMembersList from "./AdminMembersList";
import {Link} from "react-router-dom";
import AdminSharesList from "./AdminSharesList";
import MarketInfo from "../market/MarketInfo";
import AdminMarketInfo from "./AdminMarketInfo";

function AdminScreen() {
    return (
        <div className="uk-container uk-container-center" style={{marginTop: 30}}>
            <div className="uk-grid">
                <div className="uk-width-1-3">
                    <h2>
                        Администратор
                        <Link className="uk-button uk-button-primary uk-margin-small-left" to="/">Выйти</Link>
                    </h2>
                    <hr/>
                    <AdminMembersList/>
                </div>
                <div className="uk-width-2-3">
                    <h2>Биржа</h2>
                    <AdminMarketInfo/>
                    <h2>Акции</h2>
                    <AdminSharesList/>
                </div>
            </div>
        </div>
    )
}

export default AdminScreen;