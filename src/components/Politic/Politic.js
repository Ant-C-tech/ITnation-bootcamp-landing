import React from "react";
import "./Politic.scss";
import Card from "./Card";

const Politic = ({ title, subtitle, items }) => {
  const politicCardsContent = items.map((elem, index) => <Card key={index} item={elem}/>);

  return (
    <section className="politic" id="politic">
      <div className="container">
        <h2 className="politic__title">{title}</h2>
        <p className="politic__subtitle">{subtitle}</p>
        <div className="politic__cards">{politicCardsContent}</div>
      </div>
    </section>
  );
};

export default Politic;
