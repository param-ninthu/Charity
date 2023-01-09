import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import React from 'react'

//// Screeens
import HomeScreen from './../views/home';
import CharitySignUpScreen from './../views/RegisterasCharity';
import BusinessSignUpScreen from './../views/RegisterasBusiness';
import SignUpScreen from './../views/Register';
import JoinCommunity from './../views/JoinCommunity';
import AddEvents from './../views/AddEvents.js';
import Donate from './../views/Donate.js';
import Login from './../views/login';
import CharityProfile from './../views/CharityProfile';
import Registeras from './../views/registeras';
import EditProfile from "./../views/EditProfile";
import BusinessPage from "../views/BusinessPage";
import EditBusinessProfile from "../views/EditBusinessProfile";
import BusinessProfile from "../views/BusinessProfile";
import AddProduct from "../views/AddProduct";
import CharityViews from "../views/CharityViews";
import CharityPage from "../views/CharityPage";
import UserProfile from "../views/UserProfile";
import UserPage from '../views/UserPage';
import VolunteerEvents from "../views/VolunteerEvents";
import SponsorEvents from "../views/SponsorEvents";

const screens={
    Login:{
        screen:Login,
        navigationOptions: {
            headerShown:false
        }
        },
    Home:{
        screen:HomeScreen,
        navigationOptions: {
            headerShown:false
        }
    },
    RegisterChoice:{
        screen:Registeras,
        navigationOptions: {
            headerShown:false
        }
    },
    CharRegister:{
        screen:CharitySignUpScreen,
        navigationOptions: {
            headerShown:false
        }
    },
    
    BusisRegister:{
        screen:BusinessSignUpScreen,
        navigationOptions: {
            headerShown:false
        }
    },

    UserRegister:{
        screen:SignUpScreen,
        navigationOptions: {
            headerShown:false
        }
    },

    Donate:{
        screen :Donate,
        navigationOptions: {
            headerShown:false
        }
    },

    Join:{
        screen:JoinCommunity,
        navigationOptions: {
            headerShown:false
        }
    },

    EditProf:{
        screen:EditProfile,
        navigationOptions: {
            headerShown:false
        }
    },

    BusinessHome:{
        screen:BusinessPage,
        navigationOptions: {
            headerShown:false
        }
    },

    EditBusiness:{
        screen:EditBusinessProfile,
        navigationOptions: {
            headerShown:false
        }
    },
    BusinessProfile:{
        screen:BusinessProfile,
        navigationOptions: {
            headerShown:false
        }
    },

    AddProducts:{
        screen:AddProduct,
        navigationOptions: {
            headerShown:false
        }
    },

    CharityViews:{
        screen:CharityViews,
        navigationOptions: {
            headerShown:false
        }
    },

    CharityPage:{
        screen:CharityPage,
        navigationOptions: {
            headerShown:false
        }
    },
    CharityProfile:{
        screen:CharityProfile,
        navigationOptions: {
            headerShown:false
        }
    },
    AddEvents:{
        screen:AddEvents,
        navigationOptions:{
            headerShown:false
        }
    },
    UserProfile:{
        screen:UserProfile,
        navigationOptions: {
            headerShown:false
        }
    },
    UserPage:{
        screen:UserPage,
        navigationOptions: {
            headerShown:false
        }
    },
    Volunteer :{
        screen:VolunteerEvents,
        navigationOptions: {
            headerShown:false
        }
    },

    Sponsors :{
        screen:SponsorEvents,
        navigationOptions: {
            headerShown:false
        }
    }

}


const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);