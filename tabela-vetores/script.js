let saida = document.getElementById("saida");
let nomesLista = [];
let texto, conteudo;
let i = 0;

document.querySelector("#btn1").addEventListener("click", function() {
    texto = document.querySelector("#texto").value;
    if (texto != null) {
        nomesLista[i] = texto;
        i++;
    }

    conteudo = "<table><tr><th>Índice</th><th>Nome</th></tr>";
    for (let x = 0; x < nomesLista.length; x++) {
        conteudo += `<tr>`;

        if (((x + 1) % 2) == 0) {
            conteudo += `<td class="par">${x + 1}</td>`; 
            conteudo +=`<td class="par">${nomesLista[x]}</td>`;
        } else {
            conteudo += `<td>${x + 1}</td>`; 
            conteudo +=`<td>${nomesLista[x]}</td>`;
        }
        conteudo += `</tr>`;
    }
    conteudo += "</table>";
})

document.querySelector("#btn2").addEventListener("click", function() {
    saida.innerHTML = conteudo;
})
