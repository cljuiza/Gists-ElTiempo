import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGistId } from "../../Redux/actions/actionsGists";
import { GISTS_NAME_URL } from "../../Config/constans";

const GistsDetail = () => {
  const { name } = useParams();
  const gist = useSelector((state) => state.gistsById);
  const dispatch = useDispatch();
  const [repos, setRepos] = useState();

  useEffect(() => {
    if (name && name !== "") {
      dispatch(getGistId(name));
    }
    getRepos();
  }, [dispatch]);

  const getRepos = async () => {
    const res = await axios
      .get(`${GISTS_NAME_URL}${name}/repos`)
      .then((res) => {
        setRepos(res.data);
      })
      .catch((error) => console.log(`Error: ${error}`));
    return res;
  };
  return (
    <div>
      {Object.keys(gist).length === 0 ? (
        <div>
          <h1>...Loading</h1>
        </div>
      ) : (
        <>
          <div>
            <h1>{gist.name === null ? "Anonymous" : gist.name}</h1>
          </div>
          <div>
            <img src={gist.avatar_url} alt="not found" />
          </div>
          <div>
            <label>
              Github : <a href={gist.html_url}>{gist.login}</a>
            </label>
            <h4>Fecha de creación: {gist.created_at}</h4>
          </div>
          <div>
            <h3>Repositories :</h3>
            {repos && Object.keys(repos).length !== 0 ? (
              repos.map((e) => (
                <div key={e.id}>
                  <a href={e.html_url}>{e.name}</a>
                </div>
              ))
            ) : (
              <p>sin Repositories</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default GistsDetail;
