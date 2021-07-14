export class Sudoku {
    constructor() {
        this.grid = [
            [3, 2, 9, 6, 5, 7, 8, 4, 1],
            [7, 4, 5, 8, 3, 1, 2, 9, 6],
            [6, 1, 8, 2, 4, 9, 3, 7, 5],
            [1, 9, 3, 4, 6, 8, 5, 2, 7],
            [2, 7, 6, 1, 9, 5, 4, 8, 3],
            [8, 5, 4, 3, 7, 2, 6, 1, 9],
            [4, 3, 2, 7, 1, 6, 9, 5, 8],
            [5, 8, 7, 9, 2, 3, 1, 6, 4],
            [9, 6, 1, 5, 8, 4, 7, 3, 2]
        ]
    }

    isValidSudoku() {
        return this.allSquaresAreValid() && this.allColumnsAndRowsAreValid();
    }

    allSquaresAreValid() {
        for (let i = 0; i < 3; ++i) {
            for (let j = 0; j < 3; ++j) {
                if (!this.isValidSquare(i * 3, j * 3)) {
                    return false;
                }
            }
        }

        return true;
    }

    isValidSquare(row, col) {
        const seenNumbers = new Set();

        for (let i = 0; i < 3; ++i) {
            for (let j = 0; j < 3; ++j) {
                if (seenNumbers.has(this.grid[i + row][j + col])) {
                    return false;
                }
                seenNumbers.add(this.grid[i + row][j + col]);
            }
        }
        return true;
    }

    allColumnsAndRowsAreValid() {
        for (let i = 0; i < 9; ++i) {
            const setRows = new Set();
            const setColumns = new Set();
            for (let j = 0; j < 9; ++j) {
                if (setRows.has(this.grid[i][j]) || setColumns.has(this.grid[j][i])) {
                    return false;
                }

                setRows.add(this.grid[i][j]);
                setColumns.add(this.grid[j][i]);

            }
        }
        return true;
    }
}