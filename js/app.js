import { Sudoku } from "./classes/Sudoku.js";
import { UI } from "./classes/UI.js";

document.addEventListener('DOMContentLoaded', () => {

    const sudoku = new Sudoku();
    const ui = new UI();

    // ui.generateGrid();
    // sudoku.randomizeGrid();
    console.log(sudoku.isValidSudoku());
});