import { Sudoku } from "./classes/Sudoku.js";
import { UI } from "./classes/UI.js";
import { randomButtonSelector, startButtonSelector } from "./selectors/selectors.js";

document.addEventListener('DOMContentLoaded', () => {

    const sudoku = new Sudoku();
    const ui = new UI();
    
    ui.generateGrid();

    randomButtonSelector.addEventListener('click', () => {
        sudoku.randomizeGrid();
        sudoku.removeDigits(35);
        
        const board = sudoku.getSudokuBoard();
        ui.fillGridWithValues(board);
    });

    startButtonSelector.addEventListener('click', () => {
        console.log("Start");
    });
});