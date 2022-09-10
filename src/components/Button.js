import styled from 'styled-components';

const Button = styled.button`
  transition: box-shadow 0.2s ease;
  background: palevioletred;
  color: white;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    box-shadow: 1px 2px 5px rgb(0, 0, 0, 0.3);
  }
`

export default Button;

