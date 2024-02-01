import { values as Extractvalues } from "./utils.js";
import { asLines } from "./utils.js";

export function partOne(filePath) {
  const valuesArr = Extractvalues(filePath).map((value) => {
    let first = value
      .split("")
      .find((element) => !Number.isNaN(Number(element)));
    let last = value
      .split("")
      .findLast((element) => !Number.isNaN(Number(element)));
    return Number(first + last);
  });

  return valuesArr.reduce((s, v) => s + v);
}

//------------------------------------------------------------------------------------------------

//const lineToCalibrationValueB = (line) => {
//  return parseInt(findDigits(line).join(''));
//}
//

//const number = (str) => {
//  if (str.charAt(0) > "0" && str.charAt(0) <= "9") {
//    return parseInt(str.charAt(0));
//  }
//  const i = numbers.findIndex((n) => str.startsWith(n));
//  return i < 0 ? null : i + 1;
//};
//
//const findDigits = (line) => {
//  let first, last;
//  for (let i = 0; i < line.length; i++) {
//    const n = number(line.substring(i));
//    if (n) {
//      first = first || n;
//      last = n;
//    }
//  }
//  return [first, last];
//};
//
//export function day1bFunc(filePath) {
//  const day1b = asLines(filePath)
//    .map(lineToCalibrationValueB)
//    .reduce((a, b) => a + b, 0);
//
//  return day1b
//}

const numbers = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

function number(str) {
  if (str.charAt(0) > "0" && str.charAt(0) <= "9") {
    return parseInt(str.charAt(0));
  }

  const i = numbers.findIndex((n) => str.startsWith(n));
  return i < 0 ? null : i + 1;
}

export function part2(filePath) {
  const lines = asLines(filePath);
  const values = lines.map((line) => {
    let first, last;
    for (let i = 0; i < line.length; ++i) {
      const n = number(line.substring(i));
      if (n) {
        first = first || n;
        last = n;
      }
    }
    return parseInt([first, last].join(""));
  });

  const sum = values.reduce((a, b) => a + b, 0);
  return sum;
}
