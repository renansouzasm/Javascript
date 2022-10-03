let linhas, colunas, conteudo;

document.querySelector("#btn").addEventListener("click", function() {
    linhas = parseInt(document.querySelector("#linhas").value);
    colunas = parseInt(document.querySelector("#colunas").value);

    if (linhas > 0 && colunas > 0) {
        conteudo = "<table>";

        for (let numLinhas = 1; numLinhas <= linhas; numLinhas++) {
            conteudo += `<tr>`;

            for (let numColunas = 1; numColunas <= colunas; numColunas++) {
                
                if ((numColunas % 2) == 0) {
                    conteudo += `<td class="par">${numLinhas},${numColunas}`;
                    conteudo += `</td>`;
                } else {
                    conteudo += `<td class="impar">${numLinhas},${numColunas}`;
                    conteudo += `</td>`;
                }

            }
            conteudo += `</tr>`;
        }
        conteudo += "</table>";
        document.getElementById("saida").innerHTML = conteudo;
    }
})
