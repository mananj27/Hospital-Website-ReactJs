import React from 'react';
import GlobalStyles from './globalStyles';
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services';
import Location from './pages/Location/Location';
import SignUp from './pages/SignUp/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <GlobalStyles/>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Services' component={Services} />
        <Route path='/Location' component={Location} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;