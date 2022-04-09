import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade'

function section({title,description,leftBtnText,rightBtnText,backgroundImg}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade top>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      </Fade>
      <Buttons>
        <Fade>
        <ButtonGroup>
          <LeftButton>{leftBtnText}</LeftButton>

          {rightBtnText && 
          
          <RightButton>{rightBtnText}</RightButton>
          
          }
        </ButtonGroup>
        </Fade>

        <DownArrow src={"/images/down-arrow.svg"}></DownArrow>
      </Buttons>
    </Wrap>
  );
}

export default section;

const Wrap = styled.div`

  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: centre;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image:${props => `url("/images/${props.bgImage}")`}
  
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: centre;
  z-indexL: -1;
`;
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px){
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  margin: 8px;
  cursor: pointer;
`;
const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color:black;
`;

const DownArrow = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;

const Buttons= styled.div`
`
