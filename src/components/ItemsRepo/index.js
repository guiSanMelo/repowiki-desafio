import React from "react";
import { ItemContainer } from "./styles";

const ItemRepo = ({ repo }) => {
  console.log(repo);

  return (
    <ItemContainer>
      <h3>{repo?.name}</h3>
      <p>{repo?.full_name}</p>
      <a
        href={repo?.html_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver Repositório
      </a>
    </ItemContainer>
  );
};

export default ItemRepo