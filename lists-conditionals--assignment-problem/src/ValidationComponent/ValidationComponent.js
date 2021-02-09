import React from 'react';

const ValidationComponent = (props) => {
  return (
    <div>
      {props.textLength >= 5 ? 'Text long enough' : 'Text too short'}
    </div>
  );
};

export default ValidationComponent;
