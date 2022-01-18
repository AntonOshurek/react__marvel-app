import { useState } from "react";

import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

const App = () => {

  const [selectedCharacter, setChar] = useState(null);

  const onCharacterSelected = (id) => {
    setChar(id);
  }

  return (
    <div className="app">
      <AppHeader/>
      <main className="main">
        <ErrorBoundary>
          <RandomChar/>
        </ErrorBoundary>
        <div className="characters-content">
          <ErrorBoundary>
            <CharList onCharacterSelected={onCharacterSelected}/>
          </ErrorBoundary>
          <ErrorBoundary>
            <CharInfo charId={selectedCharacter}/>
          </ErrorBoundary>
        </div>
      </main>
    </div>
  )
}

export default App;
