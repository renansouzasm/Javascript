const img = document.querySelector("#img");
const nome = document.querySelector("#name");
const number = document.querySelector("#number");
const search = document.querySelector("#search");
const element = document.querySelector(".element");
const content = document.querySelector(".content");

let id = 1;

// previous
document.querySelector(".leftArrow").addEventListener("click", previous = () => {
    if(id > 1) {
        id--;
        APIResponse(`https://pokeapi.co/api/v2/pokemon/${id}`);
    }
})

// next
document.querySelector(".rightArrow").addEventListener("click", next = () => {
    id++;
    APIResponse(`https://pokeapi.co/api/v2/pokemon/${id}`);
})

const APIResponse = async (id) => {
    nome.textContent = "Loading...";
    const promise = await fetch(id);

    if(promise.status == 200) {
        const response = await promise.json();

        const pokemon = {
            id: response["id"],
            name: response["name"],
            type: response["types"].map((object) => object["type"]["name"]),
            abilities: response["abilities"].map((object) => object["ability"]["name"]),
            img: response["sprites"]["other"]["official-artwork"]["front_default"],
            gif: response["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"],
        }
        
        if(response["sprites"]["other"]["official-artwork"]["front_shiny"]) {
            pokemon.imgShiny = response["sprites"]["other"]["official-artwork"]["front_shiny"];
            pokemon.gifShiny = response["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_shiny"];
        }

        render(pokemon);
        abilities(pokemon);
    } else {
        notFound();
    }   
}
APIResponse(`https://pokeapi.co/api/v2/pokemon/${id}`);

// render
const render = (pokemon) => {
    const id = pokemon["id"];

    element.classList = `element ${pokemon.type[0]}`;
    img.setAttribute("src", pokemon.img);

    nome.textContent = pokemon.name;
    number.textContent = (id >= 1000)? id : 
    (id >= 100)? ("0" + id) : 
    (id >= 10)? ("00" + id) : 
    (id > 0)? ("000" + id) : "0000";
}

const abilities = (pokemon) => {
    content.innerHTML = `<h3>Details</h3>
    <p><span>Type: </span>${pokemon.type.map((type) => " " + type)}</p>
    <p><span>Abilities: </span>${pokemon.abilities.map((ability) => " " + ability)}</p>`;
}

const notFound = () => {
    nome.textContent = "Not Found!";
    number.textContent = "#" + id;
}

// press enter
search.addEventListener("keyup", (e) => {
    if(((e.key) == "Enter") && search.value !== "") {
        id = search.value;
        APIResponse(`https://pokeapi.co/api/v2/pokemon/${id.toLowerCase()}`);
        search.value = "";
    }
})
