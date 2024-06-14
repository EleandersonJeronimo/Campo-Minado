const square = {
    row: 0,
    column: 0,
    state: "closed",
    hasMine: false,
    nearMines: 0
};

const createMinefield = (rows, columns) => {
    let minefield = [];
    for (let i = 0; i < rows; i++) {
        let rowArray = [];
        for (let j = 0; j < columns; j++) {
            let newSquare = { ...square, row: i, column: j }; // Cria uma cópia do objeto square e atualiza row e column
            rowArray.push(newSquare);
        }
        minefield.push(rowArray);
    }
    return minefield;
};

const placeMines = (minefield, mineCount) => {
    let rows = minefield.length;
    let columns = minefield[0].length;
    let placedMines = 0;

    while (placedMines < mineCount) {
        let row = Math.floor(Math.random() * rows);
        let column = Math.floor(Math.random() * columns);

        if (!minefield[row][column].hasMine) {
            minefield[row][column].hasMine = true;
            placedMines++;
            console.log('Mina adicionada com sucesso')
        }
        else{
            console.log('Já existe uma mina nessa posição')
        }
    }
};

