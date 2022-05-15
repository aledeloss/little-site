import React from 'react'
import styled from 'styled-components'

const StyledLabel = styled.label` // switch
    position: relative;
    display: inline-block;
    width: 42px;
    height: 24px;
    align-self: flex-end;
`

const StyledSlider = styled.span` // slider
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.theme.colorSecondary};
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 34px;
  
  &:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 4px;
    bottom: 4px;
    background-color: ${props => props.theme.colorPrimary};
      -webkit-transition: .4s;
      transition: .4s;
      border-radius: 50%;
  }
`

const StyledInput = styled.input` // input
  opacity: 0;
  width: 0;
  height: 0;
  background-color: ${props => props.theme.colorSecondary};

  &:focus + ${StyledSlider} {
    transform: scale(1.1);
    opacity: 0.6;
    outline:${props => props.theme.colorSecondary};;
  }
  
  &:checked + ${StyledSlider} {    
    background-color: ${props => props.theme.colorSecondary};
  }
  
  &:checked + ${StyledSlider}:before {
    -webkit-transform: translateX(18px);
    -ms-transform: translateX(18px);
    transform: translateX(18px);
  }

  &:checked + span:before {
    -webkit-transform: translateX(18px);
    -ms-transform: translateX(18px);
    transform: translateX(18px);
  }
`

interface ISwitch {
  handleClick: React.MouseEventHandler<HTMLElement>;
  theme: string;
}

export const Switch: React.FC<ISwitch> = ({ handleClick, theme }: ISwitch) => {
  return (
    <StyledLabel>
        <StyledInput aria-label='Change theme' tabIndex={0} type="checkbox" onClick={handleClick}/>
        <StyledSlider>
        </StyledSlider>
    </StyledLabel>
  )
}
