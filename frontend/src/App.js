
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import LandingPage from './screens/LandingPage/LandingPage';
import {BrowserRouter, Route} from 'react-router-dom'
import MyNotes from './screens/MyNotes/MyNotes';

function App() {
  return (
    <BrowserRouter>
     <Header/>
        <main >
          <Route path="/" component={LandingPage} exact/>
          <Route path="/mynotes" component={MyNotes} exact/>
        </main>
     <Footer/>
    </BrowserRouter>
  );
}

export default App;
