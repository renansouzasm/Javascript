# Pokedex JS

>Um projeto "simples" de uma pokedex com mais de _**1000** pokemons_, mas com alguns conceitos e dificuldades bem interessantes.
>Mais alguns pokemons e mega evoluções a partir da id 10001.

### API Utilizada no Projeto

- <a href="https://pokeapi.co/">PokéAPI</a>

### Inspiração visual

Vi alguns projetos antes de iniciar o meu por conta própria para ter uma noção de por onde eu começaria, "Pegar um .png de uma pokedex e ajustar a posição dos elementos?", "Começar do absoluto zero sem ter em mente mais o menos como seria o design?". Enfim, acabei achando esse modelo que parecia simples de reproduzir, e particularmente adorei o design, <a href="https://dribbble.com/shots/16833947-Mobile-Pokedex-App-Design-Exploration">Dibbble</a>.

```javascript
await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(data => data.json());
```

Criei um objeto chamado _**pokemon**_, no qual "armazenei" os dados que a api retornou como atributos do objeto em questão.
Exemplo de dados que a _**api**_ retornou:

```json
{
"abilities":["ability"],
"id":25,
"name":"pikachu",
"types":["type"],
"sprites":{
        "official-artwork":{ "front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/otherofficial-artwork/132.png", },
    },
}
```

<table>
    <tr>
        <th>Preview | <a href="https://github.com/RenanSouz/Javascript">other javascript projects</a></th>
    </tr>
    <tr>
        <td><img width="600px" src="https://user-images.githubusercontent.com/101893896/201255783-added6fa-8fd1-46c9-818c-03e31eb13c2e.png" alt="preview"/></td>
    </tr>
</table>
