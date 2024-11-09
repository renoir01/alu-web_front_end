function welcome(firstName, lastName) {
    let fullName = `${firstName} ${lastName}`;
  
    function displayFullName() {
      console.log(`Welcome ${fullName}!`);
    }
  
    displayFullName();
  }
  
  // Testing the function
  welcome('Holberton', 'School');