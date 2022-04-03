import MainPage from "./component/MainPage";
import { Redirect, Route, Switch } from "react-router-dom";
import { Fragment } from "react";
import NavBar from "./component/NavBar";
import Skills from "./component/Navigation/Skills";
import About from "./component/Navigation/About";
import ContactForm from "./component/Navigation/ContactForm";

function App() {
  return (
    <Fragment>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" exact>
          <MainPage />
        </Route>
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/about">
          <About />
        </Route>
       
        <Route path="/contact">
          <ContactForm />
        </Route>
        <Route path="*">
          <MainPage />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
