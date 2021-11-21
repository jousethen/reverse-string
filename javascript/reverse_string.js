function reverseString(str) {
  let newString = [];
  for (let i = 0; i < str.length; i++) {
    newString.unshift(str[i])
  }
  return newString.join('');
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
