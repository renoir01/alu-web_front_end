const readline = require("readline");

// Define the stock object
let stock = {
  macbook: 2,
  iphone: 4,
};

// Implement processPayment function
function processPayment(itemName) {
  stock[itemName.toLowerCase()]--;
  console.log(`Payment is being processed for item ${itemName}`);
}

// Implement processError function
function processError(itemName) {
  console.log(`No more ${itemName} in stock`);
  console.log("Payment is not being processed");
}

// Implement processOrder function
function processOrder(itemName, callbackPayment, callbackError) {
  console.log(`Verifying the stock of ${itemName}`);

  let lowerCaseItemName = itemName.toLowerCase();
  if (stock[lowerCaseItemName] > 0) {
    callbackPayment(itemName);
  } else {
    callbackError(itemName);
  }
}

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Prompt user input and process the order
rl.question(
  "Please enter the item you would like to purchase (Macbook, iPhone): ",
  function (answer) {
    if (answer) {
      let userInput = answer.trim().toLowerCase();
      if (userInput === "macbook" || userInput === "iphone") {
        processOrder(userInput, processPayment, processError);
      } else {
        console.log(`Sorry, we do not offer ${userInput}`);
      }
    } else {
      console.log("Invalid input");
    }

    rl.close();
  }
);
