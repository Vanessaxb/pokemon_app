//adds new form for item entry

const React = require("react");

function New() {
  return (
    <main>
      <h1>New Pokemon</h1>

      <form action="/pokemon" method="POST">
        Name: <input type="text" name="name"></input>
        <br />
        Image: <input type="text" name="img"></input>
        <br />
       
        <input type="submit" value="Create Pokemon"></input>
      </form>
    </main>
  );
}

module.exports = New;