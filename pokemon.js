/**
 grab from pokemon api:
 - name
 - id
 - type
 - heigh
 - sprites (images)

 *  */

//  grab pokemon (by id?) from api
const grabPokemon = (idOrName) => {
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${idOrName}/`)
    .then((response) => {
      const data = response.data;
      //   console.log(data);
      // go through pokemon response
      // grab relevant data from response
      // assign the data to variables
      // - name
      const name = data.name;
      // - id
      const id = data.id;
      // - height (convert from decimeters to meters)
      const height = data.height / 10;
      // - sprites (images) (front_default, back_default)
      const frontSprite = data.sprites["front_default"];
      const backSprite = data.sprites["back_default"];
      //   types (array of type values)
      const types = data.types.map((t) => t.type.name);
      //   console.log(name, id, height, frontSprite, backSprite, types);
      updateId(id);
      updateHeight(height);
      updateTypes(types);
      updateSprites(frontSprite, backSprite);
      //   return { name, id, height, frontSprite, backSprite, types };
    });
};

// target specific elements on the page (might have to refactor our html page)
// update the elements with the API data

// Functions to target specific elements on page and update with values
const updateId = (id) => {
  const pokemonId = document.getElementById("pokemon-id");
  pokemonId.innerText = id;
};

const updateHeight = (height) => {
  const pokemonHeight = document.getElementById("pokemon-height");
  pokemonHeight.innerText = height;
};

const updateTypes = (typesArr) => {
  const pokemonTypes = document.getElementById("pokemon-types");
  if (typesArr.length === 1) {
    // if the array has one type value, update page with just the 0-index
    pokemonTypes.innerText = typesArr[0];
  } else {
    //  if it has more than one, use the Array.join() method to join the type
    //  values with a space in between
    pokemonTypes.innerText = typesArr.join(" ");
  }
};

const updateSprites = (frontUrl, backUrl) => {
  const frontSprite = document.getElementById("front-sprite");
  const backSprite = document.getElementById("back-sprite");

  frontSprite.src = frontUrl;
  backSprite.src = backUrl;
  // images are initially hidden from view on the page
  frontSprite.classList.toggle("hidden");
  backSprite.classList.toggle("hidden");
};

grabPokemon(25);
