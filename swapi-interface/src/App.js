import React from "react";
import Header from "./components/Header";
import CharacterCard from "./components/CharacterCard";
import ShipCard from "./components/ShipCard";

function App() {
  return (
      <div>
        <Header />
        <div className="container">
          <h2 className="text-center mt-4">Characters</h2>
          <CharacterCard name="Luke Skywalker" gender="Male" birthYear="19BBY" />
          <CharacterCard name="Leia Organa" gender="Female" birthYear="19BBY" />
          <CharacterCard name="Darth Vader" gender="Male" birthYear="41.9BBY" />

          <h2 className="text-center mt-4">Starships</h2>
          <ShipCard
              name="Millennium Falcon"
              model="YT-1300 light freighter"
              manufacturer="Corellian Engineering Corporation"
          />
          <ShipCard
              name="X-wing"
              model="T-65 X-wing starfighter"
              manufacturer="Incom Corporation"
          />
        </div>
      </div>
  );
}

export default App;
