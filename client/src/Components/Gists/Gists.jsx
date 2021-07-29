import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getGist, removeGistId } from "../../Redux/actions/actionsGists";

//Components
import Gist from "../Gist/Gist";
import Pagination from "../Pagination/Pagination";

const Gists = ({ stateSearch }) => {
  const gists = useSelector((state) => state.allGists);
  const dispatch = useDispatch();
  const [postsPerPage] = useState(20);
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  console.log(stateSearch)

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
    <div>
      <h1>componente Gists</h1>
      {stateSearch !== ""
        ? currentPosts
            .filter((gist) =>
              gist.owner.login.toLowerCase().includes(stateSearch.toLowerCase())
            )
            .map((g, index) => (
              <Link to={`/gists/${g.owner.login}`} key={index}>
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
            <Link to={`/gists/${g.owner.login}`} key={index}>
              <Gist
                id={g.owner.id}
                name={g.owner.login}
                image={g.owner.avatar_url}
                description={g.description}
              />
            </Link>
          ))}
      <div>
        <br />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default Gists;
