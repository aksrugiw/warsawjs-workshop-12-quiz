/* eslint quotes: ["error", "double", { "avoidEscape": true }] */

export const quiz = [
  {
    title: "Z jakich 3 warstw składa się JavaScript?",
    answers: [
      "Core, BOM, DOM",
      "Webkit, DevTools, HTML",
      "Core, DOM, HTML",
      "HTML, CSS, obrazki"
    ],
    correctAnswerIndex: 0
  },
  {
    title: "Różnica między `==` & `===`?",
    answers: [
      "żadna",
      "jest, ale nie pamiętam",
      "`==` spr. typ, a potem wartość, `===` spr. od razu wartość, nie spr. typu",
      "`===` spr. typ, a potem wartość, `==` spr. od razu wartość, nie spr. typu"
    ],
    correctAnswerIndex: 3
  },
  {
    title: "Różnica między `null` a `undefined`?",
    answers: [
      "żadna",
      "jest, ale nie pamiętam",
      "`null` jest nieokreślonym obiektem, `undefined` jest wartością nieokreśloną",
      "`null` jest pustą wartością, `undefined` jest tym samym"
    ],
    correctAnswerIndex: 2
  },
  {
    title: "W jaki sposób można odwrócić ciąg znaków? Z **pies** otrzymać **seip**.",
    answers: [
      "`'pies'.reverse()`",
      "`'pies'.split('').reverse().join('')`",
      "`'pies'.invert()`",
      "`'pies'.join('').reverse().split('')`",
      "`'pies'.flip()`"
    ],
    correctAnswerIndex: 1
  },
  {
    title: "Co zwróci operator `typeof` wykonany przez takimi wartościami: `[]`, `{}`, `1`, `NaN`, `null`, `pies`, `Function`",
    answers: [
      "array, object, number, number, null, string, function",
      "array, object, number, number, object, string, function",
      "object, object, number, number, null, string, function",
      "object, object, number, number, object, string, function",
      "object, object, number, undefined, null, string, function"
    ],
    correctAnswerIndex: 3
  },
  {
    title: "Jak usunąć element (znacznik) z DOM (Document Object Model)?",
    answers: [
      "`element.removeNode()`",
      "`element.removeElement()`",
      "`element.parentNode.removeChild(element)`",
      "`element.remove()`"
    ],
    correctAnswerIndex: 2
  },
  {
    title: "Jak skopiować tablicę?",
    answers: [
      "`[1, 2].copy(true)`;",
      "`[1, 2].copy()`;",
      "`[1, 2].clone()`;",
      "`[1, 2].slice(0)`;"
    ],
    correctAnswerIndex: 3
  }
]
