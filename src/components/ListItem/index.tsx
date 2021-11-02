import { useState } from 'react';
import { Item } from '../../types/Item';
import {Container} from './styles';

type Props = {
  item:Item
}


export const ListItem = (props: Props) => {

  const [isChecked, setIsChecked] = useState(props.item.done);

  return (
    <Container done={isChecked}>
      <input 
        type="checkbox" 
        checked={isChecked}
        onChange={e => setIsChecked(e.target.checked)}
        />
      <label>{props.item.name}</label>
    </Container>
  )

};
