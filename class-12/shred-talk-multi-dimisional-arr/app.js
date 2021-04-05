'use strict';
const arrExample = [
    [],
    [],
    []
]

const drawTable = () => {
    const rows = 2;
    const columns = 2;
    let grid = '';
    for (let i = 0; i <= rows; i++) {
        grid += '|';
        for (let j = 0; j <= columns; j++) {
            grid += "_|";
        }
        grid += '\n'; // indicates a new line

    }
    console.log(grid);
}

// drawTable();


const arr = [
    [2, 3, 4, 5],
    [6, 7, 8, 9],
    [10, 11, 12, 13]
]

// to print out each element on a row

for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
    for (let j = 0; j < arr[index].length; j++) {
        console.log(arr[index][j]);
    }
}