import React, { useState } from "react";

//components
import Gists from "../Gists/Gists";

const Searcher = () => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(search!==""){
      // action get 
    }
    else alert("Digite un gist")
  };

  return (
    <div>
      <h2>Searcher</h2>
      <form onSubmit={handleSubmit}> 
        <input
          type="text"
          name="search"
          id="search"
          placeholder="search..."
          value={search}
          onChange={handleChange}
        />
        <input type="submit" value="Search" /> 
      </form>
      <Gists stateSearch={search}/>
    </div>
  );
};

export default Searcher;
