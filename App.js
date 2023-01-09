import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
/// Screens 
import Navigator from './routes/HomeStack';
import CharityPage from './views/CharityPage';
import BusinessPage from './views/BusinessPage';
import UserPage from './views/UserPage.js';
import VolunteerEvents from './views/VolunteerEvents';
import SponsorEvents from './views/SponsorEvents';
import Summa from './views/Summa';
import Login from './views/login.js'
const App= () => {
  return(
  <Navigator/>
   
  );
}

export default App;
