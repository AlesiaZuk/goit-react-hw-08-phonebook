import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import LoginView from './views/LoginView/LoginView';
import RegisterView from './views/RegisterView/RegisterView';
import PhonebookView from './views/PhonebookView/PhonebookView';

const sectionClass = ['section'];

function App() {
  return (
    <section className={sectionClass}>
      <AppBar />
      <Switch>
        {/* <Route path="/">
          <LoginView />
        </Route> */}
        <Route path="/login">
          <LoginView />
        </Route>
        <Route path="/register">
          <RegisterView />
        </Route>
        <Route path="/phonebook">
          <PhonebookView />
        </Route>
      </Switch>
    </section>
  );
}

export default App;
