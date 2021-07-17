import { alertSelector, tableSelector } from "../selectors/selectors.js";

export class UI {
    generateGrid() {
        for (let y = 0; y < 9; ++y) {
            const row = document.createElement('tr');
            for (let x = 0; x < 9; ++x) {
                const tableData = document.createElement('td');
                const tableDataInput = document.createElement('input');

                if (x % 3 === 0 && x !== 0) {
                    tableData.classList.add('border-left');
                }
                if (y % 3 === 2 && y !== 8) {
                    tableData.classList.add('border-bottom');
                }

                tableData.id = `cell-${y},${x}`;
                tableDataInput.id = `input-${y},${x}`;

                tableData.appendChild(tableDataInput);
                row.appendChild(tableData);
            }

            tableSelector.appendChild(row);
        }
    }

    fillGridWithValues(board) {
        for (let y = 0; y < 9; ++y) {
            for (let x = 0; x < 9; ++x) {
                const selector = document.getElementById(`input-${y},${x}`);
                selector.value = board[y][x] !== 0 ? board[y][x] : '';
            }
        }
    }

    fireAlert(message) {
        alertSelector.textContent = message;
        alertSelector.animate([
            {
                bottom: '0px',
            },
            {
                bottom: '50px',
            },
            {
                bottom: '50px',
            },
            {
                bottom: '50px',
            },
            {
                bottom: '50px',
            },
            {
                bottom: '0px'
            },
            {
                bottom: '-150px'
            }
        ], {
            duration: 3000,
        });
    }

    validateGrid() {
        const grid = [];
        let error = false;

        for (let i = 0; i < 9 && !error; ++i) {
            const gridRow = [];
            for (let j = 0; j < 9; ++j) {
                const { value } = document.getElementById(`input-${i},${j}`);

                if (isNaN(value)) {
                    this.fireAlert('Write numbers only');
                    error = true;
                    break;
                }

                gridRow.push(Number(value));
            }
            grid.push(gridRow);
        }

        return {
            grid,
            error
        };
    }
}