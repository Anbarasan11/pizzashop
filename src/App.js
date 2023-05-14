import AppBar from './components/AppBar';
import Banner from './components/Banner';

import Menu from './components/Menu';
import PickOfTheWeek from './components/PickOfTheWeek';
import Comments from './components/Comments';
import './App.css';




function App() {
  return (
    <div className="App">
    <AppBar />
    <Banner />
    <Menu/>
    <PickOfTheWeek />
    <Comments/>
    </div>
  );
}

export default App;
