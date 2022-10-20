import React from 'react'
import styled from 'styled-components';
import Orangechair from '../assets/orangeChair.png';



function aboutUs() {
  return (
     <Container>
       <ChairIMG>
       <img src={Orangechair} alt=""/>
       </ChairIMG> 

       <Title>
         <h1>About Us</h1>
       </Title>

       <Text>

        <p>
        Sed ut perspiciatis unde<br/>
        omnis iste natus  error sit<br/>
        voluptatem accusantium<br/>
         doloremque laudantium, <br/>
         totam rem aperiam,<br/>
          eaque ipsa quae ab illo <br/>
          inventore veritatis et
        </p>
       </Text>
     </Container>
    )
}

export default aboutUs

const Container = styled.div`
  padding-bottom:200px;
`

const ChairIMG = styled.div`
  padding-top:180px;
`

const Title = styled.div`
 margin-left:1200px;
 margin-top:-800px;
 font-size:46px;
`

const Text = styled.div`
 padding-left:1180px;
 padding-top:120px;
 font-size:44px;
`