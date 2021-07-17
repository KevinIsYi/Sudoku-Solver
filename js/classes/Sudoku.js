export class Sudoku {
    constructor() {
        this.grid;
        this.backupGrid = [
            [3, 2, 9, 6, 5, 7, 8, 4, 1],
            [7, 4, 5, 8, 3, 1, 2, 9, 6],
            [6, 1, 8, 2, 4, 9, 3, 7, 5],
            [1, 9, 3, 4, 6, 8, 5, 2, 7],
            [2, 7, 6, 1, 9, 5, 4, 8, 3],
            [8, 5, 4, 3, 7, 2, 6, 1, 9],
            [4, 3, 2, 7, 1, 6, 9, 5, 8],
            [5, 8, 7, 9, 2, 3, 1, 6, 4],
            [9, 6, 1, 5, 8, 4, 7, 3, 2]
        ];
    }

    getSudokuBoard() {
        return this.grid;
    }

    copyGrid() {
        this.grid = [];
        for (let i = 0 ; i < 9 ; ++i) {
            this.grid[i] = [];
            for (let j = 0 ; j < 9 ; ++j) {
                this.grid[i][j] = this.backupGrid[i][j];
            }
        }
    }

    randomizeGrid() {

        this.copyGrid();

        let numberOfChanges = Math.floor(Math.random() * (100 - 85)) + 85;

        while (numberOfChanges > 0) {
            const firstLine = (Math.floor(Math.random() * (100 - 85)) + 85) % 9; // Number between 0 and 8
            const swapDirection = Math.floor(Math.random() * (2)) + 1; // Number between 1 and 2
            const position = (Math.floor(firstLine / 3)) * 3; // Mantain location [0 - 2], [3 - 5], [6 - 8]
            const swappingLine = ((swapDirection + firstLine) % 3) + position;

            if (swapDirection % 2 === 1) { // Vertical
                this.swapVertical(firstLine, swappingLine);
            }
            else { // Horizontal         
                this.swapHorizontal(firstLine, swappingLine);
            }

            --numberOfChanges;
        }
    }

    removeDigits(nDigits) {
        let count = nDigits;

        while (count !== 0) {
            const row = (Math.ceil(Math.random() * 100)) % 9;
            const col = (Math.ceil(Math.random() * 100)) % 9;

            if (this.grid[row][col] !== 0) {
                this.grid[row][col] = 0;
                --count;
            }
        }
    }

    swapVertical(columnA, columnB) {
        for (let i = 0; i < 9; ++i) {
            const aux = this.grid[i][columnA];
            this.grid[i][columnA] = this.grid[i][columnB];
            this.grid[i][columnB] = aux;
        }
    }

    swapHorizontal(rowA, rowB) {
        const aux = this.grid[rowA];
        this.grid[rowA] = this.grid[rowB];
        this.grid[rowB] = aux;
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
                if (
                    setRows.has(this.grid[i][j]) ||
                    setColumns.has(this.grid[j][i]) ||
                    this.grid[i][j] <= 0 ||
                    this.grid[i][j] >= 10
                ) {
                    return false;
                }

                setRows.add(this.grid[i][j]);
                setColumns.add(this.grid[j][i]);

            }
        }
        return true;
    }
}