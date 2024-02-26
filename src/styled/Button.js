import styled from "styled-components";

export const Button= styled.button`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px 18px;
gap: 10px;
width: 220px;
height: 44px;
background-color: black;
border-radius: 5px;
color: white;
font-size: 25px;
margin-left: 300px;
transition: 0.25s;
cursor: pointer;
margin: 0 auto;
&:hover{
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.25s;
}

`;

export const OutlineButton = styled(Button)`
  background-color: white;
  border: 1px solid black;
  color: black;
  margin: 0 auto;
  &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
  }
`;