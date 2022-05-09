import styled from 'styled-components';


const Button = styled.button`
  background: ${(props) => ( props.theme ==="dark" ? "blue":"white")};
  border: ${(props)=>(props.border == "solid"?"solid black":"none")};
  border: ${(props)=>(props.border == "dashed"?"dashed black":"")};
  color: ${(props)=>(props.color == "white"?"white": "black " ,props.color == "link"?"blue": "black " )};
  padding:10px;
  width:200px;
  margin:10px;
`;
export {Button}