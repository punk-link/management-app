import './App.scss';
import Grid from './components/common/grid'
import Header from './components/header/header';
import Container from './components/common/container';
import Account from './components/account/account';
//import SecondaryContainer from './components/common/secondary-container';

function App() {
  return (
    <Grid>
      <Header />
      <Container>
        <Account />
      </Container>
    </Grid>
  );
}

export default App;
