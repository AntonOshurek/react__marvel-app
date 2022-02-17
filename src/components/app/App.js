import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";
import Spinner from "../spiner/spiner";

const Page404 = lazy(() => import("../pages/404"));
const MainPage = lazy(() => import("../pages/MainPage"));
const ComicsList = lazy(() => import("../comicsList/ComicsList"));
// const SingleComicPage = lazy(() => import("../pages/SingleComicPage"));
const SingleComicPage = lazy(() => import('../pages/SingleComicPage'));
const SingleCharacterPage = lazy(() => import('../pages/SingleCharacterPage'));
const SinglePage = lazy(() => import('../pages/SinglePage'));

const App = () => {

  return (
    <Router>
      <div className="app">
        <AppHeader/>
          <main className="main">
            <Suspense fallback={<Spinner/>}>
              <Routes>
                <Route path="/react__marvel-app" element={<MainPage/>}/>
                <Route path="/comics" element={<ComicsList/>}/>
                {/* <Route path="/comics/:Id" Component={SingleComicPage} dataType='comic' /> */}
                {/* element={<SingleComicPage/>} */}
                <Route exact path="/comics/:id" element={<SinglePage Component={SingleComicPage} dataType='comic'/>}/>
                    {/* <SinglePage Component={SingleComicPage} dataType='comic'/> */}
                {/* </Route> */}
                <Route exact path="/characters/:id" element={<SinglePage Component={SingleCharacterPage} dataType='character'/>}/>
                    {/* <SinglePage Component={SingleCharacterPage} dataType='character'/> */}
                {/* </Route> */}
                <Route path="*" element={<Page404/>}/>
              </Routes>
            </Suspense>
          </main>
      </div>
    </Router>
  )
}

export default App;
