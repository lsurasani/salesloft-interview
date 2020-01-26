import styled, { css } from 'styled-components'

const PrimaryButton = styled.button`
  font-size: 16px;
  margin: 0 5px;
  display: inline;
  cursor: pointer;
  ${props => props.disabled ?
    css`background-color: #a8a8a8; border: 2px solid #a8a8a8; cursor: not-allowed;` :
    css`background-color: #4a90e2; border: 2px solid #4a90e2;`
  }
  border-radius: 3px;
  padding: 7px;
  color: white;
  height: ${props => props.height ? props.height : 'auto'}
`

export default PrimaryButton;