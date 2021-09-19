import './App.css';
import Upload from "./components/Upload/"
import Search from "./components/Search/"
import Notes from "./components/Notes/"
import logo from "./assets/logo.png"
import Welcome from "./components/Welcome/"
import CarouselSlider from "./components/CarouselSlider/"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} />
      </header>
      <div id="main-body">
        <CarouselSlider />
        <Welcome />
        <Search />
        <div id="content">
          <Upload />
          <Notes />
        </div>
      </div>
    </div>
  );
}

export default App;
