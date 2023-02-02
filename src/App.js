import './App.scss';
import axios from 'axios';
import { Routes, Route } from "react-router-dom";
import Account from './components/account/account';
import Grid from './components/common/grid'
import Header from './components/header/header';
import ScreenContainer from './components/common/screen-container';
import Login from './components/login/login';
import SignUp from './components/signup/sign-up';
import routes from './constants/routes';
import { useState, useEffect } from 'react';

//import SecondaryScreenContainer from './components/common/secondary-screen-container';

function App() {
    return (
        <Grid>
            <Header />
            <ScreenContainer>
                <Routes>
                    <Route path={routes.login} element={<Login/>} />
                    <Route path={routes.signUp} element={< SignUp/>} />
                    <Route path={routes.notFound} element={
                        <div>There's nothing here!</div>
                    }/>
                </Routes>
            </ScreenContainer>
        </Grid>
    );
}

export default App;
