import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {

  let time = new Date().toLocaleTimeString();

  const [ctime, setCtime] = useState(time);

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };

  setInterval(UpdateTime,1000)
  return (
    <div className="my-container container bg-secondary w-100 h-50 p-5 border rounded text-center">
      <h1 className="text-success">Welcome</h1>
      <h1 className="border rounded border-dark"> {ctime} </h1>
    </div>
  );
};

export default App;