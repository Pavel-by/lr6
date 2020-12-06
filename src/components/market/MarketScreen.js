import Errors from "../Errors";
import Market from "./Market";
import {connect} from 'react-redux';
import React from "react";
import SelectMember from "../login/SelectMember";
import {MarketState} from "../../redux/Market";
import MarketWaiter from "../MarketWaiter";

function MarketScreen({member, market}) {
    if (market.state !== MarketState.Active)
        return (
            <div>
                <Errors/>
                <MarketWaiter/>
            </div>
        );

    if (!member)
        return (
            <div>
                <Errors/>
                <SelectMember/>
            </div>
        );

    return (
        <div>
            <Errors/>
            <Market/>
        </div>
    );
}

export default connect(
    state => ({member: state.members.member, market: state.market.market})
)(MarketScreen)