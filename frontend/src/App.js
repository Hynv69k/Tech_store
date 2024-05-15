import './assets/sass/app.scss'
import './App.css';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Main from './layouts/Main';


function App() {
  return (
    <div className='container'>
    <Header ></Header>
    <Main >
    </Main>
    <Footer></Footer>
    
    </div>
  );
}

export default App;