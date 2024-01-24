import "./styles.css"
const WelcomeMessage = (props) => {
  function manipulaEventoClick() {
    alert('Clicou no botão');
  }
  const soma = 1+2;
  return (
  <div> 
    <h2> Exemplo</h2>
    <p> Exemplo com multiplas linhas HTML </p>
    <h3>Hello {props.name}</h3>
    <button onClick = {manipulaEventoClick}> Click me </button>
    <p> Exemplo com expressão JavaScript </p>
    <p> {soma} </p>
  </div>
  )
}
export default WelcomeMessage;


  