// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {heads: 0, tails: 0}

  render() {
    return (
      <div className="background-container">
        <div className="coin-container">
          <h1 className="main-heading">Coin Toss Game</h1>
          <p className="para">Head (or) Tails</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
            alt="head"
            className="coin-sizing"
          />
          <button type="button" className="button">
            Toss Coin
          </button>
          <div className="score-container">
            <p className="score-para">Total : {}</p>
            <p className="score-para">Heads : {}</p>
            <p className="score-para">Tails : {}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
