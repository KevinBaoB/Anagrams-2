exports.anagramsFor = function (word, listOfWords) {
  let checker = word.split("").sort().join("");
  let res = [];
  for (let word of listOfWords) {
    if (word.split("").sort().join("") === checker) {
      res.push(word);
    }
  }
  return res;
};

// console.log(
//   anagramsFor("saltier", ["cognac", "saltier", "realist", "retails"])
// );
