//shows full list of POkemon from Data array

const React = require("react");

const myStyle = {
  color: "red",
//   backgroundColor: "#000000",
};

function Index(props) {
  const { pokemonData } = props;
  console.log(pokemonData);

  return (
    <main> 
      <h1>See all the Pokemon! </h1>

      <ul>
        {pokemonData.map((pokemon, i) => {
          return (
            <li>
              <a href={`/pokemon/${i}`} style={myStyle}>
                {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
              </a>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

module.exports = Index;

//!Not sure where to add this
//

//   class MyFirstComponent extends React.Component {
//     render() {
//       return (
//         <div style={myStyle}>My First React Component!</div>
//       );
//     }
//   }
