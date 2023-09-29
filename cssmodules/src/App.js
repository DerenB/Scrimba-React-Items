import './App.css';
import { GreenBox } from './GreenBox';
import { RedBox } from './RedBox';

function App() {

  const sourceLink = "https://dev.to/eransakal/how-to-isolate-component-styles-in-react-using-css-modules-mkm";

  return (
    <div className="App">
      <p>Boxes with CSS Module</p>
      <div>
        <a href={sourceLink}>Source Article</a>
      </div>
      <br />
      <GreenBox />
      <RedBox />
    </div>
  );
}

export default App;
