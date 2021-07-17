import { tableSelector } from "../selectors/selectors.js";

export class UI {
    constructor() { };

    generateGrid() {
        for (let y = 8; y >= 0; --y) {
            const row = document.createElement('tr');
            for (let x = 0; x < 9; ++x) {
                const tableData = document.createElement('td');
                const tableDataInput = document.createElement('input');

                if (x % 3 === 0 && x !== 0) {
                    tableData.classList.add('border-left');
                }
                if (y % 3 === 0 && y !== 0) {
                    tableData.classList.add('border-bottom');
                }

                tableData.id = `cell-${y},${x}`;
                tableDataInput.id = `input-${y},${x}`;

                tableData.appendChild(tableDataInput);
                row.appendChild(tableData);
            }

            tableSelector.appendChild(row);
        }
    };
}