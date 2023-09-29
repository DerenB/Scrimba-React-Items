import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  
  // Can't output booleans and objects
  const person = {
    name: 'yoshi',
    age: 30
  };

  const link = "https://www.google.com";

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <h1>{ title }</h1>
        <p>Liked { likes } times</p>
        <p>{person.name} is {person.age}</p>
        <p><a href={link}>Google</a></p>
      </div>
    </div>
  );
}

export default App;
