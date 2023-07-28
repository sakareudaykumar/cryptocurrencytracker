// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {details} = props

  const {currencyName, usdValue, euroValue, currencyLogo, id} = details
  console.log(id)

  return (
    <li className="containerI">
      <div className="currencyType">
        <img className="logoImage " src={currencyLogo} alt={currencyName} />
        <p className="currencyName">{currencyName}</p>
      </div>
      <div className="rupeeI">
        <p className="usdValue">{usdValue}</p>
        <p className="euroValue">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
