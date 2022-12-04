import styled from "./GridItem.module.css";
import upImagem from '../../assets/up.png';
import downImagem from '../../assets/down.png';

export const GridItem = ({item}) => {
  
    return(
        <div className={styled.main} style ={{backgroundColor: item.color}}>
            <div className={styled.gridIcon}> 
               <img src={item.icon === 'up' ? upImagem : downImagem} alt="" width="30" />
            </div>

            <div className= {styled.gridTitle}>{item.title}</div>
            
            {item.yourImc &&
            <div className={styled.yourImc}>seu IMC é de {item.yourImc} kg/m²</div>
            }
            
            <div className={styled.gridInfo}>
                <>
                IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>

        </div>
        
       
    )
    

}