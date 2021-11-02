import { useState } from "react";
import { Area, Container, Header } from "./App.styles";
import { AddArea } from "./components/AddArea";
import { ListItem } from "./components/ListItem";
import { Item } from "./types/Item";

const App = () => {

  //CRIA A LISTA DE ITENS
  const [list, setList] = useState<Item[]>([]);

  //CRIA A LISTA DE ITENS
  const handleAddTask =(taskName:string) => {

    let newList = [...list ]; // cria uma nova lista, clonando a antiga

    // adiciona um novo item na lista
    newList.push({ 
      id: newList.length + 1,
      name:taskName,
      done:false
    })
    setList(newList);

  }

  return (
    <Container>
      <Area>
        {/* <Header>*/}
        <Header> Lista de tarefas</Header>

        {/*AREA DE ADICIONAR NOVAS TAREFAS */}
        <AddArea onEnter={handleAddTask} />

        {/*LISTA DE TAREFAS */}
        {list.map((item, index) => ( 
            <ListItem item={item} key={index}/>
         
        ))}
      </Area>
    </Container>
  );
};

export default App;
