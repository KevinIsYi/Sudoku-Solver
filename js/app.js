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

    startButtonSelector.addEventListener('click', async () => {
        const { grid, error } = ui.validateGrid();

        if (!error) {
            sudoku.setSudokuBoard(grid);
            if (!sudoku.isValidSudoku()) {
                ui.fireAlert("This board is not valid");
            }
            else {
                startButtonSelector.disabled = true;
                randomButtonSelector.disabled = true;
                sudoku.solveSudoku();
                ui.changeInputsStatus(true);
                const steps = sudoku.getSteps();
                await ui.showSudokuSolvingAnimation(steps);

                startButtonSelector.disabled = false;
                randomButtonSelector.disabled = false;
            }
        }
    });
});