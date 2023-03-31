import { element } from 'prop-types';
import './App.css';
import Header from './Components/Header';
import Movie from './Components/Movie';
import data from './data.json'
function App() {
  return (
    <div className="App">
      <Header />
      <div className='main'>
        {
          data.map((element) => {
            return (
              <Movie
                title={element.Title}
                year={element.Year}
                img={element.Poster}
              />
            )
          })
        }

      </div>
    </div>
  );
}

export default App;
