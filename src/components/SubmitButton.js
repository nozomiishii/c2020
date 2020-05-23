import styled from "styled-components";

const SubmitButton = styled.button`
  background: inherit;
  border-radius: 0.25rem;
  font-size: 1.4rem;
  font-weight: bolder;
  border: 4px solid green;
  color: green;
  float: right;
  height: 60px;
  width: 120px;
  &:hover {
    background: green;
    border: 5px solid green;
    color: white;
  }
  &:active {
    background: green;
    border: 5px solid green;
    opacity: 0.7;
  }
`;

export default SubmitButton;
