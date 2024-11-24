const getUsersWithFriend = (users, friendName) => 
    users.filter(user => user.friends.includes(friendName));
  
  // Test data
  const allUsers = [
    {
      name: "Moore Hensley",
      friends: ["Sharron Pace"]
    },
    {
      name: "Sharlene Bush",
      friends: ["Briana Decker", "Sharron Pace"]
    },
    {
      name: "Ross Vazquez",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"]
    },
    {
      name: "Elma Head",
      friends: ["Goldie Gentry", "Aisha Tran"]
    },
    {
      name: "Carey Barr",
      friends: ["Jordan Sampson", "Eddie Strong"]
    },
    {
      name: "Blackburn Dotson",
      friends: ["Jacklyn Lucas", "Linda Chapman"]
    },
    {
      name: "Sheree Anthony",
      friends: ["Goldie Gentry", "Briana Decker"]
    }
  ];
  
  // Testing the function
  console.log(getUsersWithFriend(allUsers, "Briana Decker")); 
  // Expected output: [{ name: "Sharlene Bush", friends: ["Briana Decker", "Sharron Pace"] }, { name: "Sheree Anthony", friends: ["Goldie Gentry", "Briana Decker"] }]
  
  console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
  // Expected output: [{ name: "Elma Head", friends: ["Goldie Gentry", "Aisha Tran"] }, { name: "Sheree Anthony", friends: ["Goldie Gentry", "Briana Decker"] }]
  
  console.log(getUsersWithFriend(allUsers, "Adrian Cross" )); 
  // Expected output: []
  
  
  // task-2-results in HTML
  document.getElementById("task-2-results").innerHTML = `
    <p>Users with friend "Briana Decker": ${JSON.stringify(getUsersWithFriend(allUsers, "Briana Decker"))}</p>
    <p>Users with friend "Goldie Gentry": ${JSON.stringify(getUsersWithFriend(allUsers, "Goldie Gentry"))}</p>
    <p>Users with friend "Adrian Cross": ${JSON.stringify(getUsersWithFriend(allUsers, "Adrian Cross"))}</p>
  `;
  