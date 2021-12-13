import { Component } from "react/cjs/react.production.min";

import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";

class App extends Component {

  state = {
    selectedCharacter: null
  }

  onCharacterSelected = (id) => {
    this.setState({
      selectedCharacter: id
    })
  }

  render() {
    return (
      <div className="app">
        <AppHeader/>
        <main className="main">
          <RandomChar/>
          <div className="characters-content">
            <CharList onCharacterSelected={this.onCharacterSelected}/>
            <CharInfo charId={this.state.selectedCharacter}/>
          </div>
        </main>
      </div>
    )
  }
}

export default App;
