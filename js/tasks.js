// Task №1
var numbers = [1, 3, 0, 5, 0, 7, 0];

function zeroEnd(arr) {
  var result = [];
  for (var i of arr) {
    if (i == 0) {
      continue;
    } else {
      result.push(i);
    }
  }
  //   console.log(result);
  for (var i of arr) {
    if (i != 0) {
      continue;
    } else {
      result.push(i);
    }
  }
  // console.log(result);
  return result.join("");
}

// Task №2

var booleanValues = [true, false, false, true, true];

function countTrue(arr) {
  var iterator = 0;
  for (var i of arr) {
    if (i == true) {
      iterator++;
    } else {
      continue;
    }
  }
  return iterator;
}

// Task №3

var numbers2 = [1, -2, 0, 2, 3, -8, 0, 4];
function numberSumm(arr) {
  var summ = 0;
  for (var i of arr) {
    if (i > 0) {
      summ += i;
    } else {
      continue;
    }
  }
  return summ;
}

// Task №4

var personPrice = [
  {
    name: "Ali",
    price: 200,
  },
  {
    name: "Umid",
    price: 800,
  },
  {
    name: "Vali",
    price: 400,
  },
  {
    name: "Sardor",
    price: 1000,
  },
];
function maxPrice(arr) {
  var num = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].price > arr[num].price) {
      num = i;
    } else {
      continue;
    }
  }
  return arr[num].name;
}
