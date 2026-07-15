export const RATE_PER_UNIT = 250 // ₦ per kWh

export function calculateBills(businesses, previous, current) {
  let totalUnits = 0
  let totalAmount = 0

  const rows = businesses.map(biz => {
    const prev = previous[biz.id] ?? 0
    const curr = parseFloat(current[biz.id]) || 0
    const units = Math.max(0, curr - prev)
    const amount = units * RATE_PER_UNIT

    totalUnits += units
    totalAmount += amount

    return {
      ...biz,
      prev,
      curr,
      units: +units.toFixed(2),
      amount: +amount.toFixed(2),
    }
  })

  return {
    rows,
    totalUnits: +totalUnits.toFixed(2),
    totalAmount: +totalAmount.toFixed(2),
  }
}

export function formatNaira(n) {
  return '₦' + n.toLocaleString('en-NG', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

export function isReadingValid(current, previous) {
  if (current === '' || current === undefined) return true
  return parseFloat(current) >= previous
}
