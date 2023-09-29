import './App.css';

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  
  // Can't output booleans and objects
  const person = {
    name: 'yoshi',
    age: 30
  };

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Liked { likes } times</p>
        <p>{person.name} is {person.age}</p>
      </div>
    </div>
  );
}

export default App;
