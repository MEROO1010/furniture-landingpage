import React from 'react'
import styled from 'styled-components';
import sofaImg from '../assets/sofa_Img.png';
import CardText from '../assets/rectangle1.png'


function ChooseUs() {
  return (
    <Container>
      <BG>
       <img src={sofaImg} alt=""/> 
       
      </BG>

      <Rectangle>
       <img src={CardText} alt=""/>
      </Rectangle>
    </Container>

    
  )
}

export default ChooseUs

const Container = styled.div`
  background-color:#FFE280;
  padding-top:180px;

`

const BG = styled.div`
  padding-top:180px;
  img{
    margin-top:-220px;
    margin-left:368px;
  }
`

const Rectangle = styled.div`
  
  img{
    margin-top:-1000px;
    
  }
`