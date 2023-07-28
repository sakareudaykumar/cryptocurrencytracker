// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {data: [], isLodaing: true}

  componentDidMount() {
    this.getCurrency()
  }

  getCurrency = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updateData = data.map(each => ({
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      id: each.id,
      currencyLogo: each.currency_logo,
    }))

    this.setState({data: updateData, isLodaing: false})
  }

  render() {
    const {data, isLodaing} = this.state

    return isLodaing ? (
      <div data-testid="loader" className="loader">
        <Loader type="Rings" color="#ffffff" height={80} width={80} />
      </div>
    ) : (
      <div className="container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <div>
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
            alt="cryptoCurrency"
          />
        </div>
        <div className="currency">
          <div className="names">
            <div className="coin">
              <p>Coin Type</p>
            </div>
            <div className="rupee">
              <p className="usd">USD</p>
              <p className="euro">EURO</p>
            </div>
          </div>
          <ul>
            {data.map(item => (
              <CryptocurrencyItem key={item.id} details={item} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CryptocurrenciesList
