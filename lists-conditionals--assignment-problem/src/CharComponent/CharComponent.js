import React from 'react';

import './CharComponent.css';

const CharComponent = (props) => {
  return (
    <div className="char-component" onClick={props.removeChar}>
      {props.char}
    </div>
  );
};

export default CharComponent;
