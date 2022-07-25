import './App.scss';
import Grid from './components/common/grid'
import Header from './components/header/header';
import ScreenContainer from './components/common/screen-container';
import Account from './components/account/account';
//import SecondaryScreenContainer from './components/common/secondary-screen-container';

function App() {
  return (
    <Grid>
      <Header />
      <ScreenContainer>
        <Account />
      </ScreenContainer>
    </Grid>
  );
}

export default App;
