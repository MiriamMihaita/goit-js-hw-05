// task-4.js

const getTotalBalanceByGender = (users, gender) =>
    users
      .filter(user => user.gender === gender)  // Filter users by gender
      .map(user => user.balance)               // Map to balances only
      .reduce((total, balance) => total + balance, 0); // Sum all balances
  
  // Test data
  const clients = [
    { name: "Moore Hensley", gender: "male", balance: 2811 },
    { name: "Sharlene Bush", gender: "female", balance: 3821 },
    { name: "Ross Vazquez", gender: "male", balance: 3793 },
    { name: "Elma Head", gender: "female", balance: 2278 },
    { name: "Carey Barr", gender: "male", balance: 3951 },
    { name: "Blackburn Dotson", gender: "male", balance: 1498 },
    { name: "Sheree Anthony", gender: "female", balance: 2764 }
  ];
  
  // Calculate balances by gender
  const totalMaleBalance = getTotalBalanceByGender(clients, "male");
  const totalFemaleBalance = getTotalBalanceByGender(clients, "female");
  
  // Insert the result into HTML
  document.getElementById("task-4-results").innerHTML = `
    <p>Total balance for males: ${totalMaleBalance}</p>
    <p>Total balance for females: ${totalFemaleBalance}</p>
  `;
  
  // Console log for additional verification
  console.log("Total balance for males:", totalMaleBalance); // Should be 12053
  console.log("Total balance for females:", totalFemaleBalance); // Should be 8863
  