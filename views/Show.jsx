//shows the details of selected item

const React = require("react");

function Show(props) {
  const { pokemon } = props;

  return (
    <main>
      <a href={`/pokemon`}>Back</a>
      <h1>Gotta Catch 'Em All</h1>
      <h2> {pokemon.name} </h2>
      <img src={pokemon.img + ".jpg"} alt={pokemon.name}></img>
    </main>
  );
}

module.exports = Show;
