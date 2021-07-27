import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getGist } from "../../Redux/actions/actionsGists";
import Gist from "../Gist/Gist";

const Gists = () => {
  const gist = useSelector((state) => state.allGists);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGist());
  }, []);

  return (
    <div>
      <h1>componente Gists</h1>
      {gist &&
        gist.map((c) => (
          <Link to={`/gists/${c.owner.id}`} key={c.owner.id}>
            <Gist
              id={c.owner.id}
              name={c.owner.login}
              image={c.owner.avatar_url}
              description={c.description}
            />
          </Link>
        ))}
    </div>
  );
};

export default Gists;
