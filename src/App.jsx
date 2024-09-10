import React from "react";

const App = () => {
  const names = ["mansoor", "shaheer", "hashir"];
  return (
    <>
      <div className="text-5xl">App</div>
      <ul>{names.map((name,index) => (<li key={index}>{name}</li>))}</ul>
    </>
  );
};

export default App;
