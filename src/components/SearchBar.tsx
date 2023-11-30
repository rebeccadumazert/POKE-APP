import { Autocomplete, Button } from "@mui/joy";
import { getPokemons } from "../api/pokeApi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function SearchBar() {
  const [pokemons, setPokemons] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPokemons();
        setPokemons(response);
      } catch (error) {
        console.error("Erreur lors de la récupération des pokémons :", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Autocomplete
        style={{ margin: "auto" }}
        placeholder="Find your Pokemon"
        options={pokemons}
        sx={{ width: 300 }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
      />
      {!inputValue ? (
        <></>
      ) : (
        <div>
          <Link to={`/${inputValue}`}>
            <Button style={{ margin: "20px" }} color="danger" size="lg">
              Check all details about {inputValue}
            </Button>
          </Link>
        </div>
      )}
    </>
  );
}

export default SearchBar;
