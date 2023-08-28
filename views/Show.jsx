//shows the details of selected item

const React = require("react");

function Show(props) {
  const { pokemonData } = props;

  return (
    <main>
      <h1>
        Pokemon {pokemonData.name} {pokemonData.i}
      </h1>
    </main>
  );
}

module.exports = Show;
