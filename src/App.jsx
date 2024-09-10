import React from "react";

const App = () => {
  const names = ["mansoor", "shaheer", "hashir"];
  const loggedIn = false;
  return (
    <>
      <div className="text-5xl">App</div>
      <ul>{names.map((name,index) => (<li key={index}>{name}</li>))}</ul>
      {loggedIn ? <h1>WElcome</h1> : <h1>Continue as guest</h1>}
    </>
  );
};

export default App;
