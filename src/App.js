import './App.scss';
import Account from './components/account/account';
import Grid from './components/common/grid'
import Header from './components/header/header';
import { Routes, Route } from "react-router-dom";
import ScreenContainer from './components/common/screen-container';
//import SecondaryScreenContainer from './components/common/secondary-screen-container';

function App() {
    return (
        <Grid>
            <Header />
            <ScreenContainer>
                <Routes>
                    <Route path='/*' element={<Account />} />
                    <Route path='*' element={
                        <div>There's nothing here!</div>
                    }/>
                </Routes>
            </ScreenContainer>
        </Grid>
    );
}

export default App;
