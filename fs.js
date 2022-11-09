const fs = require("fs");
/*
const first = fs.readFileSync('./data/first.txt', 'utf-8')
const second = fs.readFileSync('./data/second.txt')

console.log(first)
console.log(second.toString)


fs.writeFileSync('./data/third.txt',' Este es un tercer archivo creado desde fs.js',{
    flag: 'a'
})
*/

fs.readFile("./data/first.txt", (error, data) => {
  if (error) {
    console.log(error);
  }
  console.log(data.toString());

  fs.readFile("./data/second.txt", (error, data) => {
    if (error) {
      console.log(error);
    }
    console.log(data.toString());
    fs.writeFile(
      "./data/newFile.txt",
      "archivo creado desde fs",
      (err, data) => {
        console.log(err);
        console.log(data);

        fs.writeFile(
          "./data/newFile2.txt",
          "archivo creado desde fs",
          (err, data) => {
            console.log(err);
            console.log(data);

            fs.writeFile(
              "./data/newFile3.txt",
              "archivo creado desde fs",
              (err, data) => {
                console.log(err);
                console.log(data);
              }
            );
          }
        );
      }
    );
  });
});
