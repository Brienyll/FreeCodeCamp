let myNestedArray = [ // top, or first level - the outer most array
  ['deepr'], // an array within an array, 2 levels of depth
  [ 
    ["deep"], // 2 arrays nested 3 levels deep
  ],
  [
    [
      ['deeep'], ['deeper'] // 2 arrays nested 4 levels deep
    ],
    [
      [
        ["deepest"] // an array nested 5 levels deep
      ]
    ]
  ]
];
console.log(myNestedArray[0][0][0][0][0]);
