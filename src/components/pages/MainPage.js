import { useState } from "react";

import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import CharSearchForm from "../charSearchForm/CharSearchForm";

const MainPage = () => {

  const [selectedCharacter, setChar] = useState(null);

  const onCharacterSelected = (id) => {
    setChar(id);
  }

  return (
    <>
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
        <ErrorBoundary>
          <CharSearchForm/>
        </ErrorBoundary>
      </div>
    </>
  )
}

export default MainPage;
