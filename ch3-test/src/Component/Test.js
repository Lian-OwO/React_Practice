import React from "react";
import "../CSS/test.css";

const Test = () => {
  const name = "은들";
  return (
    <div className="funcComp">
      <h1>함수형 컴포넌트 테스트</h1>
      {name}
    </div>
  );
};

export default Test;
