const transactions = [
  { id: 1, note: "Salary", category: "Income", type: "income", amountCents: 30000 },
  { id: 2, note: "Lunch", category: "Food", type: "expense", amountCents: 450 },
  { id: 3, note: "Bus", category: "Transport", type: "expense", amountCents: 150 },
  { id: 4, note: "Notebook", category: "Study", type: "expense", amountCents: 300 },
];

function formatMoney(cents) {
  const sign = cents < 0 ? "-" : "";
  return sign + "$" + (Math.abs(cents) / 100).toFixed(2);
}

console.log(formatMoney(transactions[1].amountCents));