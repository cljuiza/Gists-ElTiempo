import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getGist, removeGistId } from "../../Redux/actions/actionsGists";
import styled from "styled-components";

//Components
import Gist from "../Gist/Gist";
import Pagination from "../Pagination/Pagination";

const Container = styled.div`
  margin-top: 20px;
  width: 100%;
  min-height: 71vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  text-decoration: none;
`;
const Paginado = styled.div`
  width: 100%;
`;
const StyledH1 = styled.h1`
  color: #adbac7;
`;

const Gists = ({ stateSearch }) => {
  const gists = useSelector((state) => state.allGists);
  const dispatch = useDispatch();
  const [postsPerPage] = useState(14);
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (gists.length === 0) {
      dispatch(getGist());
    }
    gists.sort((a, b) => {
      const namea = a.owner.login.toLowerCase();
      const nameb = b.owner.login.toLowerCase();
      if (namea < nameb) {
        return -1;
      }
      if (namea > nameb) {
        return 1;
      }
      return 0;
    });
    setPosts(gists);
    dispatch(removeGistId());
  }, [dispatch, gists]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      {Object.keys(gists).length === 0 ? (
        <div>
          <StyledH1>...Loading</StyledH1>
        </div>
      ) : (
        <>
          <Container>
            {stateSearch !== ""
              ? currentPosts
                  .filter((gist) =>
                    gist.owner.login
                      .toLowerCase()
                      .includes(stateSearch.toLowerCase())
                  )
                  .map((g, index) => (
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/gists/${g.owner.login}`}
                      key={index}
                    >
                      <Gist
                        id={g.owner.id}
                        name={g.owner.login}
                        image={g.owner.avatar_url}
                        description={g.description}
                      />
                    </Link>
                  ))
              : gists &&
                currentPosts.map((g, index) => (
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/gists/${g.owner.login}`}
                    key={index}
                  >
                    <Gist
                      id={g.owner.id}
                      name={g.owner.login}
                      image={g.owner.avatar_url}
                      description={g.description}
                    />
                  </Link>
                ))}
          </Container>
          <Paginado>
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={posts.length}
              paginate={paginate}
            />
          </Paginado>
        </>
      )}
    </>
  );
};

export default Gists;
