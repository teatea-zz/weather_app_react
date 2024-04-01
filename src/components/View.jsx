import React from 'react';

function View({ count }) {
  return (
    <div className="view-comp">
      <div>현재 카운트 : </div>
      <h2>{count}</h2>
    </div>
  );
}

export default View;
