import {useState} from 'react'
import styles from "./App.module.css";
import powered from "./assets/powered.png"
import {levels, calculaImc} from './helpers/imc'
import { GridItem } from './components/GridItem'
import arowwImagem from './assets/leftarrow.png'

const App = () => {
const [heightField, setHeightField] = useState(0);
const [weightField, setWeightField] = useState(0);
const [toShow, setToShow] = useState(null);

const handleCalculateButton = () => {
  if(heightField && weightField) {
    setToShow(calculaImc(heightField, weightField));

  }else{
    alert("Digite todos os campos.")
  }

}
const handleBackButton = () => {
  setToShow(null);
  setHeightField(0);
  setWeightField(0);

}

  return(
    <div className= {styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src= {powered} alt = "" width={150} />
        </div>
      </header>
      <div className= {styles.container}>
        <div className= {styles.esquerda}>
          <h1>Calcule seu IMC.</h1>
          <p>Imc é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>

          <input
            type= "number"
            placeholder="Digite a sua altura. EX: 1.5 (em métros)"
            value={heightField > 0 ? heightField : ''}
            onChange = {events => setHeightField(parseFloat(events.target.value))} 
            disabled ={toShow ? true : false}
          />
          <input
            type= "number"
            placeholder="Digite a seu Peso. EX: 70kg (em kg)"
            value={weightField > 0 ? weightField : ''}
            onChange = {events => setWeightField(parseFloat(events.target.value))} 
            disabled ={toShow ? true : false}
          />

          <button onClick={handleCalculateButton} disabled ={toShow ? true : false}>Calcular</button>

        </div>
        <div className= {styles.direita}>
          {!toShow &&
         <div className={styles.grid}>
         {levels.map((item, key)=>(
          <GridItem key={key} item = {item} />
         ))}
         </div>
          }
          {toShow &&
          <div className={styles.rightBig}>
            <div className={styles.rightArrow} onClick= {handleBackButton}>
              <img src= {arowwImagem}alt="" width={25} />
            </div>
            <GridItem item={toShow} />
          </div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
