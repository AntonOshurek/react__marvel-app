import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";

const App = () => {
  return (
    <div className="app">
      <AppHeader/>
      <main className="main">
        <RandomChar/>
        <div className="characters-content">
          <CharList/>
          <CharInfo/>
        </div>
      </main>
    </div>
  )
}

export default App;
