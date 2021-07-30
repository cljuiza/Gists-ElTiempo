import React, { useState } from "react";
import styled from "styled-components";
//components
import Gists from "../Gists/Gists";

const Container = styled.div`
  margin-top: 32px;
  width: 100%;
`;
const StyleInput = styled.input`
    background:#fff;
    width: 250px;
    height: 35px;
    border: none;
    outline: none;
    padding: 0 25px;
    border-radius: 20px;
    font-family: 'Varela Round', sans-serif;
    font-size: 15px;
`;

const Searcher = () => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search !== "") {
      setSearch("");
    } else alert("Digite un gist");
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <StyleInput
          type="text"
          name="search"
          id="search"
          placeholder="search..."
          value={search}
          onChange={handleChange}
        />
      </form>
      <Gists stateSearch={search} />
    </Container>
  );
};

export default Searcher;
