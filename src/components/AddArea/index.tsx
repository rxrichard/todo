import { useState, KeyboardEvent } from "react";

import { Container } from "./styles";
import AddIcon from '@mui/icons-material/Add';

type Props = {
    onEnter:(taskName:string)=>void;
}
export const AddArea = (props:Props) => {

  const [inputText, setInputText] = useState('');

  const handleKeyUp = (e: KeyboardEvent) =>{
   
    if((e.code === 'Enter' || e.code === 'NumpadEnter') && inputText.length > 0){
      props.onEnter(inputText);//quando pressionar o enter, chama a função passada no props
      setInputText('');//limpa o input
    }

  }

  return (
    <Container>
      <AddIcon className="icon" />

      <input 
          type="text"
          placeholder="Adicione uma tarefa" 
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyUp={handleKeyUp}
          
      />



    </Container>
  );
};
