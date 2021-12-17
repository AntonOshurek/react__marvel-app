import { Component } from "react/cjs/react.production.min";

import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

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
          <ErrorBoundary>
            <RandomChar/>
          </ErrorBoundary>
          <div className="characters-content">
            <ErrorBoundary>
              <CharList onCharacterSelected={this.onCharacterSelected}/>
            </ErrorBoundary>
            <ErrorBoundary>
              <CharInfo charId={this.state.selectedCharacter}/>
            </ErrorBoundary>
          </div>
        </main>
      </div>
    )
  }
}

export default App;
