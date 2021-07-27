import React from 'react';

const Gist = ({id,name,image,description}) => {
    return (
        <div>
            <div>
            {<img src={image} alt="not found"/>}
          </div>
          <div>
              <h4>{name}</h4>
              <p>{description}</p>
          </div>
        </div>
    );
};

export default Gist;