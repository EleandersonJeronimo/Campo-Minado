const square = {
    row: 0,
    column: 0,
    state: "closed",
    hasMine: false,
    nearMines: 0
};

const criarCampo = (linhas, colunas) => {
    let campo = [];
    for (let i = 0; i < linhas; i++) {
        let linhaArray = [];
        for (let j = 0; j < colunas; j++) {
            let novoSquare = { ...square, row: i, column: j };
            linhaArray.push(novoSquare);
        }
        campo.push(linhaArray);
    }
    return campo;
};

const colocarMinas = (campo, qtdMinas) => {
    let linhas = campo.length;
    let colunas = campo[0].length;
    let minasColocadas = 0;

    while (minasColocadas < qtdMinas) {
        let linha = Math.floor(Math.random() * linhas);
        let coluna = Math.floor(Math.random() * colunas);

        if (!campo[linha][coluna].hasMine) {
            campo[linha][coluna].hasMine = true;
            minasColocadas++;
        }
    }
};

const contarMinasVolta = (campo, linha, coluna) => {
    let linhas = campo.length;
    let colunas = campo[0].length;
    let qtdMinas = 0;

    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            if (i === 0 && j === 0) continue;

            let novaLinha = linha + i;
            let novaColuna = coluna + j;

            if (novaLinha >= 0 && novaLinha < linhas && novaColuna >= 0 && novaColuna < colunas) {
                if (campo[novaLinha][novaColuna].hasMine) {
                    qtdMinas++;
                }
            }
        }
    }

    return qtdMinas;
};

const contarTotMinas = (campo) => {
    let linha = campo.length;
    let coluna = campo.length[0];
    let tot = 0;

    for(let i = 0; i < linha; i++){
        for(let j = 0; j < coluna; j++)
            tot += contarMinasVolta(campo, i, j)
    }
    return tot;
}
const imprimirMatriz = (campo) => {
    let linhas = campo.length;
    let colunas = campo[0].length;

    for (let i = 0; i < linhas; i++) {
        let linhaString = "";
        for (let j = 0; j < colunas; j++) {
            let square = campo[i][j];
            if (square.hasMine) {
                linhaString += "[*]";
            } else {
                if (square.nearMines === 0) {
                    linhaString += "[ ]";
                } else {
                    linhaString += `[${square.nearMines}]`;
                }
            }
        }
        console.log(linhaString);
    }
};

// Exemplo de uso
let teste = criarCampo(5, 5);
colocarMinas(teste, 5);
imprimirMatriz(teste);

