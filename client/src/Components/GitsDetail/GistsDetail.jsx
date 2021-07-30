import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGistId } from "../../Redux/actions/actionsGists";
import { GISTS_NAME_URL } from "../../Config/constans";
import NavBar from "../NavBar/NavBar";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 30px;
  width: 100%;
  min-height: 71vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
`;
const StyledImg = styled.img`
  width: 300px;
  height: auto;
  border: 3px solid #444c56;
  border-radius: 50%;
`;
const StyledH1 = styled.h1`
  color: #adbac7;
`;
const StyledH2 = styled.h2`
  color: #adbac7;
`;
const StyledH22 = styled.h2`
  color: #adbac7;
  margin-top: 32px;
`;
const StyledH3 = styled.h3`
  color: #adbac7;
  font-size: 20px;
`;
const StyledA = styled.a`
  color: #539bf5;
  text-decoration: none;
`;
const StyledLi = styled.li`
  color: white;
`;
const StyledA2 = styled.a`
  color: #539bf5;
  font-size: 20px;
  display: flex;
  justify-content: flex-start;
  text-decoration: none;
`;

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
      <NavBar />
      {Object.keys(gist).length === 0 ? (
        <div>
          <StyledH1>...Loading</StyledH1>
        </div>
      ) : (
        <>
          <Container>
            <div>
              <StyledH1>
                {gist.name === null ? "Anonymous" : gist.name}
              </StyledH1>
              <StyledImg src={gist.avatar_url} alt="not found" />
              <StyledH2>
                Github : <StyledA href={gist.html_url}>{gist.login}</StyledA>
              </StyledH2>
              <StyledH2>
                id : {gist.id}
              </StyledH2>
              <StyledH3>Company : {gist.company}</StyledH3>
              <StyledH3>
                Created in :{" "}
                {`${gist.created_at
                  .slice(0, 10)
                  .split("-")
                  .reverse()
                  .join("-")} - ${gist.created_at.slice(11, 16)} `}
              </StyledH3>
            </div>
            <div>
              <StyledH22>Public Repositories :</StyledH22>
              {repos && Object.keys(repos).length !== 0 ? (
                <ul>
                  {repos.map((e) => (
                    <StyledLi>
                      <StyledA2 key={e.id} href={e.html_url}>
                        {e.name}
                      </StyledA2>
                    </StyledLi>
                  ))}
                </ul>
              ) : (
                <StyledH3>does not have repositories</StyledH3>
              )}
            </div>
          </Container>
        </>
      )}
    </div>
  );
};

export default GistsDetail;
