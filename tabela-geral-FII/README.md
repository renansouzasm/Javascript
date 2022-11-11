# Tabela geral FII

>Tabela geral dos FII (Fundos de investimento imobiliário) | Pequeno projeto de final de semestre, utilizando javascript, um pouco de json, e minha primeira experiência consumindo uma api

### Utilizando FETCH

Utilizei um fetch para pegar os objetos de um json local, para conseguir pegar os nomes de cada fundo, e pesquisalos atravéz da api em outro fetch. Também foram utilizadas funções assíncronas para que o resto do código aguardasse a resposta da api para ser executado.

```javascript
await fetch(`https://api-simple-flask.herokuapp.com/api/${fii.nome}`).then(resp => resp.json());
```

Foram criados vários vetores para pegar os dados de cada um dos objetos que a api me retornava, e poder manipula-los mais facilmente.
Exemplo de dados que a api retornou:

```json
{
"dividendYield":15.7,
"fundo":"HABT11",
"inicioFundo":"-",
"maxMes":95.62,
"minMes":93.5,
"nomePregao":"FII HABIT II",
"prazoDuracao":"Indeterminado",
"proximoRendimento":{
    "cotaBase":96.62,
    "dataBase":"31/10/2022",
    "dataPag":"11/11/2022",
    "rendimento":0.9
  },
"pvp":0.93,
"rendimentoMedio24M":1.399,
"segmento":"Pap\u00e9is",
"setor":"T\u00edtulos e Valores Mobili\u00e1rios",
"status":200,
"ultimoRendimento":{
    "cotaBase":94.28,
    "dataBase":"30/09/2022",
    "dataPag":"11/10/2022",
    "rendimento":1.0
  },
"valorAtual":93.5,
"valorPatrimonioPCota":100.26,
"valorizacao":-16.96
}
```

<table>
    <tr>
        <th>Preview | <a href="https://github.com/renansouzasm/Tabela-geral-FII-JS">repository</a></th>
    </tr>
    <tr>
        <td><img width="600px" src="https://user-images.githubusercontent.com/101893896/201255783-added6fa-8fd1-46c9-818c-03e31eb13c2e.png" alt="preview"/></td>
    </tr>
</table>
