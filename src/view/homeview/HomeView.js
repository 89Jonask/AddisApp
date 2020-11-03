import React, { useState } from "react";
import PokemonService from "../../shared/api/service/PokemonService";

export const HomeView = () => {
  const [data, setData] = useState();
  const [search, setSearch] = useState("");

  const fetchDataFromExternalAPI = () => {
    PokemonService.searchForPokemon(search.toLowerCase())
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));

    /* Axios.get(`https://pokeapi.co/api/v2/pokemon/${search.toLocaleLowerCase()}`)
      .then((response) => setData(response.data))
      .catch((error) => console.log(error)); */
  };

  const displayData = () => {
    if (data) {
      return (
        <div>
          <h1>name: {data.name}</h1>
          <h1>weight: {data.weight}</h1>
          <h1>height: {data.height}</h1>
          <h1>type: {data.types[0].type.name}</h1>
        </div>
      );
    }
  };

  return (
    <div>
      <span>search for pokemon</span>
      <input onChange={(event) => setSearch(event.target.value)} />

      <br />
      <h1>I am the home</h1>
      <button onClick={() => fetchDataFromExternalAPI()}>Make API call</button>
      {displayData()}
    </div>
  );
};
