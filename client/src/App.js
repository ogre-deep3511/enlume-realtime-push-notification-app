import React from 'react';
import './App.css';
import Register from './components/register';
import Login from './components/login';
import Post from './components/post';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Register />
      </header>
    </div>
  );
}

export default App;

// function App() {
//   const [data, setData] = React.useState(null);

//   React.useEffect(() => {
//     fetch("/api")
//       .then((res) => res.json())
//       .then((data) => setData(data.message));
//   }, []);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           {!data ? "Loading..." : data}
//         </p>
//       </header>
//     </div>
//   );
// }
