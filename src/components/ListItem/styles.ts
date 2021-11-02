import styled from "styled-components";

type ContainerProps = {
  done: boolean;
}

export const Container = styled.div(({done}:ContainerProps)=>(
  `
  display:flex;
  background-color:#20212c;
  padding: .75rem;
  border-radius: .25rem;
  margin-bottom: .75rem;
  align-items: center;

  input{
    width: 1.5rem;
    height: 1.5rem;
    margin-right: .5rem;
  }


  label{
    color: #ccc;
    text-decoration: ${done ? 'line-through' : 'initial'};
  }


`
))