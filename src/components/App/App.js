// import { useState } from 'react';
// import './App.css';
// import Header from '../Header/Header';
// import RouteBar from '../RouteBar/RouteBar';
// import { Switch, Route } from 'react-router-dom';
// import Bloggers from '../Bloggers/Bloggers';
// import Preloader from '../Preloader/Preloader';
// import Footer from '../Footer/Footer';
// import Blogger from '../Blogger/Blogger';
// import React from 'react';


// function App() {

//   const [selectedCard, setSelectedCard] = useState(null);

//   React.useEffect(() => {
//     setSelectedCard(JSON.parse(localStorage.getItem('selectedCard')) || null);
//   }, []);

//   React.useEffect(() => {
//     localStorage.setItem('selectedCard', JSON.stringify(selectedCard));
//   }, [selectedCard]);

//   function handleCardClick(data) {
//     setSelectedCard(data);
//   }

//   return (

//     <div className="app">
//       <Header></Header>
//       <Switch>

//         <Route exact path="/bloggers">
//           <RouteBar></RouteBar>
//           <Bloggers onCardClick={handleCardClick} />
//           <Preloader></Preloader>
//         </Route>

//         <Route path="/blogger">
//           <Blogger data={selectedCard} />
//           <Bloggers onCardClick={handleCardClick} />
//         </Route>

//       </Switch>
//       <Footer></Footer>
//     </div>
//   );
// }

// export default App;

import './App.css';
import Header from '../Header/Header';
import RouteBar from '../RouteBar/RouteBar';
import { Switch, Route } from 'react-router-dom';
import Bloggers from '../Bloggers/Bloggers';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';
import Blogger from '../Blogger/Blogger';
import React, { useState } from 'react';

import { LOCALES } from '../../translation/locales';
import { messages } from '../../translation/messages';
import { IntlProvider } from 'react-intl';
import Main from '../UnderConstruction/UnderConstruction';
import UnderConstruction from '../UnderConstruction/UnderConstruction';


const App = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentLocale, setCurrentLocale] = useState(getInitialLocal());
  const [isClicked, setIsClicked] = useState(false);

  const languageChange = (evt) => {
    setCurrentLocale(evt.target.value);
    localStorage.setItem("locale", evt.target.value);
    setIsClicked({ active: evt.target.value });
  };

  function getInitialLocal() {
    const savedLocale = localStorage.getItem("locale");
    return savedLocale || LOCALES.RUSSIAN;
  }

  React.useEffect(() => {
    setSelectedCard(JSON.parse(localStorage.getItem('selectedCard')) || null);
  }, []);

  React.useEffect(() => {
    localStorage.setItem('selectedCard', JSON.stringify(selectedCard));
  }, [selectedCard]);

  React.useEffect(() => {
    setIsClicked(JSON.parse(localStorage.getItem('language')) || false);
  }, []);

  React.useEffect(() => {
    localStorage.setItem('language', JSON.stringify(isClicked));
  }, [isClicked]);

  function handleCardClick(data) {
    setSelectedCard(data);
  }

  // const UnderConstructionPath = [
  //   './cases',
  //   './exit-agency',
  // ]

  return (

    <IntlProvider
      messages={messages[currentLocale]}
      locale={LOCALES.RUSSIAN}
      defaultLocale={LOCALES.RUSSIAN}
    >
      <div className="app">
        <Header
          currentLocale={currentLocale}
          languageChange={languageChange}
          isClicked={isClicked}
        />
        <RouteBar
          data={selectedCard}
        />
        <Switch>

          <Route path="/main">
            <Main />
          </Route>

          <Route path="/bloggers">
            <Bloggers onCardClick={handleCardClick} />
            <Preloader></Preloader>
          </Route>

          <Route path="/blogger">
            <Blogger data={selectedCard} />
            <Bloggers onCardClick={handleCardClick} />
          </Route>

          <Route path="/cases">
            <UnderConstruction />
          </Route>

          <Route path="/exit-agency">
            <UnderConstruction />
          </Route>

        </Switch>
        {/* {useRouteMatch(UnderConstructionPath) ? null : (
          <UnderConstruction />
        )} */}
        <Footer></Footer>
      </div>
    </IntlProvider>

  );
}

export default App;
