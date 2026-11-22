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


function totalCents(list) {
  return list.reduce((sum, tx) => sum + tx.amountCents, 0);
}

function filterByCategory(list, category) {
  return list.filter((tx) => tx.category === category);
}

function filterByType(list, type) {
  return list.filter((tx) => tx.type === type);
}

function summarize(list) {
  const incomeCents = totalCents(filterByType(list, "income"));
  const expensesCents = totalCents(filterByType(list, "expense"));
  return {
    incomeCents: incomeCents,
    expensesCents: expensesCents,
    balanceCents: incomeCents - expensesCents,
  };
}

function addTransaction(list, tx) {
  return [...list, tx];
}

const notes = transactions.map((tx) => tx.note);

function check(name,actual, expected){
  const ok = actual === expected;
  console.log(ok? "✓" : "✗", name, ok ? " " : `(expected ${expected} ,got ${actual})`)
}

check("Format 450", formatMoney(450), "$4.50")
check("Total of all", totalCents(transactions),30900)
check("Food count",filterByCategory(transactions,"Food").length, 1)
check("Expense count",filterByType(transactions,'expense').length,3)
check("Balance",summarize(transactions).balanceCents,29100)
check("new length",addTransaction(transactions,{id:5,note:"Coffee",category:"Food",type:"expense",amountCents:250}).length,5)
check("notes",notes.join(","),"Salary,Lunch,Bus,Notebook")


// Also add these two edge-case checks. Good tests try the boring and the strange cases:
check("total of empty list", totalCents([]), 0);
check("original list not changed", transactions.length, 4);   // after addTransaction