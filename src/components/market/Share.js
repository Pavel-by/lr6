import React from "react";
import {connect} from "react-redux";
import {ShareOwner} from "../../redux/Share";
import Actions from "../../redux/Actions";

class Share extends React.Component {
    static clamp(x: number, min: number, max: number): number {
        return Math.max(min, Math.min(x, max))
    }

    constructor(props) {
        super(props);
        this.state = {
            buyCount: 0,
            sellCount: 0,
        }
    }

    set buyCount(value) {
        this.setState({
            ...this.state,
            buyCount: value,
        })
    }

    get buyCount() {
        try {
            return parseInt(this.state.buyCount);
        } catch (e) {
            return 0;
        }
    }

    buy() {
        let {share, member} = this.props;
        this.props.buyShares(member._id, share._id, this.buyCount);
        this.buyCount = 0;
    }

    sell() {
        let {share, member} = this.props;
        this.props.buyShares(member._id, share._id, -this.buyCount);
        this.buyCount = 0;
    }

    render() {
        let {share, member} = this.props;
        let owner = share.owners.find(owner => owner._id === member._id);

        if (!owner)
            owner = new ShareOwner({_id: member._id});

        return (
            <div className="uk-panel uk-panel-box uk-panel-box-secondary">
                <h3 className="uk-panel-title">{share.name}</h3>
                <p>Цена одной акции: {Math.round(share.price)}</p>
                <p>Количество свободных акций: {share.availableCount}</p>
                <p>Ваши акции: {parseInt(owner.sharesCount)}</p>
                <div className="uk-form">
                    <input type="number" value={this.state.buyCount} onChange={(e) => this.buyCount = e.target.value}/>
                    <div className="uk-button-group uk-margin-small-left">
                        <button type="button" className="uk-button" onClick={() => this.buy()}>Купить</button>
                        <button type="button" className="uk-button" onClick={() => this.sell()}>Продать</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({member: state.members.member}),
    {
        buyShares: function (memberId, shareId, sharesCount) {
            return {
                type: Actions.BuyShares,
                memberId: memberId,
                shareId: shareId,
                sharesCount: sharesCount
            }
        }
    }
)(Share)