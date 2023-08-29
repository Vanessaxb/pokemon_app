//shows the details of selected item

const React = require("react");

const mainStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  position: "relative"
};

const backLinkStyles = {
  color: "blue",
  textDecoration: "none",
  marginTop: "10px",
  fontSize: "20px", 
  position: "absolute",
  top: "10px", 
  left: "10px", 
};

function Show(props) {
  const { pokemon } = props;

  return (
    <main style={mainStyles}>
      <a href={`/pokemon`} style={backLinkStyles}>Back</a>
      <h1>Gotta Catch 'Em All</h1>
      <h1> {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)} </h1>
      <img src={pokemon.img + ".jpg"} alt={pokemon.name}></img>
    </main>
  );
}

module.exports = Show;
