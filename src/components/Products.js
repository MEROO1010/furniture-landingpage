import React from 'react'
import styled from 'styled-components';
import Chair2 from '../assets/Chair2.png'
import Sofa1 from '../assets/sofa1.png'
import Cushion0 from '../assets/Cushion.png'


function Proudcts() {
  return (
    <Container>
    
    {/*background of section TWO*/}
      <BGColor>
      <CenterTitle>   
         <p>Our Proudects</p>
       </CenterTitle>

       <Chair>
        <img src={Chair2}  alt=''/>
        <p>Chair</p>
       </Chair>
       
       <Sofa>
       <img src={Sofa1}  alt=''/>
       <p>Sofa</p>
       </Sofa>

       <Cushion>
       <img src={Cushion0}  alt=''/>
       <p>Cushion</p>
       </Cushion>
      </BGColor>

     
    </Container>
  )
}

export default Proudcts

const Container = styled.div`

`

const BGColor = styled.div`
 background-color :#FFE280;
 width: 100vw;
height: 100vh;
padding-top:60px;
justify-content: center;
margin-top:-254px;



 
`

const CenterTitle =styled.div`
p{
    margin-top:60px;
    margin-left:780px;
    font-weight: bold;
    font-size:50px;
    color:#575757;
 }
` 

const Chair = styled.div`
 margin-left:1400px;
 margin-top:180px;
  p{
    margin-left:160px;
    margin-top:10px;
    font-weight: bold;
    font-size:40px;
  }
`

const Sofa = styled.div`
 margin-top:-600px;
  margin-left:660px;
  p{
    margin-left:240px;
    margin-top:-20px;
    font-weight: bold;
    font-size:40px;
  }
`

const Cushion = styled.div`
  margin-top:-400px;
  margin-left:60px;
  p{
    margin-left:160px;
    margin-top:60px;
    font-weight: bold;
    font-size:40px;
  }
`