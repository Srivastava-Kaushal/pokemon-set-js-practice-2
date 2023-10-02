// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
// https://github.com/PokeAPI/sprites/tree/master/sprites/pokemon
const container=document.querySelector("#container");
const baseurl="https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/";
for(let i=1;i<=151;i++){
    const pokemon=document.createElement("div");
    const label=document.createElement("spam");
    label.innerText=`#${i}`;
    pokemon.classList.add("pokemon");
    const newImg=document.createElement("img");
    newImg.src=`${baseurl}${i}.svg`
    pokemon.append(newImg);
    pokemon.append(label);
    container.appendChild(pokemon);
}