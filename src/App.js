import './App.css';
import WelcomeMessage from './componentes/WelcomeMessage';
import Componente1 from './componentes/Componente1';
import Componente2 from './componentes/Componente2';

function App() {
  return (
    <div className="App">
      {/*<h1>React App</h1> */}
      <WelcomeMessage name="Joao" />
      <Componente1 />
      <Componente2 parcela1={9} parcela2={9} />
    </div>
  );
}

export default App;

