"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.ts
var utility_lib_exports = {};
__export(utility_lib_exports, {
  MaxNumber: () => MaxNumber,
  SumOfNumber: () => SumOfNumber,
  factorial: () => factorial,
  getEvenNumbers: () => getEvenNumbers,
  isEvenNumber: () => isEvenNumber,
  isPolindrome: () => isPolindrome,
  isPrimaryNumber: () => isPrimaryNumber,
  reverseString: () => reverseString
});
module.exports = __toCommonJS(utility_lib_exports);

// src/arrayManipulations.ts
function SumOfNumber(num1, num2) {
  return num1 + num2;
}
function isEvenNumber(num) {
  return num % 2 === 0;
}
function getEvenNumbers(NumList) {
  return NumList.filter((num) => num % 2 === 0);
}
function reverseString(str) {
  return str.split("").reverse().join("");
}
function isPolindrome(str) {
  const regEx = /[A-Za-z0-9]/g;
  const lowerCaseConversion = str.toLowerCase().replace(regEx, "");
  const reverseString2 = str.split("").reverse().join("");
  return lowerCaseConversion === reverseString2;
}
function MaxNumber(numList) {
  return Math.max(...numList);
}
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}
function isPrimaryNumber(num) {
  if (num <= 1)
    return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0)
      return false;
  }
  return true;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MaxNumber,
  SumOfNumber,
  factorial,
  getEvenNumbers,
  isEvenNumber,
  isPolindrome,
  isPrimaryNumber,
  reverseString
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vaW5kZXgudHMiLCAiLi4vc3JjL2FycmF5TWFuaXB1bGF0aW9ucy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiZXhwb3J0ICogZnJvbSBcIi4vc3JjXCI7IiwgIi8vIFRvIGFkZCB0d28gbnVtYmVyc1xuZnVuY3Rpb24gU3VtT2ZOdW1iZXIobnVtMTogbnVtYmVyLCBudW0yOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBudW0xICsgbnVtMjtcbn07XG5cbi8vIFRvIGZpbmQgZXZlbiBudW1iZXJcbmZ1bmN0aW9uIGlzRXZlbk51bWJlcihudW06IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBudW0gJSAyID09PSAwOyAgIFxufTtcblxuLy8gVG8gZmluZCBldmVuIG51bWJlcnMgZnJvbSBhbiBhcnJheVxuZnVuY3Rpb24gZ2V0RXZlbk51bWJlcnMoTnVtTGlzdDogQXJyYXk8bnVtYmVyPik6IEFycmF5PG51bWJlcj4ge1xuICAgIHJldHVybiBOdW1MaXN0LmZpbHRlcigobnVtOiBudW1iZXIpID0+IG51bSAlIDIgPT09IDApIFxufTtcblxuLy8gVG8gcmV2ZXJzZSBhIHN0cmluZ1xuZnVuY3Rpb24gcmV2ZXJzZVN0cmluZyhzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHN0ci5zcGxpdChcIlwiKS5yZXZlcnNlKCkuam9pbihcIlwiKTtcblxufTtcblxuLy8gVG8gZmluZCBpZiBhIHN0cmluZyBpcyBwYWxpbmRyb21lXG5mdW5jdGlvbiBpc1BvbGluZHJvbWUgKHN0cjogc3RyaW5nKSB7XG4gICAgY29uc3QgcmVnRXggPSAvW0EtWmEtejAtOV0vZztcbiAgICBjb25zdCBsb3dlckNhc2VDb252ZXJzaW9uID0gc3RyLnRvTG93ZXJDYXNlKCkucmVwbGFjZShyZWdFeCwgXCJcIik7XG4gICAgY29uc3QgcmV2ZXJzZVN0cmluZyA9IHN0ci5zcGxpdChcIlwiKS5yZXZlcnNlKCkuam9pbihcIlwiKTtcbiAgXG4gICAgcmV0dXJuIGxvd2VyQ2FzZUNvbnZlcnNpb24gPT09IHJldmVyc2VTdHJpbmc7XG59O1xuXG4vLyBmaW5kIG1heCBudW1iZXJcbmZ1bmN0aW9uIE1heE51bWJlciAobnVtTGlzdDogQXJyYXk8bnVtYmVyPikge1xuICAgIHJldHVybiBNYXRoLm1heCguLi5udW1MaXN0KTtcbn07XG5cbi8vIEZhY3RvcmlhbCBvZiBhIGdpdmVuIG51bWJlclxuZnVuY3Rpb24gZmFjdG9yaWFsIChudW06IG51bWJlcik6IG51bWJlciB7XG4gICAgaWYgKG51bSA9PT0gMCB8fCBudW0gPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bSAqIGZhY3RvcmlhbChudW0gLSAxKTtcbiAgICB9XG59O1xuLy8gQ2hlY2sgaWYgYSBnaXZlbiBudW1iZXIgaXMgYSBwcmltZSBudW1iZXJcbmZ1bmN0aW9uIGlzUHJpbWFyeU51bWJlciAobnVtOiBudW1iZXIpIHtcbiAgaWYgKG51bSA8PSAxKSByZXR1cm4gZmFsc2U7XG4gIGZvciAobGV0IGkgPSAyOyBpIDw9IE1hdGguc3FydChudW0pOyBpKyspIHtcbiAgICAgIGlmIChudW0gJSBpID09PSAwKSByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG4vLyByZXR1cm4gRmlib25hY2NpIHNlcXVlbmNlIHVwIHRvIGEgZ2l2ZW4gbnVtYmVyIG9mIHRlcm1cbi8vIGZ1bmN0aW9uIGZpYm9uYWNjaVNlcXVlbmNlKG51bVRlcm06IG51bWJlcikge1xuLy8gICAgIGlmIChudW1UZXJtIDw9IDApIHJldHVybiBbXTtcbi8vICAgICBpZiAobnVtVGVybSA9PT0gMSkgcmV0dXJuIFswXTtcbi8vICAgICBsZXQgc2VxdWVuY2UgPSBbMCwxXTtcbi8vICAgICB3aGlsZShzZXF1ZW5jZS5sZW5ndGggPCBudW1UZXJtKSB7XG4vLyAgICAgICBsZXQgbmV4dE51bWJlciA9IHNlcXVlbmNlW3NlcXVlbmNlLmxlbmd0aCAtIDFdICsgc2VxdWVuY2Vbc2VxdWVuY2UubGVuZ3RoIC0gMl07XG4vLyAgICAgICBzZXF1ZW5jZS5wdXNoKG5leHROdW1iZXIpO1xuLy8gICAgIH1cbi8vICAgICByZXR1cm4gc2VxdWVuY2U7XG4vLyB9O1xuXG5cblxuZXhwb3J0IHtcbiAgICBTdW1PZk51bWJlcixcbiAgICBpc0V2ZW5OdW1iZXIsXG4gICAgZ2V0RXZlbk51bWJlcnMsXG4gICAgcmV2ZXJzZVN0cmluZyxcbiAgICBpc1BvbGluZHJvbWUsXG4gICAgZmFjdG9yaWFsLFxuICAgIE1heE51bWJlcixcbiAgICBpc1ByaW1hcnlOdW1iZXIsXG59OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNDQSxTQUFTLFlBQVksTUFBYyxNQUFzQjtBQUNyRCxTQUFPLE9BQU87QUFDbEI7QUFHQSxTQUFTLGFBQWEsS0FBc0I7QUFDeEMsU0FBTyxNQUFNLE1BQU07QUFDdkI7QUFHQSxTQUFTLGVBQWUsU0FBdUM7QUFDM0QsU0FBTyxRQUFRLE9BQU8sQ0FBQyxRQUFnQixNQUFNLE1BQU0sQ0FBQztBQUN4RDtBQUdBLFNBQVMsY0FBYyxLQUFxQjtBQUN4QyxTQUFPLElBQUksTUFBTSxFQUFFLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtBQUUxQztBQUdBLFNBQVMsYUFBYyxLQUFhO0FBQ2hDLFFBQU0sUUFBUTtBQUNkLFFBQU0sc0JBQXNCLElBQUksWUFBWSxFQUFFLFFBQVEsT0FBTyxFQUFFO0FBQy9ELFFBQU1BLGlCQUFnQixJQUFJLE1BQU0sRUFBRSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7QUFFckQsU0FBTyx3QkFBd0JBO0FBQ25DO0FBR0EsU0FBUyxVQUFXLFNBQXdCO0FBQ3hDLFNBQU8sS0FBSyxJQUFJLEdBQUcsT0FBTztBQUM5QjtBQUdBLFNBQVMsVUFBVyxLQUFxQjtBQUNyQyxNQUFJLFFBQVEsS0FBSyxRQUFRLEdBQUc7QUFDeEIsV0FBTztBQUFBLEVBQ1gsT0FBTztBQUNILFdBQU8sTUFBTSxVQUFVLE1BQU0sQ0FBQztBQUFBLEVBQ2xDO0FBQ0o7QUFFQSxTQUFTLGdCQUFpQixLQUFhO0FBQ3JDLE1BQUksT0FBTztBQUFHLFdBQU87QUFDckIsV0FBUyxJQUFJLEdBQUcsS0FBSyxLQUFLLEtBQUssR0FBRyxHQUFHLEtBQUs7QUFDdEMsUUFBSSxNQUFNLE1BQU07QUFBRyxhQUFPO0FBQUEsRUFDOUI7QUFDQSxTQUFPO0FBQ1Q7IiwKICAibmFtZXMiOiBbInJldmVyc2VTdHJpbmciXQp9Cg==