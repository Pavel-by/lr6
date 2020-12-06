import './App.css';
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";
import React from "react";
import {Provider, connect} from "react-redux";
import Errors from "./components/Errors";
import AdminScreen from "./components/admin/AdminScreen";
import MarketScreen from "./components/market/MarketScreen";

function App({member, market}) {
    if (!market)
        return (
            <div className="uk-flex uk-flex-center" style={{marginTop: 100}}>
                <span className="uk-text-bold">Загрузка</span>
            </div>
        );

    return (
        <div>
            <Errors/>
            <Switch>
                <Route path="/" exact={true} component={MarketScreen}/>
                <Route path="/admin" exact={true} component={AdminScreen}/>
                <Redirect to="/"/>
            </Switch>
        </div>
    );
}

export default connect(
    state => ({member: state.members.member, market: state.market.market})
)(App);
