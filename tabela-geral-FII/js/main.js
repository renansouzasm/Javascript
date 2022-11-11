// variáveis >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let table = document.getElementById("table");
let nomes = [];
let qtdeCotas = [];
let qtdeInvestida = [];

let setor = [];
let dataBase = [];
let dataPagamento = [];
let proventos = [];
let cotaAtual = [];
let precoMedio = [];
let rendimentos = [];
let dy = [];
let rendimentoMedio24m = [];

let totalCotas = 0;
let totalInvestido = 0;
let totalProventos = 0;

let fii_user = [];
let fii_table = [];

// api >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
async function carregarDadosUser(url) {
    await fetch(url).then((resp) => resp.json())
                    .then((json) => fii_user = json);

    carregarDadosFundos();
}
carregarDadosUser("json/fii.json");

async function carregarDadosFundos() {
    for(let fii of fii_user) {
        let json = await fetch(`https://api-simple-flask.herokuapp.com/api/${fii.nome}`).then(resp => resp.json());

        fii_table.push(json);
        console.log(json);

        nomes.push((fii.nome).toUpperCase());
        qtdeCotas.push(fii.qtde);
        qtdeInvestida.push(fii.totalgasto);
    }

    exibirTabela();
}

function calculos() {
    // vetores >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    for(let fii of fii_user) {
        let dados_fii = fii_table.find((item) => item.fundo.indexOf(fii.nome.toUpperCase()) >= 0);

        if (dados_fii.proximoRendimento.rendimento != "-") {

            proventos.push(dados_fii.proximoRendimento.rendimento);
            dataBase.push(dados_fii.proximoRendimento.dataBase);
            dataPagamento.push(dados_fii.proximoRendimento.dataPag);

        } else {

            proventos.push(dados_fii.ultimoRendimento.rendimento);
            dataBase.push(dados_fii.ultimoRendimento.dataBase);
            dataPagamento.push(dados_fii.ultimoRendimento.dataPag);

        }

        setor.push(dados_fii.setor);
        dy.push(dados_fii.dividendYield);
        cotaAtual.push(dados_fii.valorAtual);
        rendimentoMedio24m.push(dados_fii.rendimentoMedio24M);
    }

    // acumuladores >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    for(let i = 0; i < proventos.length; i++) { 
        rendimentos.push((proventos[i] * 100) / cotaAtual[i]); 
        precoMedio.push(qtdeInvestida[i] / qtdeCotas[i]);

        totalProventos += proventos[i] * qtdeCotas[i]; 
        totalCotas += qtdeCotas[i];
        totalInvestido += qtdeInvestida[i];
    }

    totalInvestido = (totalInvestido).toFixed(2);
    totalProventos = (totalProventos).toFixed(2);
}

function exibirTabela() { 
    calculos();
    document.getElementById("loading").style.display = "none";

    // tabela >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    let percentualNegativo = 0.6;
    let percentualPositivo = 1.0;
    let situacao = "";

    for(let i = 0; i < nomes.length; i++) {
        if (rendimentos[i] < percentualNegativo) {
            situacao = "negativo";
        } else if (rendimentos[i] >= percentualPositivo) {
            situacao = "lucrativo";
        } else {
            situacao = "positivo";
        }

        table.innerHTML +=  `<tr class='${situacao}'>
                                <td>${nomes[i]}</td>
                                <td>${setor[i]}</td>
                                <td>${dataBase[i]}</td>
                                <td>${dataPagamento[i]}</td>
                                <td>R$ ${proventos[i]}</td>
                                <td>R$ ${cotaAtual[i]}</td>
                                <td>${qtdeCotas[i]}</td>
                                <td>R$ ${(qtdeInvestida[i]).toFixed(2)}</td>
                                <td>R$ ${(precoMedio[i]).toFixed(2)}</td>
                                <td>${(rendimentos[i]).toFixed(2)}%</td>
                                <td>${(dy[i]).toFixed(2)}%</td>
                                <td>R$ ${(rendimentoMedio24m[i]).toFixed(2)}</td>
                            </tr>`;
    }

    table.innerHTML +=  `<tr class='fundo_total'>
                            <td colspan='4'>Total Geral</td>
                            <td>R$ ${totalProventos}</td>
                            <td>-</td>
                            <td>${totalCotas}</td>
                            <td>R$ ${totalInvestido}</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>`;

    document.getElementById("favicon").style.display = "block";
}
