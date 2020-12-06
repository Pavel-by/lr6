import {connect} from "react-redux";
import {MarketState} from "../redux/Market";
import React from "react";
import MarketInfo from "./market/MarketInfo";
import {Link} from "react-router-dom";

class MarketWaiter extends React.Component {
    _intervalId;

    constructor(props) {
        super(props);
        this.state = {
            timerText: this._makeTimerText()
        };
    }

    componentDidMount() {
        this._intervalId = setInterval(function () {
            this.setState({
                timerText: this._makeTimerText()
            });
        }.bind(this), 1000);
    }

    componentWillUnmount() {
        clearInterval(this._intervalId);
        this._intervalId = null;
    }

    _makeTimerText() {
        let {market} = this.props;
        let time = Math.round((market.start - Date.now()) / 1000);
        let seconds = time % 60;
        let minutes = Math.floor(time / 60) % 60;
        let hours = Math.floor(time / 60 / 60) % 24;
        let days = Math.floor(time / 60 / 60 / 24);

        if (days > 0)
            return `${days} дней, ${hours} часов`;

        if (hours > 0)
            return `${hours} часов, ${minutes} минут`;

        if (minutes > 0)
            return `${minutes} минут ${seconds} секунд`;

        return `${seconds} секунд`;
    }


    render() {
        let {market} = this.props;
        let {timerText} = this.state;
        let infoView;

        switch (market.state) {
            case MarketState.Wait: {
                infoView = (
                    <div className="uk-panel uk-panel-box uk-panel-box-primary">
                        <p>До начала аукциона {timerText}</p>
                    </div>
                );
                break;
            }
            case MarketState.Finished: {
                infoView = (
                    <div className="uk-panel uk-panel-box uk-panel-box-primary">
                        <p>Аукцион завершен</p>
                    </div>
                );
                break;
            }
            default: {
                infoView = (
                    <div className="uk-panel uk-panel-box uk-panel-box-primary">
                        <p>Что-то пошло не так. Позовите администратора, если вы его найдете</p>
                    </div>
                );
            }
        }

        return (
            <div className="uk-container uk-container-center" style={{maxWidth: 600, marginTop: 100}}>
                <h2>Биржа</h2>
                <MarketInfo/>
                <div className="uk-margin">
                    {infoView}
                </div>
                <div className="uk-flex uk-flex-center uk-margin">
                    <Link className="uk-button" to="/admin">Администратор</Link>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({market: state.market.market})
)(MarketWaiter)