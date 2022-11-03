console.log(module)

const myWebAddress = "faztweb.com";
const myNumber = 30;
const myArray = [10, 20, 30];
const user = {
  username: "Julio",
  Lastname: "lazareno",
};

const group = {
  myWebAddress: myWebAddress,
  myNumber: myNumber,
  myArray: myArray,
  user: user.username,
  Lastname: user.Lastname,
};

module.exports = group;

console.log(module)