// let input = [
//     [".", ".", "1", "."],
//     [".", ".", ".", "."],
//     [".", ".", "3", "."],
//     [".", ".", "2", "."],
// ];

let input = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
];

let solveSudoku = function(board) {
    const size = 9;
    const boxSize = 3;

    const findEmpty = (board) => {
        for (let r = 0; r < size; r++) {
            for (let c = 0; c < size; c++) {
                if (board[r][c] === '.') {
                    return [r, c];
                }
            }
        }

        return null;
    };

    const validate = (num, pos, board) => {
        const [r, c] = pos;

        // Check rows
        for (let i = 0; i < size; i++) {
            if (board[i][c] === num && i !== r) {
                return false;
            }
        }

        // Check cols
        for (let i = 0; i < size; i++) {
            if (board[r][i] === num && i !== c) {
                return false;
            }
        }

        // Check box
        const boxRow = Math.floor(r / boxSize) * boxSize;
        const boxCol = Math.floor(c / boxSize) * boxSize;

        for (let i = boxRow; i < boxRow + boxSize; i++) {
            for (let j = boxCol; j < boxCol + boxSize; j++) {
                if (board[i][j] === num && i !== r && j !== c) {
                    return false;
                }
            }
        }

        return true;
    };

    const solve = () => {
        const currentPosition = findEmpty(board);

        if (currentPosition === null) return true;

        for (let i = 1; i < size + 1; i++) {
            const  currentNumber = i.toString();
            const isValid = validate(currentNumber, currentPosition, board);

            if (isValid) {
                const [x, y] = currentPosition;

                board[x][y] = currentNumber;

                if (solve()) return true;

                board[x][y] = '.';
            }
        }

        return false;
    };

    solve();

    return board;
}

console.table(input);
console.table(solveSudoku(input));
