// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {heads: 0, tails: 0, total: 0, isHead: true}

  tossTheCoin = () => {
    const outcome = Math.ceil(Math.random() * 2)
    if (outcome === 1) {
      this.setState(pervState => ({tails: pervState.tails + 1, isHead: false}))
    } else {
      this.setState(pervState => ({heads: pervState.heads + 1, isHead: true}))
    }
    this.setState(pervState => ({total: pervState.total + 1}))
  }

  render() {
    const {heads, tails, total, isHead} = this.state
    return (
      <div className="background-container">
        <div className="coin-container">
          <h1 className="main-heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          {isHead ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="toss result"
              className="coin-sizing"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="toss result"
              className="coin-sizing"
            />
          )}
          <button type="button" className="button" onClick={this.tossTheCoin}>
            Toss Coin
          </button>
          <div className="score-container">
            <p className="score-para">Total: {total}</p>
            <p className="score-para">Heads: {heads}</p>
            <p className="score-para">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
