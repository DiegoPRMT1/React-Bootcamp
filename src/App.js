import './App.css';
import Mensaje from './Mensaje.js';

// Vamos a ponernos en el caso de que queremos repetir algo o queremos reducir el numero de caracteres pues creamos un componente
const Description = () => {
  return <h1>Esto es una description</h1>
}
// SIEMPRE CREAR LOS COMPONENTES DE ARRIBA FUERA DE OTRO COMPONENTE
function App() {
  // dentro de las funciones podemos declarar variables por ejemplo
  const mensaje = 'Hola mundo'
  return (
    <div className="App">
      {mensaje}
      {/* Se importa desde un fichero externo, de hecho le vamos a pasar props(parametros en react) */}
      <Mensaje message="Esto es un curso de reactt" />
      <Description />
    </div>
  );
  // tambien podemos llamar a la variable si estuviese en otro archivo por ejemplo
}
// Dentro de la manera de definir una funcion podemos decidir meterlo dentro de una const y seria totalmente valido
// const App = () => {
//   return (
//     <div className="App">
//       Hola mundo
//     </div>
//   );
// }
export default App;
