import React from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  async function fetchData() {
    try {
      const res = await axios.get('/api/');
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="container">
      <h1>Hello World from React! 📦 🚀</h1>
      <div>
        <button onClick={fetchData}>Click me</button>
      </div>
    </div>
  );
};

export default App;
