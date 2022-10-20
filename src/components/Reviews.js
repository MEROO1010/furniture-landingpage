import React from 'react'
import styled from 'styled-components';
import IMG2 from '../assets/person1.png';
import RightArrow from '../assets/rightArrow.png'

import StarRateIcon from '@mui/icons-material/StarRate';





function Reviews() {
  return (
    <Container>
       <Title>
       <h1>Reviews</h1>
       </Title>

       <Card>
         <IMGAvatar>
          <img src={IMG2} alt=''/>
         

         </IMGAvatar>

       <Icons>
        <StarRateIcon fontSize="large" />
        <StarRateIcon fontSize="large" />
        <StarRateIcon fontSize="large" />
        <StarRateIcon fontSize="large" />
        <StarRateIcon fontSize="large" />
       </Icons>

       <Text>
        <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy <br/>
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam <br/>
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet <br/>
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor…
        </p>
       </Text>

       <PersonName>
          <h1>Ahmed</h1>
       </PersonName>
        
        <ArrowIcon>
          <img src={RightArrow} alt=''/>
        </ArrowIcon>
       </Card>
    </Container>
  )
}

export default Reviews

const Container =styled.div`
width: 100%;
`

const Title = styled.div`
  
  h1{
    font-weight:bold;
    font-size:60px;
    color:#FFE280;
    margin-top:80px;
    margin-left:800px;
  }
`

const Card = styled.div`
 
`

const IMGAvatar = styled.div`
  img{
    margin-top:140px;
    margin-left:800px;

  }
`

const Icons = styled.div`
 color:#FFE280;
 margin-left:840px;
 margin-top:40px;
 
`

const Text = styled.div`
 margin-left:600px;
 margin-top:40px;

 P{
  font-size:20px;
 }
`

const PersonName = styled.div`
  margin-left:880px;
  margin-top:80px;
`

const ArrowIcon =styled.div`
  margin-left:1500px;
  margin-top:-400px;
`

