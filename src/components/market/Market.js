import React from "react";
import CurrentMember from "./CurrentMember";
import MembersList from "./MembersList";
import SharesList from "./SharesList";
import MarketInfo from "./MarketInfo";

function Market() {

    return (
        <div className="uk-container uk-container-center" style={{marginTop: 30}}>
            <div className="uk-grid">
                <div className="uk-width-1-3">
                    <h2>Участники</h2>
                    <CurrentMember/>
                    <hr/>
                    <MembersList/>
                </div>
                <div className="uk-width-2-3">
                    <h2>Биржа</h2>
                    <MarketInfo/>
                    <h2>Акции</h2>
                    <SharesList/>
                </div>
            </div>
        </div>
    )
}

export default Market;