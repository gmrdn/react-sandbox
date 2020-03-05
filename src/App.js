import React from "react";
import "./styles.css";

const Hello = props => <h1>Hello {props.name}</h1>;

const Instruction = () => <h2>Ecrire du code et voir ce qui se passe</h2>;

export default function App() {
  return (
    <div className="App">
      <Hello name="React" />
      <Instruction />
    </div>
  );
}
