const { name } = useParams();
const [pokemon, setPokemon] = useState();
useEffect(() => {
  console.log(Pokedex);
  setPokemon(
    Pokedex.find((pokemon) => {
      console.log(pokemon);
      return pokemon.Name === name;
    })
  );
  console.log(Pokedex, pokemon, name);
}, []);
