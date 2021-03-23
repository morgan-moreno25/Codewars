const assert = require("chai").assert;

/**
 * @description Simple Pig Latin: Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched
 * @param {String} str
 * @returns {String} Returns the passed in string with each word following the Pig Latin structure
 */
function pig_latin(str) {
  const words = str.split(" ");
  const punctuation = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "?",
    ".",
    ",",
  ];

  for (let i = 0; i < words.length; i++) {
    let isPunc = false;

    for (let x = 0; x < punctuation.length; x++) {
      if (words[i].includes(punctuation[x])) {
        isPunc = true;
        break;
      }
    }

    if (isPunc) {
      continue;
    }

    words[i] = `${words[i].slice(1, words[i].length)}${words[i][0]}ay`;
  }

  return words.join(" ");
}

describe("Simple Pig Latin", () => {
  it("Returns the passed in string with each word represented with pig latin structuring", () => {
    const test1 = pig_latin("Pig latin is cool");
    assert.equal(test1, "igPay atinlay siay oolcay");

    const test2 = pig_latin("This is my string");
    assert.equal(test2, "hisTay siay ymay tringsay");
  });
  it("Leaves punctuation untouched", () => {
    const test1 = pig_latin("Hello world !");
    assert.equal(test1, "elloHay orldway !");
  });
});

/**
 * @description: 5kyu - Pete, the baker: Write a function `cakes()`, which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.
 * @param {Object} recipe
 * @param {Object} available
 *  @returns {Number} The maximum number of cakes Pete can bake with the passed in recipe and available ingredients.
 */
function cakes(recipe, available) {
  var max_cakes = 0;
  let ingredients_check = new Object();

  for (const ingredient in recipe) {
    if (!available[ingredient]) {
      return 0;
    }

    ingredients_check[ingredient] = Math.floor(
      Math.round(available[ingredient] / recipe[ingredient])
    );
  }

  for (const count in ingredients_check) {
    if (max_cakes === 0) {
      max_cakes = ingredients_check[count];
    }

    if (ingredients_check[count] < max_cakes) {
      max_cakes = ingredients_check[count];
    }
  }

  return max_cakes;
}

describe("Pete, the Baker", () => {
  var recipe, available;

  it("Passes example test 1", () => {
    recipe = {
      flour: 500,
      sugar: 200,
      eggs: 1,
    };
    available = {
      flour: 1200,
      sugar: 1200,
      eggs: 5,
      milk: 200,
    };

    assert.equal(cakes(recipe, available), 2, "Wrong result for example #1");
  });
  it("Passes example test 2", () => {
    recipe = {
      apples: 3,
      flour: 300,
      sugar: 150,
      milk: 100,
      oil: 100,
    };
    available = {
      sugar: 500,
      flour: 2000,
      milk: 2000,
    };

    assert.equal(cakes(recipe, available), 0, "Wrong result for example #2");
  });
});

/**
 * @description 6kyu - Bouncing Balls: A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.\n\nHe drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of .66).\n\nHis mother looks out of a window 1.5 meters from the ground.\n\nHow many times will the mother see the ball pass in front of her window (including when it's falling and bouncing)?\n\nThree conditions must be met for a valid expirement:\n- Float parameter "h" in meters must be greater than 0\n- Float parameter "bounce" must be greater than 0 and less than 1\n- Float parameter "window" must be less than h\n\nIf all three conditions are fulfilled, return a positive integer, otherwise return -1.\n\nNOTE:\nThe ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.
 * @param {Number} h Height of the nth floor (Must be greater than 0)
 * @param {Number} bounce The bounce of the ball (Must be greater than 0 but less than 1)
 * @param {Number} window Height of the window the mother is looking out (Must be less than h)
 * @returns {Number} Positive integer if all conditions are met and negative 1 if not.
 */
function bouncingBall(h, bounce, window) {
  // Make sure the parameters pass the conditions for a valid expirement

  if (h <= 0) return -1;
  if (bounce >= 1 || bounce <= 0) return -1;
  if (window >= h) return -1;

  let bounce_count = 0;

  while (h > window) {
    bounce_count++;

    h = h * bounce;

    if (h > window) {
      bounce_count++;
    }
  }

  return bounce_count;
}

describe("Bouncing Ball", () => {
  var h, bounce, window;

  beforeEach(() => {
    h = 3.0;
    bounce = 0.66;
    window = 1.5;
  });

  describe("Valid expirement conditions are met", () => {
    it("Should return -1 if parameter h is 0 or less", () => {
      h = 0;
      assert.equal(bouncingBall(h, bounce, window), -1);
    });
    it("Should return -1 if parameter bounce is not greater than 0 and less than 1", () => {
      bounce = -2.3;
      assert.equal(bouncingBall(h, bounce, window), -1);
      bounce = 2.3;
      assert.equal(bouncingBall(h, bounce, window), -1);
    });
    it("Should return -1 if parameter window is greater than parameter h", () => {
      window = 50.0;
      assert.equal(bouncingBall(h, bounce, window), -1);
    });
  });
  describe("Returns the correct amount of times the ball is seen from the window", () => {
    it("Should pass example test #1", () => {
      assert.equal(bouncingBall(h, bounce, window), 3);
    });
    it("Should pass example test #2", () => {
      h = 30.0;
      assert.equal(bouncingBall(h, bounce, window), 15);
    });
  });
});

/**
 * @description 6kyu - Take a Number and Sum Its Digits Raised to the Consecutive Powers: The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Becuase this sum gives the same number.\n\nIn effect: 89 = 8^1 + 9^2\n\nThe next number in having this property is 135.\n\nSee this property again: 135 = 1^1 + 3^2 + 5^3\n\nWe need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.
 * @param {Number} a the lower limit of the search range (inclusive)
 * @param {Number} b the upper limit of the search range (inclusive)
 * @return {Array<Number>} A list of all numbers in the given range the fulfill the "Eureka" property
 */
function sumDigPow(a, b) {
  let valid_numbers = [];

  for (let x = a; x <= b; x++) {
    let strNumber = String(x);
    let strArray = strNumber.split("");
    let numberArray = strArray.map((s) => Number(s));

    let sum;
    for (let i = 0; i < numberArray.length; i++) {
      sum += Math.pow(numberArray[i], i + 1);
      console.log(sum);
    }

    if (sum === x) {
      valid_numbers.push(x);
    }
  }
  return valid_numbers;
}

describe.only("Take a Number and Sum Its Digits Raised to the Consecutive Powers", () => {
  var a, b;

  it("Should pass the example tests", () => {
    (a = 1), (b = 10);
    assert.equal(sumDigPow(a, b), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    (a = 1), (b = 100);
    assert.equal(sumDigPow(a, b), [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]);
    (a = 10), (b = 100);
    assert.equal(sumDigPow(10, 100), [89]);
    (a = 90), (b = 100);
    assert.equal(sumDigPow(a, b), []);
    (a = 90), (b = 150);
    assert.equal(sumDigPow(a, b), [135]);
    (a = 50), (b = 150);
    assert.equal(sumDigPow(a, b), [89, 135]);
    (a = 10), (b = 150);
    assert.equal(sumDigPow(a, b), [89, 135]);
  });
});
