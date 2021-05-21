import './App.scss';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Siderbar } from './components/Sidebar/Sidebar';
import { Thumbnails } from './components/Thumbnails/Thumbnails';

function App() {
  return (
    <div className="App">
      <div className="circle" />
      <Header />
      <Main />
      <Thumbnails />
      <Siderbar />
    </div>
  );
}

export default App;
