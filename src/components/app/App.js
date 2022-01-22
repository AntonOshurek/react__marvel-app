import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import ComicsList from "../comicsList/ComicsList";

const App = () => {

  const [selectedCharacter, setChar] = useState(null);

  const onCharacterSelected = (id) => {
    setChar(id);
  }

  return (
    <Router>
      <div className="app">
        <AppHeader/>
        <main className="main">
          <Switch>

            <Route exact path="/">
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
            </Route>

            <Route exact path="/comics">
              <ComicsList/>
            </Route>

          </Switch>
        </main>
      </div>
    </Router>
  )
}

export default App;
