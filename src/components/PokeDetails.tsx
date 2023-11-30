import { useEffect, useState } from "react";
import { getPokemon } from "../api/pokeApi";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardMedia, LinearProgress } from "@mui/material";

type pokemonApiOutput = {
  name: string;
  weight: number;
  height: number;
  sprites: { back_default: string; front_default: string };
  types: [
    type: {
      type: any;
      name: string;
    },
  ];
};

function PokeDetails() {
  const [pokemon, setPokemon] = useState<pokemonApiOutput>();

  const params = useParams();
  const pokeName = params.pokeName as string;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getPokemon(pokeName);
        setPokemon(response);
      } catch (error) {
        console.error("Erreur lors de la récupération des pokémons :", error);
      }
    }
    fetchData();
  }, [pokeName]);
  console.log(pokemon);
  return (
    <div>
      {pokemon ? (
        <Card>
          <Typography
            style={{
              margin: "10px 10px 0px 10px",
              textTransform: "capitalize",
            }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {pokemon.name}
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <CardMedia
              component="img"
              image={pokemon.sprites.front_default}
              alt={`front of ${pokemon.name}`}
            />
            <CardMedia
              component="img"
              image={pokemon.sprites.back_default}
              alt={`back of ${pokemon.name}`}
            />
          </div>
          <CardContent style={{ textAlign: "justify" }}>
            <Typography variant="body2" color="text.secondary">
              <b>Type : </b>
              {pokemon.types.map((type) => type.type.name).join(", ")}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              <b>Weight :</b> {pokemon.weight}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <b>Height :</b> {pokemon.height}
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <LinearProgress color="secondary" />
      )}
    </div>
  );
}

export default PokeDetails;
