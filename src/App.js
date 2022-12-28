import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/NavBar.jsx';
import ListContainer from './components/itemlistcontainer/ItemListContainer.jsx';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <NavBar/>
      <ListContainer/>
    </div>
  );
}

export default App;
