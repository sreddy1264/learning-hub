// Group items on the basis of age of given array of object
// const people = [
//   {name: 'Alice', age: 21},
//   {name: 'Max', age: 20},
//   {name: 'Jane', age: 20},
// ];

// output: [20: [{
//   name: 'Max', age: 20
// }, { name: 'Jane', age: 20}], 21: { name: 'Alice', age: 21}];

// interface People {
//      name: string,
//      age: number,
// }

// interface GroupItemsByAge {
//    number  : People[]
// }

const getGroupItemsByValue = (people) => {
  let groupItemsByAge = {};
  people.forEach((item) => {
    if (!groupItemsByAge[item.age]) {
      groupItemsByAge[item.age] = [item];
    } else {
      groupItemsByAge[item.age].push(item);
    }
  });
  return groupItemsByAge;
};
console.log(
  "getGroupItemsByValue",
  getGroupItemsByValue([
    { name: "Alice", age: 21 },
    { name: "Max", age: 20 },
    { name: "Jane", age: 20 },
  ])
);

 // Find the pairs of array element for which sum is equal to given target value (Two Sum Problem)
  // input: ([1,2,3,4,6,7,8,9], 9)
  // output: [[6,3],[7,2],[8,1]]

  function getPairOfElementsEqualtoGivenNumber(arr, total) {
    let sum = [];
    let obj = {};
    arr.forEach(item => {
      let diff = total - item;
      if (obj[diff.toString()] !== undefined) {
        sum.push([diff, item])
      }
      obj[item.toString()] = item;
     })
    return sum;
  }

  console.log(
    "getPairOfElementsEqualtoGivenNumber",
    getPairOfElementsEqualtoGivenNumber([1, 2, 3, 4, 6, 7, 8, 9], 9)
  );

export { getGroupItemsByValue, getPairOfElementsEqualtoGivenNumber };
