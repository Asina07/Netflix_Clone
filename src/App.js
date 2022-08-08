import './App.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import RowPost from './components/RowPost/RowPost';
import {originals,action,trending,ComedyMovies,HorrorMovies,RomanceMovies,Documentaries} from "./url"

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner/>
     <RowPost url={originals} title='Netflix Originals'/>
     <RowPost url={action} title='Action' isSmall/>
     <RowPost url={trending} title='Trending' isSmall/>
     <RowPost url={ComedyMovies} title='Comedy' isSmall/>
     <RowPost url={HorrorMovies} title='horror' isSmall/>
     <RowPost url={RomanceMovies} title='Romance' isSmall/>
     <RowPost url={Documentaries} title='Documentry' isSmall/>
    </div>
  );
}

export default App;
