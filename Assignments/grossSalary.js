
let BS = 45000
let DA = (BS * 30)/100
let HRA = (BS * 10)/100
let tax = (BS * 5)/100

grossSalary = BS + DA + HRA
netSalary = grossSalary - tax 

console.log('The Gross Salary is: '+ grossSalary)
console.log('The Net Salary is: '+ netSalary)