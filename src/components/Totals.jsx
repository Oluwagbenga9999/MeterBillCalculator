import { formatNaira } from '../utils/billing'

export default function Totals({ totalUnits, totalAmount }) {
  return (
    <div className="totals-row">
      <span className="totals-label">Total</span>
      <span className="mono totals-units">{totalUnits.toFixed(2)} kWh</span>
      <span className="mono totals-amount">{formatNaira(totalAmount)}</span>
    </div>
  )
}
