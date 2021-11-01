const maxProfit = prices => {
  let profit = 0;
  let buy = prices[0];

  for (const price of prices) {
    profit = Math.max(profit, price - buy);
    buy = Math.min(buy, price);
  }

  return profit;
}
